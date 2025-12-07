import { Router } from "express";
const router = Router();

import {
  createMeal,
  getAllMeals,
  getMyMeals,
  getMealById,
} from "../controllers/meal.controller.js";
import { verifyJWT } from "../middlewares/auth.middleware.js";
import { upload } from "../middlewares/multer.middleware.js";

router
  .route("/meals/create")
  .post(verifyJWT, upload.single("foodImage"), createMeal);
router.route("/meals/all-meals").get(getAllMeals);
router.route("/meals/my-meals").get(verifyJWT, getMyMeals);
router.route("/meals/single-meal/:mealId").get(verifyJWT, getMealById);

export default router;
