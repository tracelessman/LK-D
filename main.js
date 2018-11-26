const electron = require('electron')
// Module to control application life.
const app = electron.app
// Module to create native browser window.
const BrowserWindow = electron.BrowserWindow
const ipc = require('electron').ipcMain

const path = require('path')
const url = require('url')
const fs = require('fs')
const nativeImage = require('electron').nativeImage
const net = electron.net
const dialog = electron.dialog
const originalFs = require('original-fs')
const globalShortcut = electron.globalShortcut
const pageDir = ''
const packageJSON = require('./package.json')

function isDev () {
  const getFromEnv = parseInt(process.env.ELECTRON_IS_DEV, 10) === 1
  const isEnvSet = 'ELECTRON_IS_DEV' in process.env
  return isEnvSet ? getFromEnv : (process.defaultApp || /node_modules[\\/]electron[\\/]/.test(process.execPath))
}

// Keep a global reference of the window object, if you don't, the window will
// be closed automatically when the JavaScript object is garbage collected.
let mainWindow
function createWindow () {
  // Create the browser window.
  mainWindow = new BrowserWindow({width: 1024, height: 768})
  mainWindow.loadURL(url.format({
    pathname: path.join(__dirname, pageDir + '/index/loading.html'),
    protocol: 'file:',
    slashes: true
  }))
  global.mainWindow = mainWindow
  global.appVersion = packageJSON.version
  mainWindow.webContents.openDevTools()

  // and load the index.html of the app.
  checkUpdate(function (hasNew) {
    if (hasNew) {
      mainWindow.loadURL(url.format({
        pathname: path.join(__dirname, pageDir + '/index/update.html'),
        protocol: 'file:',
        slashes: true
      }))
    } else {
      mainWindow.loadURL(url.format({
        pathname: path.join(__dirname, pageDir + '/index/index.html'),
        protocol: 'file:',
        slashes: true
      }))
    }
  })

  // Open the DevTools.
  // mainWindow.webContents.openDevTools()

  // Emitted when the window is closed.
  mainWindow.on('closed', function () {
    // Dereference the window object, usually you would store windows
    // in an array if your app supports multi windows, this is the time
    // when you should delete the corresponding element.
    mainWindow = null
  })

  mainWindow.on('focus', function () {
    mainWindow.webContents.send('mainWindow-focus')
  })
}

// This method will be called when Electron has finished
// initialization and is ready to create browser windows.
// Some APIs can only be used after this event occurs.
app.on('ready', createWindow)
app.on('ready', () => {
  // 注册一个 'CommandOrControl+X' 的全局快捷键
  const ret = globalShortcut.register('Control+Alt+A', () => {
    if (!captureBrowser) { openCaptureBrowser() }
  })
})

app.on('will-quit', () => {
  globalShortcut.unregisterAll()
})

// Quit when all windows are closed.
app.on('window-all-closed', function () {
  // On OS X it is common for applications and their menu bar
  // to stay active until the user quits explicitly with Cmd + Q
  if (process.platform !== 'darwin') {
    app.quit()
  }
})

app.on('activate', function () {
  // On OS X it's common to re-create a window in the app when the
  // dock icon is clicked and there are no other windows open.
  if (mainWindow === null) {
    createWindow()
  }
})

ipc.on('openFileDialog', function (event, arg) {
  let result = dialog.showOpenDialog({properties: ['openFile']})
  if (result && result.length > 0) {
    fs.readFile(result[0], function (err, buf) {
      if (buf) {
        let data = buf.toJSON().data
        let tmp = result[0].split(/[\\|\/]/ig)

        event.sender.send('openFileDialog-response', {data, name: tmp[tmp.length - 1]})
      }
    })
  }
})

let imageBrowser
ipc.on('openImageBrowser', function (event, arg) {
  global.imageHtml = arg.html
  if (!imageBrowser) {
    imageBrowser = new BrowserWindow()

    imageBrowser.on('closed', function () {
      // Dereference the window object, usually you would store windows
      // in an array if your app supports multi windows, this is the time
      // when you should delete the corresponding element.
      imageBrowser = null
    })
  }
  imageBrowser.loadURL(url.format({
    pathname: path.join(__dirname, pageDir + '/recent/showImage.html'),
    protocol: 'file:',
    slashes: true
  }))
  imageBrowser.setSize(arg.width + 100, arg.height + 100)
  imageBrowser.center()
  imageBrowser.setAlwaysOnTop(false)
  imageBrowser.show()
})

