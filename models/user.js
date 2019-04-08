const User = function (sequelize, DataTypes) {
  const Model = sequelize.define('User', {
    name: {
      type: DataTypes.STRING(191),
      allowNull: false
    },
    displayName: {
      type: DataTypes.STRING(191),
      allowNull: true
    },
    email: {
      type: DataTypes.STRING(191),
      allowNull: true
    },
    image: {
      type: DataTypes.TEXT,
      allowNull: true
    }
  }, {
    tableName: 'users'
  })

  return Model
}

module.exports = User
