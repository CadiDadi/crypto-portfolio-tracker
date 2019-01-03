import React from "react";
import "./Footer.css";

const Footer = () => {
  return (
    <div className="footer">
      <div className="footer-container">
        <div className="feet">
          <div className="button-container">
            <div>
              <a className="footer-buttons contact" href="mailto: Info@C-3.co">
                Contact Us
              </a>
            </div>
            <div>
              <a className="footer-buttons visit" href="http://www.C-3.co">
                Visit Parent Website
              </a>
            </div>
          </div>
        </div>
      </div>
      <div className="legal">Crypto Currency Concepts (C-3)</div>
      <div className="legal">Copyright 2019 ©</div>
    </div>
  );
}; 

export default Footer;
