import "../styles/footer.css";
import facebook from "../assets/facebook.svg";
import mail from "../assets/mail.svg";
import whatsApp from "../assets/whatsApp.svg";

const Footer = () => {
  return (
    <section>
      <footer className="footer bg-light">
        <div className="contentLogos">
          <a href="http://" target="_blank" rel="noopener noreferrer">
            <img src={facebook} alt="" className="container-fluid" />
          </a>
        </div>
        <div className="contentLogos">
          <a href="http://" target="_blank" rel="noopener noreferrer">
            <img src={mail} alt="" className="container-fluid" />
          </a>
        </div>
        <div className="contentLogos">
          <a href="http://" target="_blank" rel="noopener noreferrer">
            <img src={whatsApp} alt="" className="container-fluid" />
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
