import {Router} from "express";
import {protectRoute, requireAdmin} from "../middleware/auth.middleware.js";
import {getStats} from "../controller/stats.controller.js";

const statsRoute = Router();

statsRoute.get("/",protectRoute, requireAdmin,getStats  )

export default statsRoute;