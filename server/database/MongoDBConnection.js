import mongoose from "mongoose";
import "dotenv/config";

async function MongoDBConnection() {
  await mongoose
    .connect(process.env.MONGO_URL)
    .then((success) => {
      console.log(`[Mongo]: Mongo Connected ${success.connection.host}`);
    })
    .catch((error) => {
      console.log(`[Mongo]: Mongo connection failed ${error.message}`);
    });
}

export default MongoDBConnection;
