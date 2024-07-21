"use client";

import classes from "./meal-share-form.module.css";
import { useFormState, useFormStatus } from "react-dom";
import ImagePicker from "./image-picker";
import { MealShareFormState } from "@/model/meal";
import { shareMeal } from "@/lib/actions";
import { formInputs } from "./meal-constants";
import Input from "./input";

const initialState: MealShareFormState = { message: null };

export default function MealShareForm() {
  const { pending } = useFormStatus();
  const [{ message }, formAction] = useFormState(shareMeal, initialState);

  return (
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
        <button disabled={pending}>
          {pending ? "Submitting..." : "Share Meal"}
        </button>
      </p>
    </form>
  );
}
