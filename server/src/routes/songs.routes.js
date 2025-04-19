import {Router} from "express";
import {getAllSongs, getFeaturedSongs, getMadeForYouSongs, getTrendingSongs} from "../controller/songs.controller.js";
import {protectRoute, requireAdmin} from "../middleware/auth.middleware.js";

const songsRoute = Router();

songsRoute.get("/",protectRoute, requireAdmin, getAllSongs)
songsRoute.get("/featured", getFeaturedSongs)
songsRoute.get("/made-for-you", getMadeForYouSongs)
songsRoute.get("/trending", getTrendingSongs)


export default songsRoute;