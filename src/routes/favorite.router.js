import { Router } from "express";
const router = Router();

import {
  addFavoriteMeal,
  getFavoriteMeal,
} from "../controllers/favorite.controller.js";
import { verifyJWT } from "../middlewares/auth.middleware.js";

router
  .route("/meal/add-favorite-meal/:mealId")
  .post(verifyJWT, addFavoriteMeal);
router.route("/meal/get-favorite-meal/:mealId").get(verifyJWT, getFavoriteMeal);

export default router;
