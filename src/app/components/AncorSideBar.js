import styled from "styled-components";
import { Thedus } from "./fonts";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faWhatsapp,
  faGithub,
  faLinkedin,
} from "@fortawesome/free-brands-svg-icons";

const StyledAncorSideBar = styled.div`
  border: 1px solid white;
  border-left: 0;
  border-top: 0;
  border-bottom: 0;
  flex: 1;

  a,
  span {
    font-size: 2rem;
    padding: 13px 10px;
    text-align: center;
    cursor: pointer;
    width: 100%;
  }

  a {
    background: black;
    border: 1px solid white;
    border-left: 0;
    transition: background 0.4s ease-in, color 0.4s ease-in;
  }

  a:hover {
    background: #7df9ff;
    color: black;
  }

  .anchor-sidebar-container,
  .anchor-sidebar-container > div {
    display: flex;
    flex-direction: column;
    align-items: center;
    width: 100%;
  }

  .anchor-sidebar-container {
    height: 100%;
    justify-content: space-between;
  }

  img {
    width: 60px;
    height: 120px;
  }

  .logo {
    text-align: center;
    writing-mode: vertical-rl;
    display: flex; /* Added flexbox */
    justify-content: center; /* Centers content horizontally */
    align-items: center; /* Centers content vertically */
  }

  @media screen and (max-width: 768px) {
    display: none;
  }
`;

export default function AncorSideBar() {
  return (
    <StyledAncorSideBar className={Thedus.className}>
      <div className="anchor-sidebar-container">
        <a className="logo">VANTABLACK</a>
        <div>
          <a href="#top">0</a>
          <a href="#about">1</a>
          <a href="#projects">2</a>
          <a href="#footer">3</a>
        </div>
        <div>
          <a href="https://github.com/kuroiokami89">
            <FontAwesomeIcon icon={faGithub} />
          </a>
          <a href="https://www.linkedin.com/in/sergioallushaj/">
            <FontAwesomeIcon icon={faLinkedin} />
          </a>
          <a href="#works">
            <FontAwesomeIcon icon={faWhatsapp} />
          </a>
        </div>
      </div>
    </StyledAncorSideBar>
  );
}
