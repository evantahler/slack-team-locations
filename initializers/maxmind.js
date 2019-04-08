const { Initializer, api } = require('actionhero')
const maxmind = require('maxmind')
const geolite2 = require('geolite2')

module.exports = class Maxmind extends Initializer {
  constructor () {
    super()
    this.name = 'maxmind'
  }

  async initialize () {
    api.maxmind = {
      configure: async () => {
        return new Promise((resolve, reject) => {
          maxmind.open(geolite2.paths.city, (error, cityLookup) => {
            if (error) { return reject(error) }
            api.log(`loaded maxmind geolite2 database from ${geolite2.paths.city}`)
            // var city = cityLookup.get('66.6.44.4');
            api.maxmind.cityLookup = cityLookup
            return resolve()
          })
        })
      },

      lookup: (ip) => {
        return api.maxmind.cityLookup.get(ip)
      }
    }
  }

  async start () {
    await api.maxmind.configure()
  }
}
