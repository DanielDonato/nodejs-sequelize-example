'use strict';

module.exports = {
  up: (queryInterface, Sequelize) => { // o que ira realizar na base de dados
    return queryInterface.createTable('techs', 
      { 
        id: {
          type: Sequelize.INTEGER,
          primaryKey: true,
          autoIncrement: true,
          allowNull: false
        },
        name: {
          type: Sequelize.STRING,
          allowNull: false
        },
        created_at: {
          type: Sequelize.DATE,
          allowNull: false
        },
        updated_at: {
          type: Sequelize.DATE,
          allowNull: false
        }
      });
  },

  down: (queryInterface, Sequelize) => { // o que ira fazer se der erro ao criar a migraton
    return queryInterface.dropTable('techs');
  }
};
