'use strict';

module.exports = {
  up: (queryInterface, Sequelize) => { // o que ira realizar na base de dados
    return queryInterface.createTable('addresses', 
      { 
        id: {
          type: Sequelize.INTEGER,
          primaryKey: true,
          autoIncrement: true,
          allowNull: false
        },
        user_id: {
          type: Sequelize.INTEGER,
          allowNull: false,
          references: { //referencia uma tabela
            model: 'users', //tabela referencia
            key: 'id' //coluna referenciada
          },
          onUpdate: 'CASCADE', // o que acontece ao atualizar o id do usuario
          onDelete: 'CASCADE' // o que acontece ao deletar o id do usuario
        },
        zipcode: {
          type: Sequelize.STRING,
          allowNull: false
        },
        street: {
          type: Sequelize.STRING,
          allowNull: false
        },
        number: {
          type: Sequelize.INTEGER,
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
    return queryInterface.dropTable('addresses');
  }
};
