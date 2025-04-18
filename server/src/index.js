import express from "express";
import dotenv from "dotenv";
import userRoute  from "./routes/user.route.js";
import adminRoute from "./routes/admin.routes.js";
import authRoute from "./routes/auth.routes.js";
import songsRoute from "./routes/songs.routes.js";
import albumsRoute from "./routes/albums.route.js";
import statsRoute from "./routes/stats.route.js";
import {connectDB} from "./lib/db.js";
const app = express();
dotenv.config();
app.use(express.json())
const PORT = process.env.PORT ;

app.use("/api/users", userRoute)
app.use("/api/admin", adminRoute)
app.use("/api/auth", authRoute)
app.use("/api/songs", songsRoute)
app.use("/api/albums", albumsRoute)
app.use("/api/stats", statsRoute)

app.listen(PORT, async ()=>{
    await connectDB()
    console.log(`listening at http://localhost:${PORT}`);
});