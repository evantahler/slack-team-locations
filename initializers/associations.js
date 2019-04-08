const { Initializer, api } = require('actionhero')

module.exports = class Associations extends Initializer {
  constructor () {
    super()
    this.name = 'associations'
  }

  async start () {
    const { User, Login } = api.models

    User.hasOne(Login)
    Login.belongsTo(User)
  }
}
