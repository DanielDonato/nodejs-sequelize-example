'use strict';

module.exports = {
  up: (queryInterface, Sequelize) => { // o que ira realizar na base de dados
    return queryInterface.createTable('user_techs', 
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
        tech_id: {
          type: Sequelize.INTEGER,
          allowNull: false,
          references: { //referencia uma tabela
            model: 'techs', //tabela referencia
            key: 'id' //coluna referenciada
          },
          onUpdate: 'CASCADE', // o que acontece ao atualizar o id do usuario
          onDelete: 'CASCADE' // o que acontece ao deletar o id do usuario
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
