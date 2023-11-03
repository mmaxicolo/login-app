import mongoose from "mongoose";

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
    }
})

export default mongoose.model('User', userSchema)