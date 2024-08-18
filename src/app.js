import express from "express";
import cors from 'cors';
import cookieParser from "cookie-parser";

const app = express();

app.use(cors(
    {
        origin: process.env.CORS_ORIGIN,
        credentials: true
    }
))
app.use(express.json())
app.use(express.static("public"))
app.use(express.urlencoded({extended:true}))
app.use(cookieParser());

import { router } from './routers/index.js';
import {userRouter} from "./routers/users.js"
app.use("/", router)
app.use("/", userRouter)

export {app};