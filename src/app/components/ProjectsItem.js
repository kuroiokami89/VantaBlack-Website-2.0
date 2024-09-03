import { NeutralFace, NeutralFaceBold } from "./fonts";

// ProjectItem.js
export default function ProjectItem({ link, imgClass, spanText, h3Text }) {
  return (
    <a href={link}>
      <div className="project">
        <div className={`project-img ${imgClass}`}></div>
        <div className="project-text">
          <span className={`${NeutralFace.className}`}>{spanText}</span>
          <h3 className={`${NeutralFaceBold.className}`}>{h3Text}</h3>
        </div>
      </div>
    </a>
  );
}
