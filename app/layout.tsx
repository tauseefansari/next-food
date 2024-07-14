import "./globals.css";
import type { Metadata } from "next";
import type { Layout } from "@/model/layout";
import Header from "@/components/header/header";

export const metadata: Metadata = {
  title: "Next Food App",
  description: "Delicious meals, shared by a food-loving community.",
};

export default function RootLayout({ children }: Layout) {
  return (
    <html lang="en">
      <body>
        <Header />
        {children}
      </body>
    </html>
  );
}
