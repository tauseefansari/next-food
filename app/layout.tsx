import "./globals.css";
import type { Metadata } from "next";
import { WithChildren } from "@/model/common";

export const metadata: Metadata = {
  title: "Next Food App",
  description: "Next Food App where you can order learn to cook your next food",
};

export default function RootLayout({ children }: WithChildren) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
