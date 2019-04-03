const path = require('path')
const fs = require('fs')
// const _ = require('lodash')

const {getGoldenHeight} = require('../util/Independent')

const minWidth = 780
const minHeight = getGoldenHeight(this.minWidth)
const config = {
  //checkUpdateUrl: 'https://raw.githubusercontent.com/tracelessman/LK-D/publish/upgrade.json',
  checkUpdateUrl:'http://193.112.250.147:3000/public/LK-D/upgrade.json',
  minWidth,
  minHeight,
  isDev: true, // 是否开发模式
  checkUpdateTimeout: 1000 * 5
}

// const unversionedPath = path.resolve(__dirname, 'unversioned.js')
// if (fs.existsSync(unversionedPath)) {
//   _.merge(config, require(unversionedPath))
// }
Object.freeze(config)
module.exports = config
