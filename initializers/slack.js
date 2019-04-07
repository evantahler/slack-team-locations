const { Initializer, api } = require('actionhero')
const { WebClient } = require('@slack/web-api')

module.exports = class MyInitializer extends Initializer {
  constructor () {
    super()
    this.name = 'slack'
  }

  async initialize () {
    api.slack = {
      client: new WebClient(api.config.slack.token),

      syncUsers: async () => {
        const users = await api.slack.getUsers()

        for (let i in users) {
          let _user = users[i]
          if (_user.is_bot) { continue }

          let args = {
            id: _user.id,
            name: _user.name,
            displayName: _user.profile.display_name,
            email: _user.profile.email || null,
            image: _user.profile.image_512
          }

          await api.models.User.findOrCreate({ where: args, defaults: args })
        }
      },

      syncLogins: async () => {
        const logs = await api.slack.getLogins()

        for (let i in logs) {
          let _log = logs[i]

          await api.models.Login.deleteAll({ where: { userId: _log.user_id } })

          let args = {
            userId: _log.user_id,
            count: _log.count,
            ip: _log.ip,
            lat: null,
            lng: null
          }

          await api.models.Login.create({ where: args })
        }
      },

      getUsers: async (users = [], cursor) => {
        const { client } = api.slack
        const response = await client.users.list({ cursor })
        users = users.concat(response.members || [])
        if (response.members && response.members.length > 0 && response.response_metadata.next_cursor) {
          return api.slack.getUsers(users, response.response_metadata.next_cursor)
        } else {
          return users
        }
      },

      getLogins: async (logins = [], cursor) => {
        const { client } = api.slack
        const response = await client.team.accessLogs({ cursor })
        logins = logins.concat(response.logins || [])
        if (response.logins && response.logins.length > 0 && response.response_metadata.next_cursor) {
          return api.slack.getUsers(logins, response.response_metadata.next_cursor)
        } else {
          return logins
        }
      }
    }
  }
}
