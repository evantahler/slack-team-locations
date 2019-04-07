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

      getUsers: async (users = [], cursor) => {
        const { client } = api.slack
        const response = await client.users.list({ cursor })
        users = users.concat(response.members || [])
        if (response.members && response.members.length > 0 && response.response_metadata.next_cursor) {
          return api.slack.getUsers(users, response.response_metadata.next_cursor)
        } else {
          return users
        }
      }
    }
  }
}
