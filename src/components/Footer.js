import React from "react";
import FacebookIcon from "@material-ui/icons/Facebook";
import LinkedInIcon from "@material-ui/icons/LinkedIn";
import EmailIcon from "@material-ui/icons/Email";
import GithubIcon from "@material-ui/icons/GitHub";
import "../styles/Footer.css";
import { PhoneAndroidOutlined, WhatsApp } from "@material-ui/icons";

function Footer() {
  let date = new Date();
  return (
    <div className="footer">
      <div className="socialMedia">
        <a href="mailto:hamees1993@gmail.com" target="blank">
          <EmailIcon />
        </a>
        <a href="tel:94752388697">
          <PhoneAndroidOutlined />
        </a>

        <a href="https://wa.me/94752388697" target="blank">
          <WhatsApp />
        </a>
      </div>
      <p> &copy; {date.getFullYear()} Hamees MJM</p>
    </div>
  );
}

export default Footer;
