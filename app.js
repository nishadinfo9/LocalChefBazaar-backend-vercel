import express from "express";
import cookieParser from "cookie-parser";
import cors from "cors";
const app = express();

app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(cookieParser());
app.use(cors({ origin: "http://localhost:5173", credentials: true }));

// import
import userRoutes from "./src/routes/user.router.js";
import mealsRoutes from "./src/routes/meal.router.js";
import mealsReview from "./src/routes/review.router.js";

// executions
app.use("/api/v1", userRoutes);
app.use("/api/v1", mealsRoutes);
app.use("/api/v1", mealsReview);

export default app;
