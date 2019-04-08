const { Task, api } = require('actionhero')

module.exports = class SyncLogins extends Task {
  constructor () {
    super()
    this.name = 'SyncLogins'
    this.description = 'get the login history from slack'
    this.frequency = (1000 * 60 * 5)
    this.queue = 'default'
    this.middleware = []
  }

  async run (params) {
    await api.slack.syncLogins()
  }
}
