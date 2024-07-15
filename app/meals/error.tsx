"use client";
import classes from "@/app/error-notfound.module.css";

type Props = {
  error: Error;
};

export default function MealsErrorPage({ error: { message } }: Props) {
  return (
    <main className={classes.error}>
      <h1>An Error Occured</h1>
      <p>{message}</p>
    </main>
  );
}
