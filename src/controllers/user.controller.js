import { User } from "../models/user.model.js";

const registerUser = async (req,res) => {

    try {
        const { fName, lName, email, pass, cPass} = req.body
        if([fName, lName, email, pass, cPass].some((field)=> field?.trim()==="")){
            res.status(400).send("All fileds are required.")
        }

        const existedUser = await User.findOne({email});
        if(existedUser){
            res.status(401).send(`User already exist with email ${email}`)
        }
        
        const createUser = new User({fName, lName, email, pass, cPass});
        await createUser.validate();
        await createUser.save();
        if(!createUser){
            res.status(400).send(`Something went wrong while registering the user.`)
        }

        res.redirect("/users")
    } catch (error) {
        res.status(500).send(`Internal Server Error`)
    }
}


export {registerUser};