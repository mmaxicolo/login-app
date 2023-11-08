import { User, Ingrediente, Producto } from "../models/user.models.js";

export const getProducto = async (req, res) => {
    const Productos = await User.findOne({_id : req.user.id});
    res.json({Productos: Productos.producto});
}

export const createProducto = async (req,res) => {
    const {nombre, margen, packaging, agregado, cantidadReceta} = req.body;
    const newProducto = new Producto({
        nombre,
        margen,
        packaging,
        agregado,
        cantidadReceta,
    });
    const userCreated = await User.updateOne({_id: req.user.id}, {$push: {producto: newProducto}});
    res.json(userCreated);
}

export const updateProducto = async (req,res) => {
    const {nombre, margen, packaging, agregado, cantidadReceta} = req.body
    const {id} = req.params;

    const userUpdated = await User.updateOne({_id: req.user.id, "producto._id" : id}, {$set: {"producto.$.nombre":nombre, "producto.$.margen":margen, "producto.$.packaging": packaging, "producto.$.agregado": agregado, "producto.$.cantidadReceta": cantidadReceta}});
    res.json(userUpdated);
}

export const deleteProducto = async (req,res) => {
    const {id} = req.params;
    const userDeleted = await User.updateOne({_id: req.user.id},{$pull: {producto: {_id:id}}})
    res.json(userDeleted);
}