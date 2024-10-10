"use client";

import styled from "styled-components";
import { useState } from "react";
import { BunkenTechSansProLight, Thedus } from "./fonts";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faHtml5,
  faCss3,
  faJs,
  faReact,
  faBootstrap,
} from "@fortawesome/free-brands-svg-icons";

const StyledAbout = styled.div`
  display: flex;
  border-right: 1px solid white;

  h3 {
    font-size: 1.5rem;
    border-bottom: 1px solid white;
    margin-bottom: 10px;
  }

  span {
    font-size: 1.25rem;
  }

  .about-img {
    border: 1px solid white;
    background-position: center;
    background-repeat: no-repeat;
    flex: 0 0 50%;
  }

  .about-bio {
    flex: 1;
    display: flex;
    flex-direction: column;
    border-bottom: 1px solid white;
  }

  .about-buttons {
    display: flex;
  }

  .about-buttons a {
    padding: 20px 10px;
    font-size: 1.35rem;
    text-align: center;
    border: 1px solid white;
    cursor: pointer;
    transition: color 0.3s, background 0.3s;
    background: black;
    color: white;
    flex: 1; /* Equal width for buttons */
  }

  .about-buttons a:hover {
    color: black;
    background: #7df9ff; /* Hover color */
  }

  .active {
    color: black;
    background: #7df9ff; /* Active button color */
  }

  .bio-list,
  .about-skills {
    padding: 0 50px;
    padding-right: 0;
    display: flex;
    flex-direction: column;
    justify-content: center;
    gap: 40px;
    flex: 1;
  }

  .bio-list div {
    display: flex;
    flex-direction: column;
    gap: 10px;
  }

  .about-skills div {
    display: flex;
    gap: 20px;
    align-items: center;
  }

  svg {
    font-size: 2.5rem;
  }

  .about-languages {
    margin-top: 20px;
    margin-bottom: 0;
  }

  @media screen and (max-width: 768px) {
    flex-direction: column;

    .about-img {
      flex: unset;
      border-top: unset;
    }

    h2 {
      border-top: unset;
    }
  }
`;

export default function About() {
  const [activeSection, setActiveSection] = useState("bio"); // "bio" or "skills"

  return (
    <StyledAbout
      id="about"
      className={`section ${BunkenTechSansProLight.className}`}
    >
      <div
        className="about-img"
        style={{ backgroundImage: "url('me.jpg')" }}
      ></div>

      <div className="about-bio">
        <h2 className={`title ${Thedus.className}`}>ABOUT ME</h2>

        {/* Buttons for toggling sections */}
        <div className="about-buttons">
          <a
            onClick={() => setActiveSection("bio")}
            className={activeSection === "bio" ? "active" : ""}
          >
            BIOMETRICS
          </a>
          <a
            onClick={() => setActiveSection("skills")}
            className={activeSection === "skills" ? "active" : ""}
          >
            SKILLS
          </a>
        </div>

        {/* Bio Section */}
        {activeSection === "bio" && (
          <div className="bio-list">
            <div>
              <h3>FULL NAME</h3>
              <span>ALLUSHAJ SERGIO</span>
            </div>
            <div>
              <h3>ALIAS</h3>
              <span>VANTABLACK</span>
            </div>
            <div>
              <h3>NATIONALITY</h3>
              <span>ITALIAN</span>
            </div>
            <div>
              <h3>POSITION</h3>
              <span>ITALY - VENETO</span>
            </div>
            <div>
              <h3>BIRTH</h3>
              <span>19-06-1999</span>
            </div>
            <div>
              <h3>LICENSE</h3>
              <span>B</span>
            </div>
          </div>
        )}

        {/* Skills Section */}
        {activeSection === "skills" && (
          <div className="about-skills">
            <h3>SKILLS</h3>
            <div>
              <FontAwesomeIcon icon={faHtml5} />
            </div>
            <div>
              <FontAwesomeIcon icon={faCss3} />
            </div>
            <div>
              <FontAwesomeIcon icon={faJs} />
            </div>
            <div>
              <FontAwesomeIcon icon={faReact} />
            </div>
            <div>
              <FontAwesomeIcon icon={faBootstrap} />
            </div>
            <h3 className="about-languages">LANGUAGES</h3>
            <div>
              <span>ITALIAN : MOTHER TONGUE</span>
            </div>
            <div>
              <span>ENGLISH : INTERMIEDIATE</span>
            </div>
          </div>
        )}
      </div>
    </StyledAbout>
  );
}
