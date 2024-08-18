import express from "express";
import { router } from './routers/index.js';
const app = express();

app.use(express.urlencoded({extended:true}))
app.use("/", router)

export {app}