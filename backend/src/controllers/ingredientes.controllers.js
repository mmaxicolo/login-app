import { User, Ingrediente } from "../models/user.models.js";

export const getIngredientes = async (req, res) => {
  const ingredientes = await User.findOne({ _id: req.user.id });
  res.json({ ingredientes: ingredientes.ingrediente });
};
export const createIngrediente = async (req, res) => {
  const { name, cost, unit, amount } = req.body;
  const newIngrediente = new Ingrediente({
    name,
    cost,
    unit,
    amount,
  });
  console.log(newIngrediente);
  const userCreated = await User.findOneAndUpdate(
    { _id: req.user.id },
    { $push: { ingrediente: newIngrediente } },
    { new: true }
  );

  res.json(userCreated);
};
export const updateIngrediente = async (req, res) => {
  const { name, cost, unit, amount } = req.body;
  const { id } = req.params;

  const userUpdated = await User.findOneAndUpdate(
    { _id: req.user.id, "ingrediente._id": id },
    {
      $set: {
        "ingrediente.$.name": name,
        "ingrediente.$.cost": cost,
        "ingrediente.$.unit": unit,
        "ingrediente.$.amount": amount,
      },
    }
  );

  res.json(userUpdated);
};
export const deleteIngrediente = async (req, res) => {
  const { id } = req.params;

  // Verifica si algún producto utiliza el ingrediente
  const productoConIngrediente = await User.findOne({
    _id: req.user.id,
    'producto.ingredientes.id': id
  });

  if (productoConIngrediente) {
    return res.status(400).json({ error: 'El ingrediente está siendo utilizado por al menos un producto. No se puede eliminar.' });
  }

  // Si ningún producto utiliza el ingrediente, procede a eliminarlo
  const userDeleted = await User.updateOne(
    { _id: req.user.id },
    { $pull: { ingrediente: { _id: id } } }
  );

  res.json(userDeleted);
};

export const getAIngrediente = async (req, res) => {
  const { id } = req.params;
  const ingredientes = await User.findOne(
    { _id: req.user.id, "ingrediente._id": id },
    { "ingrediente.$": 1 }
  );
  res.json(ingredientes);
};