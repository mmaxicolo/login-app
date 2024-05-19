import mongoose from "mongoose";

const ingrediente = new mongoose.Schema({
    name: {
        type : String,
        trim : true,
    },
    cost: {
        type : Number,
    },
    unit: {
        type : String,
        trim : true
    },
    amount: {
        type : Number,
    }
});

const producto = new mongoose.Schema({
    name: {
        type : String,
        trim : true
    },
    margen: {
        type : Number,
    },
    packaging: {
        type : Number,
    },
    aggregate: {
        type : Number,
    },
    amountRecipe: {
        type : Number,
    },
    ingredientes: [{
        id: String,
        amount: Number,
    }],
});

const userSchema = new mongoose.Schema({
    user: {
        type : String,
        required : true,
        trim : true,
    },
    mail: {
        type : String,
        required : true,
        trim : true,
        unique: true,
    },
    password: {
        type : String,
        required : true,
        trim : true,
    },
    ingrediente: [ingrediente],
    producto: [producto]
})

export const Ingrediente = mongoose.model('Ingrediente', ingrediente);

export const Producto = mongoose.model('Producto', producto);

export const User = mongoose.model('User', userSchema)