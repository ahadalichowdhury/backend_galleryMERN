import express from "express";
import connectDB from "./config/db.js";
import cors from "cors";
const app = express();
const PORT = process.env.PORT || 8000;
import galleryRoute from "./routes/galleryRoute.js";

//database connection
connectDB();

app.use(cors());
app.use(express.json());
//api routes
app.use("/api/v1", galleryRoute);

app.use(express.static("public/upload"));

//server connection
app.listen(PORT, (err) => {
  if (err) {
    console.log(err);
  } else {
    console.log(`Server running on port ${PORT}`);
  }
});
