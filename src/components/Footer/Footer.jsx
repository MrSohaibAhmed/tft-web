import { useState } from "react";
import "./footer.css";
import Img from "../../assets/logo.png";

const Footer = () => {
  const [activeIndex, setActiveIndex] = useState(null);

  const handleAccordionToggle = (index) => {
    setActiveIndex(activeIndex === index ? null : index);
  };

  return (
    <footer>
      <div className="footer">
        <div className="main-footer-part">
          <div
            className="footer-logo"
            data-aos="fade-up"
            data-aos-offset="200"
            data-aos-easing="ease-in-sine"
            data-aos-duration="600"
          >
            <img src={Img} alt="Logo" />
          </div>

          <div
            className={`footer-content ${activeIndex === 0 ? "active" : ""}`}
            onClick={() => handleAccordionToggle(0)}
            data-aos="fade-right"
            data-aos-offset="200"
            data-aos-easing="ease-in-sine"
            data-aos-duration="600"
          >
            <h3>Product</h3>
            <p>Store</p>
            <p>Developer</p>
            <p>Teams</p>
            <p>Pro</p>
            <p>API Docs</p>
            <p>Pricing</p>
            <p>Changelog</p>
          </div>

          <div
            className={`footer-content ${activeIndex === 1 ? "active" : ""}`}
            onClick={() => handleAccordionToggle(1)}
            data-aos="fade-down"
            data-aos-offset="200"
            data-aos-easing="ease-in-sine"
            data-aos-duration="600"
          >
            <h3>Company</h3>
            <p>Careers</p>
            <p>Manifesto</p>
            <p>Privacy Policy</p>
            <p>Terms of Services</p>
            <p>DPA</p>
            <p>Press Kit</p>
            <p>Contact</p>
          </div>

          <div
            className={`footer-content ${activeIndex === 2 ? "active" : ""}`}
            onClick={() => handleAccordionToggle(2)}
            data-aos="fade-left"
            data-aos-offset="200"
            data-aos-easing="ease-in-sine"
            data-aos-duration="600"
          >
            <h3>Community</h3>
            <p>Community Stories</p>
            <p>Slack</p>
            <p>Twitter</p>
            <p>Github</p>
            <p>Dribble</p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
