import express from "express";
import dotenv from "dotenv";
import userRoute  from "./routes/user.route.js";
import adminRoute from "./routes/admin.routes.js";
import authRoute from "./routes/auth.routes.js";
import songsRoute from "./routes/songs.routes.js";
import albumsRoute from "./routes/albums.route.js";
import statsRoute from "./routes/stats.route.js";
import { clerkMiddleware } from '@clerk/express'
import {connectDB} from "./lib/db.js";
import fileUpload from "express-fileupload";
import path from "path";
const app = express();
const __dirname = path.resolve()
dotenv.config();
app.use(express.json())
app.use(clerkMiddleware())
app.use(fileUpload({
    useTempFiles:true,
    tempFileDir:path.join(__dirname, "tmp"),
    createParentPath: true,
    limits:{
        fileSize:10*1024*1024,
    }
}))

const PORT = process.env.PORT ;

app.use("/api/users", userRoute)
app.use("/api/admin", adminRoute)
app.use("/api/auth", authRoute)
app.use("/api/songs", songsRoute)
app.use("/api/albums", albumsRoute)
app.use("/api/stats", statsRoute)

app.use((err, req,res,next) =>{
    res.status(500).json({message: process.env.NODE_ENV === "development" ? "internal server error" : err.message})
})

app.listen(PORT, async ()=>{
    await connectDB()
    console.log(`listening at http://localhost:${PORT}`);
});