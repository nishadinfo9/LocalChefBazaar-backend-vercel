import { Router } from "express";
const router = Router();

import {
  registerUser,
  loggedIn,
  logout,
  getCurrentUser,
  getUserProfile,
  getAllUsers,
  isFraudUser,
  refreshToken,
} from "../controllers/user.controller.js";
import { verifyJWT } from "../middlewares/auth.middleware.js";
import { upload } from "../middlewares/multer.middleware.js";
import { checkFraud } from "../middlewares/fraud.middleware.js";
import { isRole } from "../middlewares/role.middleware.js";

router
  .route("/user/register")
  .post(upload.single("profileImage"), registerUser);
router.route("/user/login").post(loggedIn);
router.route("/user/logout").post(verifyJWT, logout);
router.route("/user/current-user").get(verifyJWT, getCurrentUser);
router.route("/user/user-profile").get(verifyJWT, getUserProfile);
router.route("/user/refresh-token").post(refreshToken);
router
  .route("/user/all-users")
  .get(verifyJWT, isRole("admin"), checkFraud, getAllUsers);
router
  .route("/user/fraud-user/:userId")
  .patch(verifyJWT, isRole("admin"), isFraudUser);

export default router;
