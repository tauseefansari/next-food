import Input from "@/components/meals/input";
import classes from "./page.module.css";
import ImagePicker from "@/components/meals/image-picker";
import { MealInputs } from "@/model/meal";
import { shareMeal } from "@/lib/actions";

export const formInputs: MealInputs = {
  creator: "name",
  creator_email: "email",
  title: "title",
  summary: "summary",
  instructions: "instructions",
  image: "image",
};

export default function ShareMealPage() {
  return (
    <>
      <header className={classes.header}>
        <h1>
          Share your <span className={classes.highlight}>favorite meal</span>
        </h1>
        <p>Or any other meal you feel needs sharing!</p>
      </header>
      <main className={classes.main}>
        <form className={classes.form} action={shareMeal}>
          <div className={classes.row}>
            <p>
              <Input label="Your name" name={formInputs.creator} required />
            </p>
            <p>
              <Input
                label="Your email"
                type="email"
                name={formInputs.creator_email}
                required
              />
            </p>
          </div>
          <p>
            <Input label="Title" name={formInputs.title} required />
          </p>
          <p>
            <Input label="Short Summary" name={formInputs.summary} required />
          </p>
          <p>
            <Input
              label="Instructions"
              type="textarea"
              rows={10}
              name={formInputs.instructions}
              required
            />
          </p>
          <ImagePicker label="Your Image" name={formInputs.image} />
          <p className={classes.actions}>
            <button type="submit">Share Meal</button>
          </p>
        </form>
      </main>
    </>
  );
}
