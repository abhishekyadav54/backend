import mongoose from "mongoose";

const userSchema = new mongoose.Schema({
    fName: {
        type: String,
        required: true
    },
    lName: {
        type: String,
        required: true
    },
    email: {
        type: String,
        required: true
    },
    pass: {
        type: String,
        required: true
    },
    cPass: {
        type: String,
        required: true
    }

    },
    {
        timestamps:true
    }
    )


export const User = mongoose.model("User", userSchema)



