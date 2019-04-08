const env = require('./config.js')

module.exports = {
  presets: ["@babel/preset-env", "@babel/preset-react"],
  plugins: [['transform-define', env]]
}
