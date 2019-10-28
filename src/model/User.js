const { Model, DataTypes } = require('sequelize');

class User extends Model {

    static init(sequelize){ //metodo padrão pra utilizar sequelize
        super.init({
            name: DataTypes.STRING,
            email: DataTypes.STRING
        }, {
            sequelize
        });
    }
}

module.exports = User;
