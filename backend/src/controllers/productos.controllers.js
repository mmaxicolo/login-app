import { User, Producto } from "../models/user.models.js";

export const getProducto = async (req, res) => {
  const user = await User.findOne({ _id: req.user.id });
  res.json({ Productos: user.producto });
};
export const getAProducto = async (req, res) => {
  const { id } = req.params;
  console.log(id);
  const producto = await User.findOne(
    { _id: req.user.id, "producto._id": id },
    { "producto.$": 1 }
  );
  res.json(producto.producto);
};
export const createProducto = async (req, res) => {
  const { name, margen, packaging, aggregate, amountRecipe, ingredientes } = req.body; 
  const newProducto = new Producto({
    name: name,
    margen: margen,
    packaging: packaging,
    aggregate: aggregate,
    amountRecipe: amountRecipe,
    ingredientes: ingredientes
  });
  const userCreated = await User.updateOne(
    { _id: req.user.id },
    { $push: { producto: newProducto } }
  );
  res.json(userCreated);
};
export const updateProducto = async (req, res) => {
  const { id } = req.params;
  const { name, margen, packaging, aggregate, amountRecipe, ingredientes, cost } = req.body; 

  const userUpdated = await User.updateOne(
    { _id: req.user.id, "producto._id": id },
    {
      $set: {
        "producto.$.name": name,
        "producto.$.margen": margen,
        "producto.$.packaging": packaging,
        "producto.$.aggregate": aggregate,
        "producto.$.amountRecipe": amountRecipe,
        "producto.$.ingredientes": ingredientes,
        "producto.$.cost": cost,
      },
    }
  );
  res.json(userUpdated);
};
export const deleteProducto = async (req, res) => {
  const { id } = req.params;
  const userDeleted = await User.updateOne(
    { _id: req.user.id },
    { $pull: { producto: { _id: id } } }
  );
  res.json(userDeleted);
};

export const selectIngredientes = async (req, res) => {
  const { id } = req.params;
  const userUpdated = await User.updateOne(
    { _id: req.user.id, "producto._id": id },
    { $set: { "producto.$.ingredientes": req.body } }
  );

  res.json(userUpdated);
};
export const getIngredientes = async (req, res) => {
  const { id } = req.params;

  const user = await User.findOne({ _id: req.user.id });

  const ingrediente = user.producto.find((item) => {
    return item._id == id;
  });

  res.json(ingrediente);
};
