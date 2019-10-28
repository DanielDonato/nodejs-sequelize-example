const { Op } = require('sequelize');
const User = require('../model/User');

module.exports = {

    async show(req, res) { 
        const users = await User.findAll({
            attributes: ['name', 'email'],
            where: {
                email: {
                    [Op.like]: '%@gmail.com.br' //[Op.like] => permite passar o valor da variavel como chave do obj
                }
            },
            include: [
                { association: 'addresses', where: {street: 'Rua'} },
                { 
                    association: 'techs',
                    required: false, // se vai filtrar ou não
                     where: {
                        name: {
                            [Op.like]: 'react%'
                        } 
                    } 
                }
            ]
        });
        return res.json(users);
    }
};