let captureBrowser
function openCaptureBrowser () {
  if (!captureBrowser) {
    captureBrowser = new BrowserWindow({frame: false, modal: true, transparent: true, show: false, width: 0, height: 0, alwaysOnTop: true})
    captureBrowser.on('closed', function () {
      captureBrowser = null
    })
  }
  captureBrowser.loadURL(url.format({
    pathname: path.join(__dirname, pageDir + '/recent/showCapture.html'),
    protocol: 'file:',
    slashes: true
  }))
  // captureBrowser.setFullScreen(true);
}
ipc.on('openCaptureBrowser', function (event, arg) {
  openCaptureBrowser()
})

ipc.on('showCaptureBrowser', function (event, arg) {
  captureBrowser.setFullScreen(true)
  captureBrowser.show()
})
ipc.on('closeCaptureBrowser', function (event, arg) {
  if (captureBrowser) {
    captureBrowser.minimize()
    captureBrowser.close()
    captureBrowser = null
    if (arg) { mainWindow.webContents.send('capture-complete') }
  }
})

if (app.dock) {
  let image = nativeImage.createFromPath(path.join(__dirname, '/images/traceless.png'))
  app.dock.setIcon(image)
}

ipc.on('messageReceive', function (event, arg) {
  if (app.dock) {
    if (arg.total) {
      app.dock.setBadge(arg.total + '')
    }
  }
})
ipc.on('messageRead', function (event, arg) {
  if (app.dock) {
    if (arg.total) {
      app.dock.setBadge(arg.total + '')
    } else {
      app.dock.setBadge('')
    }
  }
})
let hasNewVersion = false
let latestVersion
let files = []
function compareVersion (v1, v2) {
  // console.log({v1, v2})
  let v1s = v1.split('.')
  let v2s = v2.split('.')
  for (let i = 0; i < 3; i++) {
    let n1 = parseInt(v1s[i])
    let n2 = parseInt(v2s[i])
    if (n1 > n2) {
      return 1
    } else if (n1 == n2) {

    } else {
      return -1
    }
  }
  return 0
}
function checkUpdate (callback) {
  let request = net.request('https://raw.githubusercontent.com/tracelessman/LK-D/publish/upgrade.json')
  request.on('response', (response) => {
    let text = ''
    if (response.statusCode == 200) {
      response.on('data', (chunk) => {
        text += chunk
      })
      response.on('end', () => {
        let des = JSON.parse(text)
        latestVersion = des.version
        if (compareVersion(latestVersion, packageJSON.version) == 1) {
          hasNewVersion = true
          callback(true)
          let changeList = des.changeList
          files = ['package.json']
          for (let i = 0; i < changeList.length; i++) {
            let change = changeList[i]
            // var vChange = parseInt(change.version.replace(/\./ig,""));
            if (compareVersion(change.version, packageJSON.version) == 1) {
              let _cfs = change.files
              _cfs.forEach(function (f) {
                if (files.indexOf(f) == -1) {
                  files.push(f)
                }
              })
            }
          }
        } else {
          callback(false)
        }
      })
    } else {
      callback(false)
      console.info('check update response.statusCode:' + response.statusCode)
    }
  })
  request.on('error', function (err) {
    callback(false)
    console.info(err.toString())
  })
  request.end()
}

ipc.on('remoteVersion-request', function (event, arg) {
  checkUpdate(function (hasNew) {
    event.sender.send('remoteVersion-response', latestVersion || packageJSON.version)
  })
})

ipc.on('upgrade-request', function (event, arg) {
  checkUpdate(function (hasNew) {
    if (hasNew) {
      mainWindow.loadURL(url.format({
        pathname: path.join(__dirname, pageDir + '/index/update.html'),
        protocol: 'file:',
        slashes: true
      }))
    } else if (arg.toIndexIFNot !== false) {
      mainWindow.loadURL(url.format({
        pathname: path.join(__dirname, pageDir + '/index/index.html'),
        protocol: 'file:',
        slashes: true
      }))
    }
  })
})
let upgradeMessages = new Map()

