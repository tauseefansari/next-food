import classes from "@/app/error-notfound.module.css";

export default function NotFoundPage() {
  return (
    <main className={classes.error}>
      <h1>Not Found</h1>
      <p>Unfortunately, we could not find the requested page or meal data.</p>
    </main>
  );
}
