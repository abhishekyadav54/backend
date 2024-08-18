import mongoose from "mongoose";

import { DB_NAME } from "../constants.js";

const connectDB = async () => {
    try {
         await mongoose.connect(`${process.env.MONGO_DB_URL}/${DB_NAME}`)
        console.log(`MongoDB Connected!! `);
        
        
    } catch (error) {
        console.log("MongoDB connection Failed !!", error )
        process.exit(1)
        
    }
}

export {connectDB}