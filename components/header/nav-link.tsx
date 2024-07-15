"use client";

import { Route } from "next";
import Link, { LinkProps } from "next/link";
import { usePathname } from "next/navigation";
import { ReactNode } from "react";
import classes from "./nav-link.module.css";

type Props = LinkProps<Route> & {
  children: ReactNode;
  href: Route;
};

export default function NavLink({
  href,
  children,
  className = "",
  ...rest
}: Props) {
  const path = usePathname();

  return (
    <Link
      href={href}
      className={`${className} ${classes.link} ${
        path.startsWith(href) ? classes.active : ""
      }`}
      {...rest}
    >
      {children}
    </Link>
  );
}
