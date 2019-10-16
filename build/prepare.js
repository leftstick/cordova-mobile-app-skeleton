const { spawn } = require('child_process')
const { resolve } = require('path')
const { existsSync, mkdirSync } = require('fs')

const wwwFolder = resolve(__dirname, '..', 'www')

if (!existsSync(wwwFolder)) {
  mkdirSync(wwwFolder)
}

const childProcess = spawn('npx', ['cordova', 'prepare', '--color'], {
  cwd: resolve(__dirname, '..')
})

childProcess.stdout.pipe(process.stdin)
