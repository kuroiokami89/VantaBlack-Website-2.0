"use client";

import { NeutralFace, NeutralFaceBold } from "./fonts";

export default function About2() {
  return (
    <div id="about" className={`blocco ${NeutralFace.className}`}>
      <div className="about-container">
        <div className="about-title-container">
          <div className="title-container">
            <h2 className={`about-title ${NeutralFaceBold.className}`}>
              hi, i'm
            </h2>
            <h2
              className={`about-title title-name ${NeutralFaceBold.className}`}
            >
              Sergio <br /> Allushaj,{" "}
            </h2>
            <h2 className={`about-title ${NeutralFaceBold.className}`}>
              a web <br /> developer
            </h2>
          </div>
          <img id="about-image" src="/Me.jpg" alt="Sergio Allushaj" />
        </div>
        <p>
          I specialize in front-end development with expertise in HTML, CSS,
          JavaScript, and Next.js. My focus is on creating beautiful and
          functional websites with a modern look and excellent user experience.
        </p>
      </div>
    </div>
  );
}
