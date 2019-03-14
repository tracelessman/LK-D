const path = require('path')
const fs = require('fs')
const _ = require('lodash')
const config = {
    checkUpdateUrl: 'https://raw.githubusercontent.com/tracelessman/LK-D/publish/upgrade.json'
}

const unversionedPath = path.resolve(__dirname, 'unversioned.js')
if (fs.existsSync(unversionedPath)) {
    _.merge(config, require(unversionedPath))
}
Object.freeze(config)
module.exports = config

