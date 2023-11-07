import { User, Ingrediente } from "../models/user.models.js";

export const getIngredientes = async (req, res) => {
    const ingredientes = await User.findOne({_id : req.user.id});
    res.json({ingredinetes: ingredientes.ingrediente})
}
 
export const createIngrediente = async (req, res) => {
    const {nombre, costo, unidad, cantidad} = req.body
    const newIngrediente = new Ingrediente({
        nombre,
        costo,
        unidad,
        cantidad,
    });

    const userUpdated = await User.updateOne({_id : req.user.id}, {$push : {ingrediente: newIngrediente}});

    res.json(userUpdated)

}
export const updateIngrediente = async (req, res) => {
    const {nombre, costo, unidad, cantidad} = req.body;
    const {id} = req.params;

    const userUpdated = await User.updateOne({_id : req.user.id, "ingrediente._id" : id}, {$set : {ingrediente: newIngrediente}});
    
}