ipc.on('start-download', function (event, arg) {
  download(files)
})

ipc.on('restart', function (event, arg) {
  app.relaunch()
  app.exit(0)
})
const labels = {
  cut: '剪切',
  copy: '复制',
  paste: '粘贴',
  save: '保存',
  copyLink: '复制链接'
}
if (process.env.NODE_ENV === 'development') {
  labels.inspect = 'Inspect'
}
require('electron-context-menu')({
  labels
})

function getUpgradeMessages () {
  let html = ''
  upgradeMessages.forEach(function (v, k) {
    html += k + '---------------------' + v + '<br>'
  })
  return html
}
function download (files) {
  let baseURI = 'https://raw.githubusercontent.com/tracelessman/LK-D/publish/'
  let index = baseURI.length

  let count = 0
  let count2 = 0
  function changeMsg (f, m) {
    upgradeMessages.set(f, m)
    global.upgradeMessage = getUpgradeMessages()
    mainWindow.webContents.executeJavaScript('update()')
  }
  let tmpDir = path.join(__dirname, '_tmp')

  function deleteFolder (p) {
    let files = []
    if (fs.existsSync(p)) {
      files = fs.readdirSync(p)
      files.forEach(function (file) {
        let curPath = path.join(p, file)
        if (fs.statSync(curPath).isDirectory() && !curPath.endsWith('.asar')) {
          deleteFolder(curPath)
        } else {
          fs.unlinkSync(curPath)
        }
      })
      try {
        fs.rmdirSync(p)
      } catch (e) {
        let _files = fs.readdirSync(p)
        _files.forEach(function (file) {
          dialog.showMessageBox({message: file})
        })
      }
    }
  }
  deleteFolder(tmpDir)
  function copyFiles (srcDir, targetDir) {
    let files = fs.readdirSync(srcDir)
    files.forEach(function (file) {
      let curPath = path.join(srcDir, file)
      let targetPath = path.join(targetDir, file)

      if (fs.statSync(curPath).isDirectory()) { // recurse
        if (curPath.endsWith('.asar')) {
          originalFs.writeFileSync(targetPath, originalFs.readFileSync(curPath))
        } else {
          if (!fs.existsSync(targetPath)) {
            fs.mkdirSync(targetPath)
          }
          copyFiles(curPath, targetPath)
        }
      } else {
        // fs.copyFileSync(curPath,targetPath);
        // var srcS = fs.createReadStream(curPath);
        // var targetS = fs.createWriteStream(targetPath);
        // srcS.pipe(targetS);
        // srcS.destroy();
        // targetS.destroy();
        fs.renameSync(curPath, targetPath)
      }
    })
  }

  mainWindow.webContents.session.on('will-download', (event, item, webContents) => {
    // 设置文件存放位置
    let f = item.getURL().substring(index)
    item.setSavePath(path.join(tmpDir, f))
    item.on('updated', (event, state) => {
      if (state === 'interrupted') {
        changeMsg(f, 'interrupted')
      } else if (state === 'progressing') {
        if (item.isPaused()) {
          changeMsg(f, 'paused')
        } else {
          changeMsg(f, Math.round((item.getReceivedBytes() / item.getTotalBytes()) * 100) + '%')
        }
      }
    })
    item.once('done', (event, state) => {
      count++
      if (state === 'completed') {
        count2++
        changeMsg(f, '100%')
      } else {
        changeMsg(f, `Download failed: ${state}`)
      }
      if (count == files.length) {
        if (count2 == count) {
          let targetDir = __dirname
          if (isDev()) {
            targetDir = path.join(__dirname, '_tmp2')

            if (!fs.existsSync(targetDir)) {
              fs.mkdirSync(targetDir)
            }
          }
          copyFiles(tmpDir, targetDir)
          deleteFolder(tmpDir)
        }
        mainWindow.webContents.executeJavaScript('complete()')
      }
    })
  })

  files.forEach(function (f) {
    changeMsg(f, 'downloading')
    mainWindow.webContents.downloadURL(baseURI + f)
  })
  if (files.length == 0) {
    mainWindow.webContents.executeJavaScript('complete()')
  }
}

// In this file you can include the rest of your app's specific main process
// code. You can also put them in separate files and require them here.
