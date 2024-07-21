export type Meal = {
  id: number;
  title: string;
  slug: string;
  image: string;
  summary: string;
  instructions: string;
  creator: string;
  creator_email: string;
};

export type MealShareFormState = { message: string | null };

export type Meals = Meal[];

export type MealInputs = Omit<Meal, "id" | "slug">;

export type MealStoreInputs = Omit<MealInputs, "image"> & { image: File };

export type StoreMeal = Omit<Meal, "id">;
