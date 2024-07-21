import { Metadata } from "next";
import classes from "./page.module.css";
import MealShareForm from "@/components/meals/meal-share-form";

export const metadata: Metadata = {
  title: "Meal Share",
  description: "Share your meal with the community.",
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
        <MealShareForm />
      </main>
    </>
  );
}
