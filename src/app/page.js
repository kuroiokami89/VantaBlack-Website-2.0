"use client";

import Image from "next/image";
import { Scrollbar } from "smooth-scrollbar-react";
import Intro from "./components/Intro";
import Projects from "./components/Projects";
import About from "./components/About";
import About2 from "./components/About2";

export default function Home() {
  return (
    <>
      <Intro />
      <Projects />
      <About2 />
    </>
  );
}
