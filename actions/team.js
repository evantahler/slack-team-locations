const { api, Action } = require('actionhero')

module.exports = class Team extends Action {
  constructor () {
    super()
    this.name = 'team'
    this.description = 'returns a list of team members and where they are'
    this.outputExample = {}
  }

  async run ({ response }) {
    const { User, Login } = api.models
    response.users = []
    const users = await User.findAll({ include: [Login] })

    for (let i in users) {
      let user = users[i]
      console.log(user)
      response.users.push({
        id: user.id,
        name: user.displayName || user.name,
        image: user.image,
        lat: user.Login ? user.Login.lat : null,
        lng: user.Login ? user.Login.lng : null,
        timeZone: user.Login ? user.Login.timeZone : null,
        lastLogin: user.Login ? user.Login.createdAt : null
      })
    }

    response.users = response.users.sort((a, b) => {
      return a.lastLogin > b.lastLogin
    })
  }
}
