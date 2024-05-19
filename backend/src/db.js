import mongoose from "mongoose";



export const db = async () => {
    try {
        mongoose.connect(process.env.DATABASE);
        console.log("db is connnected");
    } catch (error) {
        console.log(error);
    }
} 