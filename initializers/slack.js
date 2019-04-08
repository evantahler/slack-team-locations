const { Initializer, api } = require('actionhero')
const { WebClient } = require('@slack/web-api')

module.exports = class Slack extends Initializer {
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

        api.log(`synced ${users.length} user records from slack`)
      },

      syncLogins: async () => {
        const logs = await api.slack.getLogins()

        for (let i in logs) {
          let _log = logs[i]
          let date = new Date(_log.date_last * 1000)

          let args = {
            createdAt: date,
            updatedAt: date,
            userId: _log.user_id,
            count: _log.count,
            ip: _log.ip
          }

          let latestStoredLogin = await api.models.Login.findOne({ where: { userId: args.userId } })
          if (latestStoredLogin && latestStoredLogin.createdAt > date) { continue }

          let geoLookup = api.maxmind.lookup(args.ip)
          if (geoLookup && geoLookup.location) {
            args.lat = geoLookup.location.latitude
            args.lng = geoLookup.location.longitude
            args.timeZone = geoLookup.location.time_zone
          }

          await api.models.Login.destroy({ where: { userId: args.userId } })
          await api.models.Login.create(args)
        }

        api.log(`synced ${logs.length} login records from slack`)
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

      getLogins: async (logins = [], page = 1, count = 1000, limit = 10000) => {
        // TODO: paginate this with callbacks so we don't have to worry about `limit`

        const { client } = api.slack
        const response = await client.team.accessLogs({ page, count })
        logins = logins.concat(response.logins || [])
        const { pages } = response.paging
        if (page < pages && logins.length < limit) {
          return api.slack.getLogins(logins, (page + 1), count, limit)
        } else {
          return logins
        }
      }
    }
  }
}
