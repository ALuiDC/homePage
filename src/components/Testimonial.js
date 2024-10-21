import React from "react";
import ProfilePic from "../Assets/liatec-icon.jpg";
import { AiFillStar } from "react-icons/ai";

const Testimonial = () => {
  return (
    <div className="work-section-wrapper">
      <div className="work-section-top">
        <p className="primary-subheading">Feedback</p>
        <h1 className="primary-heading">O que estão falando</h1>
        <p className="primary-text">
          Comentários sobre o estabelecimento
        </p>
      </div>
      <div className="testimonial-section-bottom">
        <img src={ProfilePic} alt="" />
        <p>
          Funcionários simpáticos e muito competentes, tiraram todas as dúvidas e deixaram meu carro mais limpo do que nunca. Nota 10!
        </p>
        <div className="testimonials-stars-container">
          <AiFillStar />
          <AiFillStar />
          <AiFillStar />
          <AiFillStar />
          <AiFillStar />
        </div>
        <h2>Liatec</h2>
      </div>
    </div>
  );
};

export default Testimonial;