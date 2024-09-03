"use client";

import { NeutralFace, NeutralFaceBold } from "./fonts";

export default function About2() {
  return (
    <div id="about" className={`blocco ${NeutralFace.className}`}>
      <div className="about-container">
        <div className="about-title">
          <h2 className={`about-animated ${NeutralFaceBold.className}`}>
            hi, i’m sergio Allushaj, a web developer
          </h2>
        </div>
        <div className="about-paragraph">
          <p>
            I specialize in front-end development with expertise in HTML, CSS,
            JavaScript and Next js. My focus is on creating beautiful and
            functional websites with a modern look and excellent user
            experience.
          </p>
        </div>
      </div>
    </div>
  );
}
