import React, { useEffect, useState } from "react";

import Slider from "../components/Slider/Slider";
import BronzeAccount from "../components/Comparison/BronzeAccount";
import SilverAccount from "../components/Comparison/SilverAccount";
import GoldAccount from "../components/Comparison/GoldAccount";

const Comparison = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  const accounts = {
    BronzeAccount: <BronzeAccount />,
    SilverAccount: <SilverAccount />,
    GoldAccount: <GoldAccount />,
  };
  const [selectedAccounts, setSelectedAccounts] = useState("BronzeAccount");
  return (
    <>
      <section className="account__comparison">
        <div className="account__comparison__wrapper">
          <div className="account__comparison-heading">
            <h2>ACCOUNT COMPARISON</h2>
            <p>
              We present our customers with an account selection that can
              satisfy each trader’s needs and preferences. Our team has thought
              about even the smallest of details and produced different account
              types so you can select the one that best suits your needs. There
              are different accounts to choose from and each one has its
              benefits.
            </p>
          </div>
          <div className="account__comparison-content">
            <button
              className={
                selectedAccounts === "BronzeAccount"
                  ? "account__comparison-content_button fbtn_active"
                  : "account__comparison-content_button"
              }
              onClick={() => setSelectedAccounts("BronzeAccount")}
            >
              Bronze
            </button>
            <button
              className={
                selectedAccounts === "SilverAccount"
                  ? "account__comparison-content_button fbtn_active"
                  : "account__comparison-content_button"
              }
              onClick={() => setSelectedAccounts("SilverAccount")}
            >
              Silver
            </button>
            <button
              className={
                selectedAccounts === "GoldAccount"
                  ? "account__comparison-content_button fbtn_active"
                  : "account__comparison-content_button"
              }
              onClick={() => setSelectedAccounts("GoldAccount")}
            >
              Gold
            </button>
          </div>
        </div>
      </section>
      {/* Financial Instrument */}
      <section className="financial">
        <div className="financial__heading">
          <h2>Choose a Financial Instrument</h2>
          <hr />
          <p>
            In this section you can explore all of the assets which are offered
            from our company and their leverages, spreads and commissions per
            account type.
          </p>
        </div>
        <div className="financial__slider">
          <Slider />
        </div>

        <div className="financial-table">{accounts[selectedAccounts]}</div>
      </section>
    </>
  );
};

export default Comparison;
