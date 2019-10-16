const buildRunner = require('./buildRunner')
const notifyServer = require('./notifyServer')

notifyServer(buildRunner())
