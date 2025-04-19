import {Router} from "express";
import {getAlbumById, getAllAlbums} from "../controller/albums.controller.js";

const albumsRoute = Router();

albumsRoute.get("/", getAllAlbums)
albumsRoute.get("/:albumId",  getAlbumById)

export default albumsRoute;