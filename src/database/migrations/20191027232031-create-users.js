'use strict';

module.exports = {
  up: (queryInterface, Sequelize) => { // o que ira realizar na base de dados
    return queryInterface.createTable('users', 
      { 
        id: {
          type: Sequelize.INTEGER,
          primaryKey: true,
          autoIncrement: true,
          alloNull: false
        },
        name: {
          type: Sequelize.STRING,
          alloNull: false
        },
        email: {
          type: Sequelize.STRING,
          alloNull: false
        },
        created_at: {
          type: Sequelize.DATE,
          alloNull: false
        },
        updated_at: {
          type: Sequelize.DATE,
          alloNull: false
        }
      });
  },

  down: (queryInterface, Sequelize) => { // o que ira fazer se der erro ao criar a migraton
    return queryInterface.dropTable('users');
  }
};
