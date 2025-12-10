import { Router } from "express";
const router = Router();

import {
  createReview,
  getReviews,
  getAllReviews,
  getMyReviews,
  deleteReview,
  getReviewById,
  updateReview,
} from "../controllers/review.controller.js";
import { verifyJWT } from "../middlewares/auth.middleware.js";
import { checkFraud } from "../middlewares/fraud.middleware.js";

router.route("/meals/review-create").post(verifyJWT, checkFraud, createReview);
router.route("/meals/reviews/:foodId").get(verifyJWT, checkFraud, getReviews);
router.route("/meals/my-reviews").get(verifyJWT, checkFraud, getMyReviews);
router.route("/meals/all-reviews").get(getAllReviews);
router
  .route("/meals/single-review/:reviewId")
  .get(verifyJWT, checkFraud, getReviewById);
router
  .route("/meals/review-delete/:reviewId")
  .delete(verifyJWT, checkFraud, deleteReview);
router
  .route("/meals/update-review/:reviewId")
  .patch(verifyJWT, checkFraud, updateReview);

export default router;
