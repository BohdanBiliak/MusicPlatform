import {Router} from "express";

const albumsController = Router();

albumsController.use("/", (req, res) => {
    res.send("user route used");
});

export default albumsController;