import jwt from "jsonwebtoken";
import { User } from "../models/user.model.js";

export const verifyJWT = async (req, res, next) => {
  try {
    const token = req?.cookies?.accessToken;

    if (!token) {
      return res.status(401).json({ message: "token does not exist" });
    }

    const decoded = jwt.verify(token, process.env.ACCESS_TOKEN_SECRET);

    if (!decoded) {
      return res.status(401).json({ message: "decoded token does not exist" });
    }

    const user = await User.findById(decoded.userId).select(
      "-password -refreshToken"
    );
    req.user = user;
    next();
  } catch (error) {
    console.log(error);
  }
};
