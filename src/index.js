import dotenv from 'dotenv';
import { connectDB } from './db/index.js';
import { app } from './app.js';


dotenv.config({
    path: "./.env"
})


connectDB().
then(() => {
    app.listen(process.env.PORT, (req,res)=>{
        console.log(`App is running on PORT: http://localhost:5000 ${process.env.PORT}`)
    })
    

})
.catch((err)=>console.log(err));

