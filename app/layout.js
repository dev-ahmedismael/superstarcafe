"use client";
import Footer from "@/components/footer/Footer";
import Header from "@/components/header/Header";
import "@/styles/globals.css";
import "bootstrap/dist/css/bootstrap.min.css";
import { Roboto } from "next/font/google";
import { Great_Vibes } from "next/font/google";
import Theme from "./theme";
import ReduxProvider from "@/store/ReduxProvider";
import "animate.css";

export const roboto = Roboto({ subsets: ["latin"], weight: "400" });
export const greatVibes = Great_Vibes({ subsets: ["latin"], weight: "400" });

// export const metadata = {
//   title: "Superstar Café",
//   description: "THE BEST COFFEE TASTING EXPERIENCE IN LIBERTY CITY",
// };

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <head>
        <title>Superstar Café</title>
        <meta
          name="description"
          content="THE BEST COFFEE TASTING EXPERIENCE IN LIBERTY CITY"
        />
      </head>
      <body className={roboto.className}>
        <ReduxProvider>
          <Theme>
            <Header />
            <main>{children}</main>
            <Footer />
          </Theme>
        </ReduxProvider>
      </body>
    </html>
  );
}
