const path = require('path')

exports['default'] = {
  plugins: (api) => {
    return {
      'ah-sequelize-plugin': { path: path.join(__dirname, '..', 'node_modules', 'ah-sequelize-plugin') }
    }
  }
}
