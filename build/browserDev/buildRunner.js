const EventEmitter = require('events')
const { spawn, execSync } = require('child_process')
const { resolve } = require('path')

const PROCESSES = {
  umi: 'npx umi build --watch',
  cordovaBrowser: 'npx cordova run browser'
}

function killProcess(id) {
  execSync(`ps -ef | grep "${id}" | grep -v grep | awk '{print $2}' | xargs kill`)
}

function isProcessExist(id) {
  return !!execSync(`ps -ef | grep "${id}" | grep -v grep | awk '{print $2}'`).toString()
}

module.exports = function() {
  const emitter = new EventEmitter()

  killProcess(PROCESSES.umi)
  killProcess(PROCESSES.cordovaBrowser)

  const childProcess = spawn('npx', ['umi', 'build', '--watch', '--color'], {
    cwd: resolve(__dirname, '..', '..'),
    env: {
      ...process.env,
      CORDOVA_BROWSER: 'true',
      COMPRESS: 'none',
      CSS_COMPRESS: 'none'
    }
  })

  childProcess.stdout.pipe(process.stdin)

  childProcess.stdout.on('data', data => {
    if (data.includes('You can also analyze the project dependencies')) {
      if (isProcessExist(PROCESSES.cordovaBrowser)) {
        const child = spawn('npx', ['cordova', 'build', 'browser'])
        child.on('exit', () => {
          emitter.emit('postBuild')
        })
      } else {
        spawn('npx', ['cordova', 'run', 'browser'])
      }
    }
  })

  return emitter
}
