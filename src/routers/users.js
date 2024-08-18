import {Router} from "express";
import { registerUser } from "../controllers/user.controller.js";
import { User } from "../models/user.model.js";
const userRouter  = Router()

userRouter.post("/users", registerUser )

userRouter.get("/users", async (req,res)=>{
    const users = await User.find().exec();
    res.setHeader("Content-Type", "text/html");
    res.write(`
        <!DOCTYPE html>
        <html lang="en">
        <head>
            <meta charset="UTF-8">
            <meta name="viewport" content="width=device-width, initial-scale=1.0">
            <title>User List</title>
            <script src="https://cdn.tailwindcss.com"></script>
            <style>
                 body{
                     background-image: url(./public/gallery/swans-love-4o.jpg);
                    }
            </style>
        </head>
        <body>
            <div class = "flex  justify-center content-center mt-5 ">
                <div class = "flex justify-center bg-gray-300 rounded-3xl shadow-2xl shadow-gray-900 opacity-80 py-4 px-2 border-2 border-pink-300">

                    <div class="text-black mx-12 my-auto p-5 rounded-lg">
                    <h1 class="text-4xl text-center mb-4">User List</h1>
               
                <table class="border-collapse w-full mb-5">
                    <thead>
                        <tr>
                            <th class="p-3 text-left">FName</th>
                            <th class="p-3 text-left">LName</th>
                            <th class="p-3 text-left">Email</th>
                            <th class="p-3 text-left">Action</th>
                        </tr>
                    </thead>
                    <tbody>

            `);

    users.forEach(user => {
        res.write(`
            <tr>
            <td class="p-3 text-left" >${user.fName}</td>
                <td class="p-3 text-left" >${user.lName}</td>
                <td class="p-3 text-left" >${user.email}</td>
                <td class="p-3 text-left" >
                    <form action="/delete" method="POST" style="display:inline;">
                        <input  type="hidden" name="email" value="${user.email}">
                        <button class="text-amber-700 hover:text-amber-900 p-2" type="submit">Delete</button>
                    </form>
                    <form action="/update" method="GET" style="display:inline;">
                        <input type="hidden" name="email" value="${user.email}">
                        <button class="text-amber-700 hover:text-amber-900 p-2" type="submit">Edit</button>
                    </form>
                </td>
            </tr>
            `);
    });
    res.write(`
            </tbody>
        </table>
        <a href="/" class="text-amber-700 hover:text-amber-900">Back to form</a>
        </div>
    </div>
</div>
</body>
</html>
        `);
        res.end();
});



userRouter.post("/delete", async (req, res) => {
    const { email } = req.body;
  
    await User.deleteOne({ email});
      res.redirect("/users");
  });


export {userRouter};
