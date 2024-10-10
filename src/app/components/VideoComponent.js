"use client";

import styled from "styled-components";
import {
  NeutralFace,
  Bitsumishi,
  BunkenTechSansProMed,
  BunkenTechSansProLight,
  Thedus,
} from "./fonts";

const StyledMediaComponent = styled.div`
  position: relative;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  height: ${(props) => props.height};
  overflow: hidden;
  background-color: rgba(0, 0, 0, 0.5);

  #intro-gif {
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    object-fit: cover;
    z-index: -1;
  }

  .content {
    display: flex;
    flex-direction: column;
    text-align: center;
    z-index: 1;
    margin-bottom: 0 !important;
  }

  .content-span {
    margin-top: 25px;
    font-size: 1.3rem;
  }
`;

export default function Intro({ height, mediaSrc, title, subTitle }) {
  // Function to check if media is a video file (mp4, webm, ogg)
  const isVideo = (src) => {
    if (!src) return false; // Check if src is not null or undefined
    const videoExtensions = [".mp4", ".webm", ".ogg"];
    return videoExtensions.some((ext) => src.endsWith(ext));
  };

  return (
    <StyledMediaComponent
      id="intro"
      height={height}
      className={`section ${Thedus.className}`}
    >
      {!isVideo(mediaSrc) && mediaSrc ? (
        <img id="intro-gif" src={mediaSrc} alt="Intro GIF" />
      ) : null}

      <div className="content blocco">
        <h1>{title}</h1>
        <span className={`content-span ${BunkenTechSansProLight.className}`}>
          {subTitle}
        </span>
      </div>
    </StyledMediaComponent>
  );
}
