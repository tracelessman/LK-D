const {CliUtil} = require('@ys/collection')
const {execSync} = CliUtil
const path = require('path')
const rootDir = path.resolve(__dirname, '../')
const chalk = require('chalk')
const childProcess = require('child_process')
chalk.green('sqlite3 generated successfully')
childProcess.execSync(`npm i`, {
  cwd: path.resolve(rootDir, 'node_modules/sqlite3')
})
execSync(`
asar pack node_modules/sqlite3 asars/sqlite3.asar
`)

console.log(chalk.green.bold('sqlite3 generated successfully'))
