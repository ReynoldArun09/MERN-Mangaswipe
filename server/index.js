import "dotenv/config";
import express from 'express'
import cors from 'cors'
import MongoDBConnection from "./database/MongoDBConnection.js";

const app = express()
app.use(cors({
    origin: process.env.ORIGIN
}))
app.use(express.json())
const port = process.env.PORT || 3001


MongoDBConnection()
app.listen(port, () => console.log(`Server is up and running on ${port}`))