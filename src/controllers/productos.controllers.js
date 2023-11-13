import { User, Producto } from "../models/user.models.js";

export const getProducto = async (req, res) => {
    const user = await User.findOne({_id : req.user.id});
    res.json({Productos: user.producto});
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

export const selectIngredientes = async (req, res) => {
    const { ingredientes } = req.body;
    const {id} = req.params;
    console.log(req.body);

    const userUpdated = await User.updateOne({_id: req.user.id, "producto._id":id},{$set:{"producto.$.ingredientes": ingredientes}})

    res.json(userUpdated);
}

export const getIngredientes = async (req, res) => {
    const {id} = req.params;

    const user = await User.findOne({_id : req.user.id});

    const ingrediente = user.producto.find((item) => {
        return item._id == id;
    })
    res.json(ingrediente.ingredientes)
}