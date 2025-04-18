import {Router} from "express";

const userController = Router();

userController.use("/", (req, res) => {
    res.send("user route used");
});

export default userController;