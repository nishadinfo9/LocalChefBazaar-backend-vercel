import mongoose from "mongoose";

export const connectDB = async () => {
  try {
    const response = await mongoose.connect(process.env.URI);
    console.log("Database connected successfully", response.connection.host);
  } catch (error) {
    console.log(error);
  }
};
