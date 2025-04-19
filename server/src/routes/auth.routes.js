import {Router} from "express";
import {authCallBack} from "../controller/auth.controller.js";

const authRoute = Router();
authRoute.post("/callback",authCallBack);

export default authRoute;