import {Router} from "express";

const albumsRoute = Router();

albumsRoute.use("/", (req, res) => {
    res.send("user route used");
});

export default albumsRoute;