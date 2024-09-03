"use client";

import "./globals.css";
import "./mediaquery.css";
import "./fonts.css";
import HeadComponent from "./components/HeadComponent";
import Header from "./components/Header";
import Footer from "./components/Footer";

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <HeadComponent />
      <body>
        <div id="top"></div>
        <Header />
        {children}
        <Footer />
      </body>
    </html>
  );
}
