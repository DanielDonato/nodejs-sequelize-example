const User = require('../model/User');
const Tech = require('../model/Tech');

module.exports = {

    async index(req, res){
        const { user_id } = req.params;
        const user = await User.findByPk(user_id, {
            include: {association: 'techs', 
                //attributes: ['name'],  atributos que devem ser listados
                through: {attributes: []}
            } // through: {attributes: []} => attributes == atributos que devem vir da tabela de relacionamento
        });
        return res.json(user.techs);
    },

    async store(req, res){
        const { user_id } = req.params;
        const { name } = req.body;
        const user = await User.findByPk(user_id);
        if(!user){
            return res.status(400).json({error: "User not found"});
        }
        const [ tech ] = await Tech.findOrCreate({
            where: { name }
        });
        await user.addTech(tech); // addTech criado pelo relacionamento
        return res.json(tech);
    },

    async delete(req, res){
        const { user_id } = req.params;
        const { name } = req.body;
        const user = await User.findByPk(user_id);
        if(!user){
            return res.status(400).json({error: "User not found"});
        }
        const tech = await Tech.findOne({
            where: { name }
        });
        await user.removeTech(tech); // removeTech criado pelo relacionamento
        return res.status(204).json();
    }
};
