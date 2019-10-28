const Sequelize = require('sequelize');
const dbConfig = require('../config/database');

const User = require('../model/User');

const connection = new Sequelize(dbConfig);

User.init(connection); // importar e fazer essa config para todos os models

module.exports = connection;
