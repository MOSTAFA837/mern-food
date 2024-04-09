import express from "express";
import {
  createCurrentUser,
  updateCurrentUser,
} from "../controllers/userController";
import { jwtCheck, jwtParse } from "../middleware/auth";
import { validateUserRequest } from "../middleware/validation";

const router = express.Router();

router.post("/", jwtCheck, createCurrentUser);
router.put("/", jwtCheck, jwtParse, validateUserRequest, updateCurrentUser);

export default router;
