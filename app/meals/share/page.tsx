import Input from "@/components/meals/input";
import classes from "./page.module.css";

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
        <form className={classes.form}>
          <div className={classes.row}>
            <p>
              <Input label="Your name" name="name" required />
            </p>
            <p>
              <Input label="Your email" type="email" name="email" required />
            </p>
          </div>
          <p>
            <Input label="Title" name="title" required />
          </p>
          <p>
            <Input label="Short Summary" name="summary" required />
          </p>
          <p>
            <Input
              label="Instructions"
              type="textarea"
              rows={10}
              name="instructions"
              required
            />
          </p>
          IMAGE PICKER
          <p className={classes.actions}>
            <button type="submit">Share Meal</button>
          </p>
        </form>
      </main>
    </>
  );
}
