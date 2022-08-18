import React, { useEffect } from "react";
import { Link } from "react-router-dom";

import BuySell from "../components/BuySell/BuySell";
import CFDInfo from "../components/CFD Info/CFDInfo";
import CFDDetails from "../components/CFDDetails";

const CFDForex = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  return (
    <>
      <section className="cfdHeading">
        <div className="cfdHeading__wrapper">
          <div className="cfdHeading__content cfdHeading-flex">
            <div className="cfdHeading__content-text">
              <h2>Trade CFD’s on Forex</h2>
              <p>
                Foreign exchange or Forex is one of the largest and most liquid
                markets with over 5 trillion dollars traded daily. A trader can
                trade currencies against each other and based on the changing
                values of currencies over time he can make a profit or a loss.
                Exchange rates are defined by the market forces of supply and
                demand and are affected by geopolitical and economic events
                around the globe.
              </p>
            </div>
            <div className="cfdHeading__content-info">
              <h2>With CFDPRO you can:</h2>
              <ul>
                <li>Trade 68+ currency pairs: majors, minors and exotics</li>
                <li>Direct access to the Forex Market 24/5</li>
                <li>Low spreads and No re-quotes</li>
                <li>No hidden fees</li>
              </ul>
            </div>
          </div>
          <div className="button-container">
            <Link to="/allinstrumentsforex">
              <button className="button1">Product Specification</button>
            </Link>
            <a href="https://web-trader.online/">
              <button className="button2">Open Account</button>
            </a>
          </div>
        </div>
      </section>
      {/* Info */}
      <CFDInfo />
      {/* Buy Sell */}
      <BuySell />
      {/* Details */}
      <CFDDetails
        heading="Trade Forex CFDs + pairs with Leverage"
        info="Make Forex CFD trades and gain access to leverage until 1:30. Trade on more than 68+ pair."
        button="CURRENCY LIST"
        to="/allinstrumentsforex"
      />
    </>
  );
};

export default CFDForex;
