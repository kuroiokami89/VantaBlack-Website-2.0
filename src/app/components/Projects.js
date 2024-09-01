export default function Projects() {
  return (
    <div id="projects" className="blocco">
      <div className="section-title">
        <h2>PROJECTS</h2>
      </div>
      <div className="project-container">
        <div className="project-list-left">
          <a href="https://kuroiokami89.github.io/Vantablack-Portfolio-2.0/">
            <div className="project">
              <div className="project-img project-1"></div>
              <div className="project-text">
                <span>Portfolio Website</span>
                <h3>Vantablack portfolio</h3>
              </div>
            </div>
          </a>
          <a href="https://llvs9g-8080.csb.app/">
            <div className="project">
              <div className="project-img project-2"></div>
              <div className="project-text">
                <span>Photo Gallery</span>
                <h3>Artsense gallery v1.0</h3>
              </div>
            </div>
          </a>
        </div>
        <div className="project-list-right">
          <a href="https://www.figma.com/design/AIxk93Bhw0tdkwpQ5MFVQS/Ecommerce---Kronos?node-id=0-1&t=Gla0ppj60NeuBXXi-1">
            <div className="project">
              <div className="project-img project-3"></div>
              <div className="project-text">
                <span>Figma Project</span>
                <h3>Kronos luxury watch e-shop</h3>
              </div>
            </div>
          </a>
        </div>
      </div>
    </div>
  );
}
