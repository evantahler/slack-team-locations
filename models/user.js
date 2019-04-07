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

  Model.prototype.apiData = async function () {
    return {
      id: this.id,
      createdAt: this.createdAt,
      updatedAt: this.updatedAt,
      name: this.name,
      displayName: this.displayName,
      email: this.email,
      image: this.image
    }
  }

  return Model
}

module.exports = User
