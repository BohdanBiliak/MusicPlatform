import {Router} from "express";

const songsRoute = Router();

songsRoute.use("/", (req, res) => {
    res.send("user route used");
});

export default songsRoute;