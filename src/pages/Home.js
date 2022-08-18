import React, { useEffect } from "react";
import Button from "../components/Button/Button";
import Experience from "../components/Experience/Experience";
import takeControl from "../image/takeControl.png";
import getMore from "../image/getMore.png";
import hero from "../image/heroMobile.png";
import BuySell from "../components/BuySell/BuySell";
const Home = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  return (
    <>
      <section className="hero">
        <div className="hero__wrapper">
          <div className="hero__content">
            <div className="hero__content-text">
              <h2>TRADE CFDs ON TOP FINANCIAL INSTRUMENTS</h2>
              <Button button1="Real Account" button2="Open Account" />
            </div>
            <div className="hero__content-img">
              <img src={hero} alt="HeroImage" />
            </div>
          </div>
        </div>
      </section>
      {/* Experience */}
      <section className="experience">
        <h2 className="experience__heading">
          Experience superior execution <br /> & trading conditions
        </h2>
        <Experience />
      </section>
      <hr className="home__line" />
      {/* Take Control */}
      <section className="take__control">
        <div className="take__control-content">
          <div className="take__control-content__infos">
            <h2>Take Control</h2>
            {/* Take Control Info */}
            <div className="take__control-content__info">
              <h4>1</h4>
              <p>Stop Limit/ Stop Loss /Trailing Stop</p>
            </div>
            <div className="take__control-content__info">
              <h4>2</h4>
              <p>Free email & push notifications on the market events</p>
            </div>
            <div className="take__control-content__info">
              <h4>3</h4>
              <p>
                Alerts on price movements, including % of change ; Traders’
                Sentiments etc
              </p>
            </div>
            <div className="take__control-content__info">
              <h4>4</h4>
              <p>Negative Balance Protections</p>
            </div>
            <Button button1="Real Account" button2="Open Account" />
          </div>
          <div className="take__control-content__image">
            <img src={takeControl} alt="takeControlImg" />
          </div>
        </div>
      </section>

      <hr className="home__line" />
      {/* Get More */}
      <section className="getMore">
        <div className="getMore-content">
          <div className="getMore-content__infos">
            <h2>Get More</h2>
            {/* Get More Info */}
            <div className="getMore-content__info">
              <h4>1</h4>
              <p>
                Trade CFDs on Forex, Metals, Cryptocurrencies, <br />
                Energies and many more instruments on the Market!
              </p>
            </div>
            <Button button1="Real Account" button2="Open Account" />
          </div>
          <div className="getMore-content__image">
            <img src={getMore} alt="getMoreImg" />
          </div>
        </div>
      </section>
      <hr className="home__line" />
      <BuySell />
    </>
  );
};

export default Home;
