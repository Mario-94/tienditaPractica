import "../styles/footer.css";
import "../styles/icons.css";
import { Face, Mail, Tel } from "../Icons/Icons";

const Footer = () => {
  return (
    <section>
      <footer className="footer bg-light">
        <div className="contentLogos">
          <a href="http://" target="_blank" rel="noopener noreferrer">
            <Face />
          </a>
        </div>
        <div className="contentLogos">
          <a href="http://" target="_blank" rel="noopener noreferrer">
            <Mail />
          </a>
        </div>
        <div className="contentLogos">
          <a href="http://" target="_blank" rel="noopener noreferrer">
            {/* <img src={whatsApp} alt="" className="container-fluid" /> */}
            <Tel />
          </a>
        </div>

        <div className="footerText">
          <span className="text-muted">© 2024 Tu Empresa</span>
        </div>
      </footer>
    </section>
  );
};

export default Footer;
