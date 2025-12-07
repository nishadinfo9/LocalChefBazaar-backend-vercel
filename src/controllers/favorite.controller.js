import { Favorite } from "../models/favorite.model.js";
import { Meal } from "../models/meal.model.js";

const addFavoriteMeal = async (req, res) => {
  try {
    const { mealId } = req.params;
    const userEmail = req.user?.email;

    const meal = await Meal.findById(mealId);

    if (!meal) {
      return res.status(400).json({ message: "meal does not exist" });
    }

    const existFavoriteMeal = await Favorite.findOne({ mealId, userEmail });

    if (existFavoriteMeal) {
      await Favorite.findByIdAndDelete(existFavoriteMeal._id);
      return res.status(200).json({
        message: "favorite meal removed successfully",
        favorited: false,
      });
    }

    const newFavorite = {
      mealId: meal._id,
      mealName: meal.foodName,
      chefId: meal.chefId,
      chefName: meal.chefName,
      price: meal.price,
      userEmail,
    };

    const favorite = await Favorite.create(newFavorite);

    if (!favorite) {
      return res.status(401).json({
        message: "favorite meal creation faild",
        favorite,
        favorited: true,
      });
    }

    return res
      .status(201)
      .json({ message: "favorite meal created successfully", favorite });
  } catch (error) {
    console.log(error);
    return res.status(500).json({ message: "Internal server error" });
  }
};

const getFavoriteMeal = async (req, res) => {
  try {
    const { mealId } = req.params;
    console.log(mealId);

    const meal = await Favorite.findOne({ mealId });

    if (!meal) {
      return res.status(404).json({ message: "meal not found" });
    }

    return res
      .status(200)
      .json({ message: "favorite meal found successfully", meal });
  } catch (error) {
    console.log(error);
    return res.status(500).json({ message: "Internal server error" });
  }
};
export { addFavoriteMeal, getFavoriteMeal };
