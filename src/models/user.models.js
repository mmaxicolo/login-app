import mongoose from "mongoose";

const ingrediente = new mongoose.Schema({
    nombre: {
        type : String,
        trim : true,
    },
    costo: {
        type : Number,
    },
    unidad: {
        type : String,
        trim : true
    },
    cantidad: {
        type : Number,
    }
});
export const Ingrediente = mongoose.model('Ingrediente', ingrediente);

const producto = new mongoose.Schema({
    nombre: {
        type : String,
        trim : true
    },
    margen: {
        type : Number,
    },
    packaging: {
        type : Number,
    },
    agregado: {
        type : Number,
    },
    cantidadReceta: {
        type : Number,
    },
    ingredientes: [{
        ingrediente: String,
        cantidad: Number,
    }]
});
export const Producto = mongoose.model('Producto', producto);

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


export const User = mongoose.model('User', userSchema)