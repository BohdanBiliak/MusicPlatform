import {Router} from "express";

const statsController = Router();

statsController.use("/", (req, res) => {
    res.send("user route used");
});

export default statsController;