import mongoose, { Schema } from "mongoose";

const mealSchema = new Schema(
  {
    chefId: {
      type: Schema.Types.ObjectId,
      ref: "User",
    },
    foodName: {
      type: String,
      required: true,
    },
    chefName: {
      type: String,
      required: true,
    },
    userEmail: {
      type: String,
      required: true,
    },
    foodImage: {
      type: String,
      required: true,
    },
    price: {
      type: Number,
      default: 0,
      required: true,
    },
    rating: {
      type: String,
      required: true,
    },
    ingredients: [
      {
        type: String,
        enum: ["Chicken", "Rice", "Oil", "Salt", "Onion"],
      },
    ],
    chefExperience: {
      type: String,
      enum: ["1 year", "2 years", "3 years", "5 years", "10+ years"],
    },
    deliveryTime: {
      type: String,
      enum: ["15 min", "20 min", "30 min", "45 min", "60 min"],
    },
  },
  { timestamps: true }
);

export const Meal = mongoose.model("Meal", mealSchema);
