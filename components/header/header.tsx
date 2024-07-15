import Link from "next/link";
import Image from "next/image";
import classes from "./header.module.css";
import logoImg from "@/assets/logo.png";
import HeaderBackground from "@/components/header/header-background";
import appRoutes from "@/common/appRoutes";
import NavLink from "./nav-link";

export default function Header() {
  return (
    <>
      <HeaderBackground />
      <header className={classes.header}>
        <Link href={appRoutes.ROOT} className={classes.logo}>
          <Image src={logoImg} alt="A plate with a food on it" priority />
          Next Food App
        </Link>

        <nav className={classes.nav}>
          <ul>
            <li>
              <NavLink href={appRoutes.MEALS}>Browse Meals</NavLink>
            </li>
            <li>
              <NavLink href={appRoutes.COMMUNITY}>Foodies Community</NavLink>
            </li>
          </ul>
        </nav>
      </header>
    </>
  );
}
