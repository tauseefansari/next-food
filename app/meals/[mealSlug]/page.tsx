import Image from "next/image";
import classes from "./page.module.css";
import { getMeal } from "@/lib/meals";
import { notFound } from "next/navigation";
import { Metadata } from "next";

type Props = {
  params: { mealSlug: string };
};

export const dynamicParams = true;

export async function generateMetadata({
  params: { mealSlug },
}: Props): Promise<Metadata> {
  const meal = await getMeal(mealSlug);

  console.log("generateMetadata", { meal });

  if (!meal) notFound();

  return { title: meal.title, description: meal.summary };
}

export default async function MealDetailsPage({ params: { mealSlug } }: Props) {
  const meal = await getMeal(mealSlug);

  console.log("MealDetailsPage", { meal });

  if (!meal) notFound();

  const { title, image, creator, creator_email, summary, instructions } = meal;

  return (
    <>
      <header className={classes.header}>
        <div className={classes.image}>
          <Image src={image} alt={title} fill />
        </div>
        <div className={classes.headerText}>
          <h1>{title}</h1>
          <p className={classes.creator}>
            by <a href={`mailto:${creator_email}`}>{creator}</a>
          </p>
          <p className={classes.summary}>{summary}</p>
        </div>
      </header>
      <main>
        <p
          className={classes.instructions}
          dangerouslySetInnerHTML={{
            __html: instructions.replace(/\n/g, "<br />"),
          }}
        />
      </main>
    </>
  );
}
