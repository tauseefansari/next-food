import Link from "next/link";
import classes from "./page.module.css";
import appRoutes from "@/common/appRoutes";
import ImageSlideshow from "@/components/slideshow/image-slideshow";

export default function Home() {
  return (
    <>
      <header className={classes.header}>
        <div className={classes.slideshow}>
          <ImageSlideshow />
        </div>
        <div>
          <div className={classes.hero}>
            <h1>Next Food App for Next Level Foodies</h1>
            <p>Taste & share food from all over the world.</p>
          </div>
          <div className={classes.cta}>
            <Link href={appRoutes.COMMUNITY}>Join the Community</Link>
            <Link href={appRoutes.MEALS}>Explore Meals</Link>
          </div>
        </div>
      </header>
      <main>
        <section className={classes.section}>
          <h2>How it works</h2>
          <p>
            Next Food App is a platform for foodies to share their favorite
            recipes with the world. It&apos;s a place to discover new dishes,
            and to connect with other food lovers.
          </p>
          <p>
            Next Food App is a place to discover new dishes, and to connect with
            other food lovers.
          </p>
        </section>
        <section className={classes.section}>
          <h2>Why Next Food App?</h2>
          <p>
            Next Food App is a platform for foodies to share their favorite
            recipes with the world. It&apos;s a place to discover new dishes,
            and to connect with other food lovers.
          </p>
          <p>
            Next Food App is a place to discover new dishes, and to connect with
            other food lovers.
          </p>
        </section>
      </main>
    </>
  );
}
