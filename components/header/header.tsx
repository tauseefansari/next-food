import Link from "next/link";
import Image from "next/image";
import classes from "./header.module.css";
import Logo from "@/assets/logo.png";
import HeaderBackground from "@/components/header/header-background";
import appRoutes from "@/common/appRoutes";

export default function Header() {
  return (
    <>
      <HeaderBackground />
      <header className={classes.header}>
        <Link href={appRoutes.ROOT} className={classes.logo}>
          <Image src={Logo} alt="A plate with a food on it" priority />
          Next Food App
        </Link>

        <nav className={classes.nav}>
          <ul>
            <li>
              <Link href={appRoutes.MEALS}>Browse Meals</Link>
            </li>
            <li>
              <Link href={appRoutes.COMMUNITY}>Foodies Community</Link>
            </li>
          </ul>
        </nav>
      </header>
    </>
  );
}
