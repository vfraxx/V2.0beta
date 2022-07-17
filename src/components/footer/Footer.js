import React from "react";
import './Footer.css';

const Footer = () => (
    <footer className="footer">

        <span className="date">
          {`© ${new Date().getFullYear()} Afra - `}
          <span className="fotj">アフラ.</span>
        </span>

    </footer>
  );

  export default Footer;
  