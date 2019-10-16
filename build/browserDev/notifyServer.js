const express = require('express')
const { resolve } = require('path')

function cors(app) {
  app.use('*', (req, res, next) => {
    if (!req.get('Origin')) {
      return next()
    }
    res.set('Access-Control-Allow-Origin', req.headers.origin)
    res.set('Access-Control-Allow-Methods', 'POST, GET, OPTIONS, PATCH, PUT, HEAD, TRACE, DELETE')
    res.set('Access-Control-Allow-Headers', 'X-Requested-With, Content-Type, Accept, Range')
    res.set('Access-Control-Allow-Credentials', 'true')
    if ('OPTIONS' === req.method) {
      return res.status(200).end()
    }
    return next()
  })
}

module.exports = function run(emitter) {
  const server = express()

  let response = null

  emitter.on('postBuild', () => {
    if (response && process.env.LIVE_RELOAD !== 'none') {
      response.json({ success: true })
      response = null
    }
  })

  cors(server)

  server.get('/build-notify.js', (req, res) => {
    res.sendFile(resolve(__dirname, 'clientNotifyScript.js'))
  })

  server.get('/waitforbuild', (req, res) => {
    response = res
  })

  server.listen(18770, '0.0.0.0')
}
