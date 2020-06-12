import React from "react";
import Logo from "../images/home-page-3-logo@2x.png";

function Footer() {
  return (
    <footer>
      <div className="footer-wrapper">
        <img src={Logo} alt="" />
        <div>Commercial Bank of Dubai © 2020 All rights reserved.</div>
      </div>
    </footer>
  );
}

export default Footer;
