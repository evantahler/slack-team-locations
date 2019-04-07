const User = function (sequelize, DataTypes) {
  const Model = sequelize.define('Login', {
    userId: {
      type: DataTypes.INTEGER,
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
      allowNull: false
    },
    lng: {
      type: DataTypes.FLOAT,
      allowNull: false
    }
  }, {
    tableName: 'logins'
  })

  Model.prototype.apiData = async function () {
    return {
      id: this.id,
      userId: this.userId,
      createdAt: this.createdAt,
      count: this.count,
      ip: this.ip,
      lat: this.lat,
      lng: this.lng
    }
  }

  return Model
}

module.exports = User
