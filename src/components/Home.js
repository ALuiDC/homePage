import React from "react";
import Navbar from "./Navbar";
import BannerBackground from "../Assets/home-banner-background.png";
import BannerImage from "../Assets/home-banner-image.png";
import { FiArrowRight } from "react-icons/fi";

const Home = () => {
    return (
    <div className="home-container">
        <Navbar />
        <div className="home-banner-container" >
            <div className="home-bannerImage-container" >
                <img scr={BannerBackground} alt="" />
            </div>
            <div className="home-text-section" >
                <h1 className="primary-heading">
                    Seu carrinho lavado e cheiroso
                 </h1>
                <p className="primary-text" >
                    Faça a limpeza do seu veículo de forma prática, sem que você perca tempo esperando e acompanhe a lavagem do seu automóvel.
                </p>
                <button className="secondary-button">
                    Order Now <FiArrowRight />
                </button>
            </div>
            <div className="home-image-container"> 
                <img src={BannerImage} alt="" />
            </div>
        </div>
    </div>
 );
};

export default Home;
