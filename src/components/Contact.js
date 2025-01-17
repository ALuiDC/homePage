import { textAlign } from "@mui/system";
import React from "react";

const Contact = () => {
  return (
    <div className="contact-page-wrapper">
      <h1 className="primary-heading">Tem alguma pergunta?</h1>
      <h1 className="primary-heading">Fale Conosco</h1>
      <div className="contact-form-container">
        <input type="text" placeholder="seuemail@gmail.com" />
        <button className="secondary-button">Enviar</button>
      </div>
    </div>
  );
};

export default Contact;