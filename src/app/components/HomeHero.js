"use client";

import styled from "styled-components";
import { Thedus, BunkenTechSansProLight } from "./fonts";

const StyledHomeHero = styled.div`
  display: flex;
  flex-direction: column;
  height: 100vh;
  justify-content: space-between;
  border: 1px solid white;
  border-right: 0;

  h1 {
    font-size: 17.1rem;
    border-right: 1px solid white;
  }

  .hero-about {
    display: flex;
    flex: 1;
    p {
      padding: 30px;
      flex: 1;
      border: 1px solid white;
      margin: 0;
      border-bottom: 0;
    }
  }

  .hero-sub-button {
    padding: 20px 10px;
    font-size: 1.35rem;
    text-align: center;
    border: 1px solid white;
    border-bottom: 0;
    margin-top: auto;
    transition: color 0.3s, background 0.3s;
    cursor: pointer;

    &:hover {
      color: black;
      background: #7df9ff;
    }
  }

  @media screen and (max-width: 768px) {
    .hero-about {
      flex-direction: column;
    }
  }
`;

export default function HomeHero() {
  return (
    <StyledHomeHero className={`section ${Thedus.className}`}>
      <h1>VANTABLACK</h1>
      <div className={`hero-about ${BunkenTechSansProLight.className}`}>
        <p></p>
        <p>
          I'm a graphic designer, UX/UI designer, and front-end web developer
          from Italy with nearly two years of experience. Specializing in HTML,
          CSS, JavaScript, and Next.js, with a focus on building modern,
          responsive, and highly functional websites. Passionate about creating
          unique designs and delivering exceptional user experiences.
        </p>
      </div>
      <a
        href="#about"
        className={`hero-sub-button ${BunkenTechSansProLight.className}`}
      >
        SCROLL DOWN
      </a>
    </StyledHomeHero>
  );
}
