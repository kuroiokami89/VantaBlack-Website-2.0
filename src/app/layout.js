"use client";

import { Inter } from "next/font/google";
import "./globals.css";
import "./mediaquery.css";
import "./fonts.css";
import HeadComponent from "./components/HeadComponent";
import Header from "./components/Header";
import Footer from "./components/Footer";

const inter = Inter({ subsets: ["latin"], display: "swap" });

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <HeadComponent />
      <body>
        <Header />
        {children}
        <Footer />
      </body>
    </html>
  );
}
