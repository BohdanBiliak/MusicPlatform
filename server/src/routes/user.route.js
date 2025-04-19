import {Router} from "express";
import {getAllUsers} from "../controller/user.controller.js";

const userRoute = Router();

userRoute.use("/",getAllUsers )


export default userRoute;