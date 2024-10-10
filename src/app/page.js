"use client";

import About from "./components/About";
import Footer from "./components/Footer";
import HomeHero from "./components/HomeHero";
import AncorSideBar from "./components/AncorSideBar";

export default function Home() {
  return (
    <>
      <div
        className="page-container"
        style={{
          display: "flex",
        }}
      >
        <div className="snap-container">
          <div id="top"></div>
          <HomeHero />
          <About />
          <Footer />
        </div>
        <AncorSideBar />
      </div>
    </>
  );
}
