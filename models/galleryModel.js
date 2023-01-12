import mongoose from "mongoose";

const gallerySchema = new mongoose.Schema({
  name: {
    type: String,
  },
  category: {
    //for one to one connection with category model
    type: mongoose.Schema.Types.ObjectId,
    ref: "category",
  },
});

const galleryModel = mongoose.model("gallery", gallerySchema);
export default galleryModel;
