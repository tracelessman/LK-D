
const index = {
  platform: {
    mac: 'darwin',
    freebsd: 'freebsd',
    linux: 'linux',
    windows: 'win32'
  },
  electronDistUrl: 'https://atom.io/download/electron',
  sqliteFileName: 'node_sqlite3.node'
}

Object.freeze(index)
module.exports = index
