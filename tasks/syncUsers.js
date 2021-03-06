const { Task, api } = require('actionhero')

module.exports = class SyncUsers extends Task {
  constructor () {
    super()
    this.name = 'SyncUsers'
    this.description = 'update users from slack'
    this.frequency = (1000 * 60 * 5)
    this.queue = 'default'
    this.middleware = []
  }

  async run (params) {
    await api.slack.syncUsers()
  }
}
