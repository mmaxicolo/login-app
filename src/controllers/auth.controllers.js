import { User } from '../models/user.models.js';
import bcrypt from 'bcryptjs';
import { createAccesToken } from "../libs/jwt.js";

export const register = async (req, res) => {
    const { user, mail, password } = req.body;

    try {

        const passwordHash = await bcrypt.hash(password, 10);

        const newUser = new User({
            user,
            mail,
            password: passwordHash
        })

        const nuevoUser = await newUser.save();
        const token = await createAccesToken({id: nuevoUser._id});
        res.cookie('token', token);

        res.json({
            id : nuevoUser._id,
            user : nuevoUser.user,
            mail: nuevoUser.mail
        });
    } catch (error) {
        res.status(500).json({
            message : error.message
        })
    }
}

export const login = async (req, res) => {
    const { mail, password } = req.body;

    try {

        const userFound = await User.findOne({ mail });
        if(!userFound) return res.status(400).json({messaje: "user not founded"});


        const isMatch = await bcrypt.compare(password, userFound.password);
        if(!isMatch) return res.status(500).json({message: "password incorrect"});
        
        const token = await createAccesToken({id: userFound._id});

        res.cookie('token', token);
        res.json({
            id : userFound._id,
            user : userFound.user,
            mail: userFound.mail
        });
    } catch (error) {
        res.status(500).json({
            message : error.message
        })
    }
}

export const logout = (req, res) => {
    res.cookie('token', '', {
        expire : new Date(0)
    });
    return res.sendStatus(200);
}
