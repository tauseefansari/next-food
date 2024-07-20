"use server";

import { formInputs } from "@/components/meals/meal-constants";
import { MealsFormState, MealStoreInputs } from "@/model/meal";
import { saveMeal } from "./meals";
import { redirect } from "next/navigation";
import appRoutes from "@/common/appRoutes";

const isInvalidText = (textOrFile: string | File) => {
  if (textOrFile instanceof File) return !textOrFile || textOrFile.size === 0;
  return !textOrFile || textOrFile.trim() === "";
};

export const shareMeal = async (
  _prevState: MealsFormState,
  formData: FormData
): Promise<MealsFormState> => {
  const meal = Object.entries(formInputs).reduce((acc, [key, value]) => {
    const formValue = formData.get(value);
    if (formValue)
      // @ts-expect-error
      acc[key as keyof MealStoreInputs] =
        key === "image" ? formValue : String(formValue);
    return acc;
  }, {} as MealStoreInputs);

  if (!Object.values(meal).some(isInvalidText))
    return { message: "Invalid Input, please fill all the input values" };

  await saveMeal(meal);
  redirect(appRoutes.MEALS);
};