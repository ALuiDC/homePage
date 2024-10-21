import React from "react";
import Logo from "../Assets/liatec-icon.jpg";
import { BsTwitter } from "react-icons/bs";
import { SiLinkedin } from "react-icons/si";
import { BsYoutube } from "react-icons/bs";
import { FaFacebookF } from "react-icons/fa";

const Footer = () => {
  return (
    <div className="footer-wrapper">
      <div className="footer-section-one">
        <div className="footer-logo-container">
          <img src={Logo} alt="" />
        </div>
        <div className="footer-icons">
          <BsTwitter />
          <SiLinkedin />
          <BsYoutube />
          <FaFacebookF />
        </div>
      </div>
      <div className="footer-section-two">
        <div className="footer-section-columns">
          <span>Ajuda</span>
          <span>Compartilhe</span>
          <span>Feedbacks</span>
          <span>Serviço</span>
        </div>
        <div className="footer-section-columns">
          <span>(61) 98283-2724</span>
          <span>liatec@gmail.com</span>
          <span>liatec@outlook.com</span>
          <span>contato@gmail.com</span>
        </div>
        <div className="footer-section-columns">
          <span>Termos & Condições</span>
          <span>Política de Privacidade</span>
        </div>
      </div>
    </div>
  );
};

export default Footer;