const fse = require('fs-extra')
const path = require('path')
const rootDir = path.resolve(__dirname, '../')
const nodeModules = path.resolve(rootDir, 'node_modules')
const electronFolder = path.resolve(nodeModules, 'electron')
const packageJSON = require(path.resolve(rootDir, 'package.json'))


class Common {
  static getElectronVersion() {
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

  static getSqliteNodeFolderName ({electronVersion}) {
  const major = semver.major(electronVersion)s
  const minor = semver.minor(electronVersion)
  const infrastructure = getInfrastructure()

  return `electron-v${major}.${minor}-${process.platform}-${infrastructure}`
}

static getInfrastructure() {
  // todo: decide 32 or 64
  return 'x64'
}

}

Object.freeze(Common)
module.exports = Common
