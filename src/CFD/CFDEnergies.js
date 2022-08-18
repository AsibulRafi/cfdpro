import React, { useEffect } from "react";
import { Link } from "react-router-dom";
import BuySell from "../components/BuySell/BuySell";
import CFDInfo from "../components/CFD Info/CFDInfo";
import CFDDetails from "../components/CFDDetails";

const CFDEnergies = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  return (
    <>
      <section className="cfdHeading">
        <div className="cfdHeading__wrapper">
          <div className="cfdHeading__content">
            <div className="cfdHeading__content-text">
              <h2>Trade CFD’s on Energies</h2>
              <p>
                Oil and gas are the two most popular commodities. They are
                traded in heavy volumes around the clock offering multiple
                opportunities to online traders. Whether it is US Crude Oil
                (WTI), Brent Oil (Brent) or Natural Gas (NATGAS.f), energy
                commodities are quoted in USD. At CFDPRO you can trade 3 CFDs on
                energies such as Crude Oil, Brent Oil and Natural Gas, with very
                favour able terms.
              </p>
            </div>
          </div>
          <div className="button-container">
            <Link to="/allinstrumentsenergies">
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
        heading="Trade Different Energies with
CFDPRO"
        info="Trade 3 CFDs on energies such as Crude Oil, Brent Oil and Natural Gas, with very favour able terms on CFDPRO's Trading Platform."
        button="PRODUCT LIST"
        to="/allinstrumentsenergies"
      />
    </>
  );
};

export default CFDEnergies;
