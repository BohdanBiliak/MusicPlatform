import {Router} from "express";

const userRoute = Router();

userRoute.use("/", (req, res) => {
    res.send("user route used");
});

export default userRoute;