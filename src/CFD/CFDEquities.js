import React, { useEffect } from "react";
import { Link } from "react-router-dom";
import BuySell from "../components/BuySell/BuySell";
import CFDInfo from "../components/CFD Info/CFDInfo";
import CFDDetails from "../components/CFDDetails";

const CFDEquities = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  return (
    <>
      <section className="cfdHeading">
        <div className="cfdHeading__wrapper">
          <div className="cfdHeading__content cfdHeading-flex">
            <div className="cfdHeading__content-text">
              <h2>Trade CFD’s on Equities</h2>
              <p>
                Stocks or Equities belong to one of the major asset classes.
                Stocks are significant as they stand for the real value of one's
                stake in a corporation listed in a stock exchange. At CFDPRO you
                can trade 40+ Stock CFDs that are traded in world major equity
                markets, such as Apple, Microsoft, Alibaba and Amazon. Dividends
                Adjustments on Stocks CFDs CFDs on stocks are subject to
                dividend adjustments. When a stock security pays dividend to its
                shareholders, dividend adjustments will be made to the trading
                accounts of clients who hold a position on the Stock.
              </p>
            </div>
            <div className="cfdHeading__content-info">
              <h2>With CFDPRO you can:</h2>
              <ul>
                <li>
                  Long Positions (Buy) – Clients holding long positions on the
                  ex-div date will receive a dividend in the form of a cash
                  adjustment (CD) s
                </li>
                <li>
                  Short Positions (Sell) – Clients holding short positionson the
                  ex-div date will be charged the dividend amount in the form of
                  a cash adjustment (CW)
                </li>
              </ul>
            </div>
          </div>
          <div className="button-container">
            <Link to="/allinstrumentsequities">
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
        heading="Trade Different  Equities with CFDPROs"
        info="Trade CFDs on 40+ Stock CFDs that are traded in world major equity markets, such as Apple, Microsoft, Alibaba and Amazon with CFDPRO's Platform.     "
        button="PRODUCT LIST"
        to="/allinstrumentsequities"
      />
    </>
  );
};

export default CFDEquities;
