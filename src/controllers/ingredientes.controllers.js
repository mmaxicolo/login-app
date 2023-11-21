import { User, Ingrediente } from "../models/user.models.js";

export const getIngredientes = async (req, res) => {
    const ingredientes = await User.findOne({_id : req.user.id});
    res.json({ingredientes: ingredientes.ingrediente})
}
export const createIngrediente = async (req, res) => {
    const {name, cost, unit, amount} = req.body
    const newIngrediente = new Ingrediente({
        name,
        cost,
        unit,
        amount,
    });

    const userCreated = await User.updateOne({_id : req.user.id}, {$push : {ingrediente: newIngrediente}});

    res.json(userCreated)

}
export const updateIngrediente = async (req, res) => {
    const {nombre, costo, unidad, cantidad} = req.body;
    const {id} = req.params;

    const userUpdated = await User.updateOne({_id : req.user.id, "ingrediente._id" : id}, {$set: {"ingrediente.$.nombre":nombre, "ingrediente.$.costo":costo, "ingrediente.$.unidad": unidad, "ingrediente.$.cantidad": cantidad}})

    res.json(userUpdated);
}
export const deleteIngrediente = async (req, res) => {
    const {id} = req.params;
    const userDeleted = await User.updateOne({_id: req.user.id},{$pull: {ingrediente: {_id:id}}})
    res.json(userDeleted);
}