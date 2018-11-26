'use strict'

process.env.NODE_ENV = 'production'

const del = require('del')
const webpack = require('webpack')

const mainConfig = require('./webpack.main.config.js')
const rendererConfig = require('./webpack.renderer.config.js')

build()

function build () {
  del.sync(['./*.bundle.js', 'index/*.bundle.js'])

  let results = ''

  pack(mainConfig).then(result => {
    results += result + '\n\n'
  }).catch(err => {
    console.log(`\n  ${err} failed to build main process`)
    console.error(`\n${err}\n`)
    process.exit(1)
  })

  pack(rendererConfig).then(result => {
    results += result + '\n\n'
  }).catch(err => {
    console.log(`\n  ${err}failed to build renderer process`)
    console.error(`\n${err}\n`)
    process.exit(1)
  })
}

function pack (config) {
  return new Promise((resolve, reject) => {
    webpack(config, (err, stats) => {
      if (err) { reject(err.stack || err) } else if (stats.hasErrors()) {
        let err = ''

        stats.toString({
          chunks: false,
          colors: true
        })
          .split(/\r?\n/)
          .forEach(line => {
            err += `    ${line}\n`
          })

        reject(err)
      } else {
        resolve(stats.toString({
          chunks: false,
          colors: true
        }))
      }
    })
  })
}
