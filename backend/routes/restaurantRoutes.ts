import express from "express";
import multer from "multer";
import { jwtCheck, jwtParse } from "../middleware/auth";
import { createRestaurant } from "../controllers/restuantController";
import { validateRestaurantRequest } from "../middleware/validation";

const router = express.Router();

const storage = multer.memoryStorage();
const upload = multer({
  storage: storage,
  limits: {
    fileSize: 5 * 1024 * 1024, //5mb
  },
});

router.post(
  "/",
  upload.single("imageFile"),
  validateRestaurantRequest,
  jwtCheck,
  jwtParse,
  createRestaurant
);

export default router;
