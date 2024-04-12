import express from "express";
import multer from "multer";
import { jwtCheck, jwtParse } from "../middleware/auth";
import {
  createRestaurant,
  getRestaurant,
  updateRestaurant,
  searchRestaurants,
  getRestautant,
} from "../controllers/restuantController";
import { validateRestaurantRequest } from "../middleware/validation";
import { param } from "express-validator";

const router = express.Router();

const storage = multer.memoryStorage();
const upload = multer({
  storage: storage,
  limits: {
    fileSize: 5 * 1024 * 1024, //5mb
  },
});

router.get("/", jwtCheck, jwtParse, getRestaurant);

router.post(
  "/",
  upload.single("imageFile"),
  validateRestaurantRequest,
  jwtCheck,
  jwtParse,
  createRestaurant
);

router.put(
  "/",
  upload.single("imageFile"),
  validateRestaurantRequest,
  jwtCheck,
  jwtParse,
  updateRestaurant
);

router.get(
  "/search/:city",
  param("city")
    .isString()
    .trim()
    .notEmpty()
    .withMessage("City parameter must be a valid string."),
  searchRestaurants
);

router.get(
  "/:restaurantId",
  param("restaurantId")
    .isString()
    .trim()
    .notEmpty()
    .withMessage("restautantId parameter must be a valid string."),
  getRestautant
);

export default router;
