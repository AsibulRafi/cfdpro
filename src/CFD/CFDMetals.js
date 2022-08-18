import React, { useEffect } from "react";
import { Link } from "react-router-dom";
import BuySell from "../components/BuySell/BuySell";
import CFDInfo from "../components/CFD Info/CFDInfo";
import CFDDetails from "../components/CFDDetails";

const CFDMetals = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  return (
    <>
      <section className="cfdHeading">
        <div className="cfdHeading__wrapper">
          <div className="cfdHeading__content">
            <div className="cfdHeading__content-text">
              <h2>Trade CFD’s on Metals</h2>
              <p>
                Metals are physical commodities and they have always played an
                important role in history and will continue to be valued. Metals
                such as Gold and Silver have been recognized as valuable assets
                and have always been a very popular choice of investing.
                Precious metals, especially Gold has always been referred to as
                ‘Safe Heaven' in times of economic uncertainty. CFDPRO offers
                investors, who do not want to face economic turbulence, access
                to three fives of metals: Gold, Silver, Palladium, Platinum and
                Copper.
              </p>
            </div>
          </div>
          <div className="button-container">
            <Link to="/allinstrumentsmetals">
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
        heading="Trade Different Metals with CFDPRO"
        info="Trade CFDs on five of the major major Metals on the Market  with CFDPRO's Platform."
        button="PRODUCT LIST"
        to="/allinstrumentsmetals"
      />
    </>
  );
};

export default CFDMetals;
