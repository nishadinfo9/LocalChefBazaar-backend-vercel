import { Router } from "express";
const router = Router();

import {
  createUserRequset,
  getUserRequest,
  getAllRequest,
  updateProfileRequest,
} from "../controllers/request.controller.js";
import { verifyJWT } from "../middlewares/auth.middleware.js";
import { checkFraud } from "../middlewares/fraud.middleware.js";
import { isRole } from "../middlewares/role.middleware.js";

router
  .route("/user/user-request")
  .get(verifyJWT, isRole("admin"), checkFraud, getUserRequest);
router
  .route("/user/create-request")
  .post(verifyJWT, checkFraud, createUserRequset);
router
  .route("/user/all-user-requests")
  .get(verifyJWT, isRole("admin"), checkFraud, getAllRequest);
router
  .route("/user/update-request/:userId")
  .patch(verifyJWT, isRole("admin"), checkFraud, updateProfileRequest);

export default router;
