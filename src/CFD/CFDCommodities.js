import React, { useEffect } from "react";
import { Link } from "react-router-dom";

import BuySell from "../components/BuySell/BuySell";
import CFDInfo from "../components/CFD Info/CFDInfo";
import CFDDetails from "../components/CFDDetails";

const CFDCommodities = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  return (
    <>
      <section className="cfdHeading">
        <div className="cfdHeading__wrapper">
          <div className="cfdHeading__content">
            <div className="cfdHeading__content-text">
              <h2>Trade CFD’s on Commodities</h2>
              <p>
                Commodity markets have had a major impact on nations and people
                throughout history. Currently there are about 50 major commodity
                markets worldwide that facilitate trading of approximately 100
                raw or primary products. There are different categories of
                commodities, all supported by the same basic economic
                principles: lower supply equals higher prices and vice versa. At
                CFDPRO you can trade up to 3 CFDs on Commodities such as COCOA,
                COFFEE and SOYBEAN with very favour able terms.
              </p>
            </div>
          </div>
          <div className="button-container">
            <Link to="/allinstrumentscommodities">
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
        heading="Trade Different Commodities with CFDPRO"
        info="With CFDPRO you can trade up to 3 CFDs on Commodities such as COCOA, COFFEE and SOYBEAN with very favour able terms."
        button="PRODUCT LIST"
        to="/allinstrumentscommodities"
      />
    </>
  );
};

export default CFDCommodities;
