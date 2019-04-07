module.exports = {
  up: async function (migration, DataTypes) {
    await migration.createTable('logins', {
      id: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true
      },
      createdAt: DataTypes.DATE,
      updatedAt: DataTypes.DATE,

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
        allowNull: true
      },
      lng: {
        type: DataTypes.FLOAT,
        allowNull: true
      }
    }, {
      charset: 'utf8mb4'
    })

    await migration.addIndex('logins', ['userId'], {
      indicesType: 'UNIQUE'
    })
  },

  down: async function (migration, DataTypes) {
    await migration.dropTable('logins')
  }
}
