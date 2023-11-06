import User from "../models/user.models.js";

export const getIngredientes = async (req, res) => {
    console.log(await User.findOne({_id : req.user.id}));
    res.send(req.user)
}