import "dotenv/config";
import express from 'express'
import cors from 'cors'
import morgan from "morgan";
import MongoDBConnection from "./database/MongoDBConnection.js";
import MangaRoutes from "./routes/manga.route.js";

const app = express()
app.use(cors({
    origin: process.env.ORIGIN
}))
app.use(express.json())
app.use(morgan("dev"));
const port = process.env.PORT || 3001

app.use('/api/v1/manga', MangaRoutes)

MongoDBConnection()
app.listen(port, () => console.log(`Server is up and running on ${port}`))