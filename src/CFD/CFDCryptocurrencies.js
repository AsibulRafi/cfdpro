import React, { useEffect } from "react";
import { Link } from "react-router-dom";
import BuySell from "../components/BuySell/BuySell";
import CFDInfo from "../components/CFD Info/CFDInfo";
import CFDDetails from "../components/CFDDetails";

const CFDCryptocurrencies = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  return (
    <>
      <section className="cfdHeading">
        <div className="cfdHeading__wrapper">
          <div className="cfdHeading__content">
            <div className="cfdHeading__content-text">
              <h2>Trade CFD’s on Cryptocurrencies</h2>
              <p>
                Swap by interest : Since swaps are calculated and charged every
                day at the end of day time, the calculated amount of the annual
                interest rate is divided by 360. When charging swaps, first the
                cost of one symbol lot is calculated (the symbol of the opened
                position), and then the specified percent is calculated, the
                obtained amount is multiplied by the position volume (in lots)
                and the result is divided by 360. If the base currency of the
                symbol is different from the deposit currency, the swap is
                converted into the deposit currency. The conversion is performed
                using the average price at the moment of swap charging:
                (Bid+Ask)/2. You can trade CFDs on Cryptocurrencies from 00:05
                to 23:55, 5 days a week (Monday to Friday).
              </p>
            </div>
          </div>
          <div className="button-container">
            <Link to="/allinstrumentscryptocurrencies">
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
        heading="Trade Different Cryptocurrencies with CFDPRO"
        info="Trade on cryptocurrency pairs like BTC/USD or ETH/USD with CFDPRO's Trading Platform."
        button="PRODUCT LIST"
        to="/allinstrumentscryptocurrencies"
      />
    </>
  );
};

export default CFDCryptocurrencies;
