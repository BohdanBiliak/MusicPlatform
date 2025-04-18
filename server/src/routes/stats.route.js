import {Router} from "express";

const statsRoute = Router();

statsRoute.use("/", (req, res) => {
    res.send("user route used");
});

export default statsRoute;