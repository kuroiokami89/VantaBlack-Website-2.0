import { Thedus, BunkenTechSansProLight } from "./fonts";

export default function Footer() {
  return (
    <footer
      id="footer"
      className={`section ${BunkenTechSansProLight.className}`}
    >
      <h2 className={`title ${Thedus.className}`}>GET IN TOUCH</h2>
      <div className="footer-container">
        <div className="footer-section">
          <a>sergioallushaj@gmail.com</a>
          <span>+39 389 290 3924</span>
        </div>
        <div className="footer-section">
          <a>ITALY - CASTELFRANCO VENETO</a>
          <span>XXXX XXXXX XXXXXXXXX</span>
        </div>
        <div className="footer-section">
          <a>FACEBOOK</a>
          <a>FACEBOOK</a>
          <a>FACEBOOK</a>
        </div>
      </div>
    </footer>
  );
}
