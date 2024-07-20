"use client";

import Input from "@/components/meals/input";
import classes from "./page.module.css";
import ImagePicker from "@/components/meals/image-picker";
import MealsFormSubmit from "@/components/meals/meals-form-submit";
import { formInputs } from "@/components/meals/meal-constants";
import { MealsFormState } from "@/model/meal";
import { shareMeal } from "@/lib/actions";
import { useFormState } from "react-dom";

const initialState: MealsFormState = { message: null };

export default function ShareMealPage() {
  const [{ message }, formAction] = useFormState(shareMeal, initialState);

  return (
    <>
      <header className={classes.header}>
        <h1>
          Share your <span className={classes.highlight}>favorite meal</span>
        </h1>
        <p>Or any other meal you feel needs sharing!</p>
      </header>
      <main className={classes.main}>
        <form className={classes.form} action={formAction}>
          <div className={classes.row}>
            <p>
              <Input label="Your name" name={formInputs.creator} />
            </p>
            <p>
              <Input
                label="Your email"
                type="email"
                name={formInputs.creator_email}
              />
            </p>
          </div>
          <p>
            <Input label="Title" name={formInputs.title} />
          </p>
          <p>
            <Input label="Short Summary" name={formInputs.summary} />
          </p>
          <p>
            <Input
              label="Instructions"
              type="textarea"
              rows={10}
              name={formInputs.instructions}
            />
          </p>
          <ImagePicker label="Your Image" name={formInputs.image} />
          {message && <p className={classes.error}>{message}</p>}
          <p className={classes.actions}>
            <MealsFormSubmit />
          </p>
        </form>
      </main>
    </>
  );
}
