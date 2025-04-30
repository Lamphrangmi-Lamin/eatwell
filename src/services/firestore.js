import { db } from "../config/firebase";
import { doc, setDoc } from "firebase/firestore";

export const saveFavouriteRecipe = async (user, recipe) => {
  const recipeRef = doc(db, "users", user.uid, "favourites", recipe.id);
  await setDoc(recipeRef, recipe);
}