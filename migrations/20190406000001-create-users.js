module.exports = {
  up: async function (migration, DataTypes) {
    await migration.createTable('users', {
      id: {
        type: DataTypes.STRING(191),
        primaryKey: true,
        autoIncrement: false
      },
      createdAt: DataTypes.DATE,
      updatedAt: DataTypes.DATE,

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
      charset: 'utf8mb4'
    })
  },

  down: async function (migration, DataTypes) {
    await migration.dropTable('users')
  }
}
