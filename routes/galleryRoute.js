import express, { application } from "express";
import multer from "multer";

const router = express.Router();
import galleryController from "../controllers/galleryController.js";

//multer works
const storage = multer.diskStorage({
  //cb means callback function
  destination: function (req, file, cb) {
    cb(null, "public/upload");
  },
  filename: function (req, file, cb) {
    cb(null, `${Date.now()}-${file.originalname}`);
  },
});

const upload = multer({ storage: storage });

router.post(
  "/upload/image",
  upload.single("image"),
  galleryController.uploadImage
);

router.post("/add/category", galleryController.addNewCategory);
router.get("/get/categories", galleryController.getAllCategories);
router.get("/get/images", galleryController.getAllImages);
router.get("/get/singleimage", galleryController.getsingleImage);

export default router;
