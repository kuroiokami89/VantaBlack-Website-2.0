"use client";

import { useEffect } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowDown } from "@fortawesome/free-solid-svg-icons";

export default function Intro() {
  return (
    <div id="intro" className="blocco">
      <div className="intro-container">
        <h1>
          SERGIO ALLUSHAJ
          <br />
          JUNIOR FRONT-END DEVELOPER
          <br />
          WEB GRAPHIC DESIGNER
          <br />
          BASED IN ITALY
        </h1>
      </div>
      <span>
        [ FEATURED PROJECTS
        <FontAwesomeIcon icon={faArrowDown} /> ]
      </span>
    </div>
  );
}
