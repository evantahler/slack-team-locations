const Login = function (sequelize, DataTypes) {
  const Model = sequelize.define('Login', {
    userId: {
      type: DataTypes.STRING(191),
      allowNull: false
    },
    count: {
      type: DataTypes.INTEGER,
      allowNull: false
    },
    ip: {
      type: DataTypes.STRING(191),
      allowNull: false
    },
    lat: {
      type: DataTypes.FLOAT,
      allowNull: true
    },
    lng: {
      type: DataTypes.FLOAT,
      allowNull: true
    },
    timeZone: {
      type: DataTypes.STRING(191),
      allowNull: true
    }
  }, {
    tableName: 'logins'
  })

  return Model
}

module.exports = Login
