import { Meals, Meal, StoreMeal, MealStoreInputs } from "@/model/meal";
import sql from "better-sqlite3";
import xss from "xss";
import fs from "node:fs";

const DATABASE_NAME = "meals.db";

const db = sql(DATABASE_NAME);

export const getMeals = async () =>
  db.prepare<Meals, Meal>("SELECT * FROM meals").all();

export const getMeal = (mealSlug: string) =>
  db.prepare<string, Meal>("SELECT * FROM meals WHERE slug = ?").get(mealSlug);

export const saveMeal = async ({
  title,
  instructions: _instructions,
  image,
  ...rest
}: MealStoreInputs) => {
  const slug = title.toLowerCase();
  const instructions = xss(_instructions);

  const extension = image.name.split(".").pop();
  const filename = `${slug}.${extension}`;

  const stream = fs.createWriteStream(`public/images/${filename}`);
  const bufferedImage = await image.arrayBuffer();

  stream.write(Buffer.from(bufferedImage), (error) => {
    if (error) throw new Error("Saving image failed");
  });

  const meal: StoreMeal = {
    title,
    image: `/images/${filename}`,
    instructions,
    slug,
    ...rest,
  };

  return db
    .prepare<StoreMeal, StoreMeal>(
      `INSERT INTO meals (slug, title, image, summary, instructions, creator, creator_email) 
      VALUES (@slug, @title, @image, @summary, @instructions, @creator, @creator_email)`
    )
    .run(meal);
};
