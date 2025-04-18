import {Router} from "express";
import {getAdmin} from "../controller/admin.controller.js";

const adminRoute = Router();

adminRoute.use("/", getAdmin);

export default adminRoute;