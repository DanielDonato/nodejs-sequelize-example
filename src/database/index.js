const Sequelize = require('sequelize');
const dbConfig = require('../config/database');

const User = require('../model/User');
const Address = require('../model/Address');
const Tech = require('../model/Tech');

const connection = new Sequelize(dbConfig);

User.init(connection); // importar e fazer essa config para todos os models
Address.init(connection);
Tech.init(connection);

Address.associate(connection.models);
User.associate(connection.models);
Tech.associate(connection.models);

module.exports = connection;
