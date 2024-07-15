import { Meals, Meal } from "@/model/meal";
import sql from "better-sqlite3";

const DATABASE_NAME = "meals.db";

const db = sql(DATABASE_NAME);

export const getMeals = async () => {
  await new Promise((resolve) => setTimeout(resolve, 5000)); // Testing only
  return db.prepare<Meals, Meal>("SELECT * FROM meals").all();
};

export const getMeal = (mealSlug: string) =>
  db.prepare<string, Meal>("SELECT * FROM meals WHERE slug = ?").get(mealSlug);
