import {Router} from "express";
import {User} from "../models/user.model.js";
import {authCallBack} from "../controller/auth.controller.js";

const authRoute = Router();

authRoute.post("/callback",authCallBack);

export default authRoute;