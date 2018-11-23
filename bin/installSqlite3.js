const {CliUtil} = require('@ys/collection')
const {execSync} = CliUtil
const fse = require('fs-extra')
const path = require('path')
const rootDir = path.resolve(__dirname, '../')
const nodeModules = path.resolve(rootDir, 'node_modules')
const electronFolder = path.resolve(nodeModules, 'electron')
const childProcess = require('child_process')
const packageJSON = require(path.resolve(rootDir, 'package.json'))
const debug = require('debug')('debug')
const constant = require(path.resolve(rootDir, 'constant'))
const _ = require('lodash')
const resource = path.resolve(rootDir, 'resource')
const {sqliteFileName, electronDistUrl, platform} = constant
const semver = require('semver')

const electronVersion = getElectronVersion()
debug({electronVersion})
const cmd = `npm i sqlite3 --runtime=electron --target=${electronVersion} --dist-url=${electronDistUrl}`
debug({cmd})
execSync(cmd)

console.log(
  `sqlite3 installed successfully`
)

moveToResource()

function moveToResource() {
  const folderName = _.findKey(platform, v => {
    return v === process.platform
  })
  const dest = path.resolve(resource, folderName, sqliteFileName)
  const sqliteNodeFolderName = getSqliteNodeFolderName({electronVersion})
  const sqilteNodeFolder = path.resolve(nodeModules, 'sqlite3/lib/binding', sqliteNodeFolderName)
  fse.ensureDirSync(sqilteNodeFolder)
  const src = path.resolve(sqilteNodeFolder, sqliteFileName)
  fse.copySync(src, dest)
  console.log(`move builded file to ${dest}, it should be committed`)
}

function getSqliteNodeFolderName ({electronVersion}) {
  const major = semver.major(electronVersion)
  const minor = semver.minor(electronVersion)
  const infrastructure = getInfrastructure()

  return `electron-v${major}.${minor}-${process.platform}-${infrastructure}`
}

function getInfrastructure() {
  // todo: decide 32 or 64
  return 'x64'
}

function getElectronVersion() {
  let result
  if (fse.existsSync(electronFolder)) {
    const str = childProcess.execSync(
      `npm ls electron`
    ).toString()
    result = str.split('electron@')[1].trim()
  } else {
    const {electron} = packageJSON.devDependencies
    if (electron) {
      result = electron
    } else {
      throw new Error('electron not in devDependencies, please install it first')
    }
  }
  return result
}

