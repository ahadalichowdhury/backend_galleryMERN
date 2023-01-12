import mongoose from "mongoose";
import * as dotenv from "dotenv";
dotenv.config();

const connectDB = async () => {
  let URI = process.env.MONGO_URL
  const conn = await mongoose.connect(URI);
  if (conn) {
    console.log("Connected database successfully");
  } else {
    console.log("Error connecting database");
  }
};

export default connectDB;
