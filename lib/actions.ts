"use server";

import { formInputs } from "@/app/meals/share/page";
import { MealStoreInputs } from "@/model/meal";
import { saveMeal } from "./meals";
import { redirect } from "next/navigation";
import appRoutes from "@/common/appRoutes";

export const shareMeal = async (formData: FormData) => {
  const meal = Object.entries(formInputs).reduce((acc, [key, value]) => {
    const formValue = formData.get(value);
    if (formValue) {
      // @ts-expect-error
      acc[key as MealStoreInputs] =
        formValue instanceof File && key === "image"
          ? formValue
          : formValue.toString();
    }
    return acc;
  }, {} as MealStoreInputs);

  await saveMeal(meal);
  redirect(appRoutes.MEALS);
};
