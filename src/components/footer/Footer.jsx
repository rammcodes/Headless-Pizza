import "./Footer.css";
import logo from "../../assets/logo.png";

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer__container">
        <div className="footer__upper">
          <div className="footer__branding">
            <div className="footer__logo-cont">
              <img src={logo} alt="Swiggy Logo" />
            </div>
            <p className="footer__text">
              Headless Pizza is a demo app to showcase Pizza Menu built using
              Wix Studio's Headless CMS as the Backend along with React JS as
              the Frontend.
            </p>
            <div className="footer__socials">
              <i className="bx bxl-instagram"></i>
              <i className="bx bxl-twitter"></i>
              <i className="bx bxl-youtube"></i>
              <i className="bx bxl-linkedin"></i>
              <i className="bx bxl-whatsapp"></i>
            </div>
          </div>
          <div className="footer__newsletter">
            <h4 className="footer__newsletter-title">Subscribe</h4>

            <form className="footer__newsletter-form">
              <input placeholder="johndoe@gmail.com" type="text" />

              <button>Subscribe</button>
            </form>
            <p>
              Subscribe to our newsletter for latest updates, deals and offers
              related to Headless Pizza right inside your mailbox.
            </p>
          </div>
        </div>
        <div className="footer__lower">
          <div className="text">© 2024 Headless Pizza Limited</div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
