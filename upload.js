const fs = require('fs')
const path = require('path')
const node_ssh = require('node-ssh')
const ssh = new node_ssh()
const password = 'abc@147258369'
const username = 'root'
const host = '193.112.250.147'

const cmd = 'cd /root/Test/LK-S;git pull;cd static/public/LK-D;git pull;cd ../../../;npm run dev:web'

function upload() {
    ssh.connect({
        host,
        username,
        port: 22,
        password,
    })
        .then(function () {
            ssh.exec(cmd, [], {
                onStdout(chunk) {
                    console.log('test')
                    console.log('stdoutChunk', chunk.toString('utf8'))
                },
                onStderr(chunk) {
                    console.log('stderrChunk', chunk.toString('utf8'))
                },
            })
        })
}

module.exports = upload



