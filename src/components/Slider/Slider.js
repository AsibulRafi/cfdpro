import React from "react";
import "./slider.css";
import Carousel from "react-elastic-carousel";

import { Link } from "react-router-dom";
const Slider = () => {
  const breakPoints = [
    { width: 1, itemsToShow: 1 },
    { width: 550, itemsToShow: 2 },
    { width: 768, itemsToShow: 3 },
    // { width: 1200, itemsToShow: 4 },
  ];
  return (
    <div className="slider">
      <div className="slider__wrapper">
        <Carousel breakPoints={breakPoints}>
          <Link to="/Forex" className="slider-btn">
            <h4>Forex</h4>
          </Link>
          <Link to="/Metals" className="slider-btn">
            <h4>Metals</h4>
          </Link>
          <Link to="/Indices" className="slider-btn">
            <h4>indices</h4>
          </Link>
          <Link to="/Equities" className="slider-btn">
            <h4>equities</h4>
          </Link>
          <Link to="/Cryptocurrencies" className="slider-btn">
            <h4>cryptocurrencies</h4>
          </Link>
          <Link to="/Energies" className="slider-btn">
            <h4>energies</h4>
          </Link>
          <Link to="/Commodities" className="slider-btn">
            <h4>commodities</h4>
          </Link>
        </Carousel>
      </div>
    </div>
  );
};

export default Slider;
