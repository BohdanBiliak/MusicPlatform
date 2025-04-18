import {Router} from "express";
import {protectRoute, requireAdmin} from "../middleware/auth.middleware.js";
import {checkAdmin, createAlbum, createSong, deleteAlbum, deleteSong} from "../controller/admin.controller.js";

const adminRoute = Router();

adminRoute.use(protectRoute,requireAdmin);

adminRoute.get("/check",checkAdmin )
adminRoute.post("/songs", createSong);
adminRoute.post("/songs/:id",deleteSong);
adminRoute.post("/albums",createAlbum);
adminRoute.post("/albums/:id",deleteAlbum);

export default adminRoute;