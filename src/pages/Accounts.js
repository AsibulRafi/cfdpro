import React, { useEffect } from "react";
import { HashLink as Link } from "react-router-hash-link";
import AccTypes from "../components/AccTypes";
import { Benefits, Silver, Bronze, Gold } from "../data";
const Accounts = () => {
  useEffect(() => {
    // window.scrollTo(0, 0);
  }, []);
  return (
    <>
      <section className="accountsTypes" id="types">
        <div className="accountsTypes__wrapper">
          <div className="accountsTypes__heading">
            <h2>ACCOUNT TYPES</h2>
            <p>
              We present our customers with an account selection that can
              satisfy each trader's needs and preferences. Our team has thought
              about even the smallest of details and produced different account
              types so you can select the one that best suits your needs. There
              are different accounts to choose from and each one has its
              benefits.
            </p>
          </div>
          {/* Account Types Content */}
          <div className="accountsTypes__content">
            <AccTypes
              Info={Benefits}
              h2="Benefits"
              bgColor="#283341"
              txtColor="#fff"
            />
            <AccTypes
              Info={Bronze}
              h2="Bronze"
              bgColor="#fff"
              txtColor="#333"
            />
            <AccTypes
              Info={Silver}
              h2="Silver"
              bgColor="#fff"
              txtColor="#333"
            />
            <AccTypes Info={Gold} h2="Gold" bgColor="#fff" txtColor="#333" />
          </div>
          {/* Account Types End */}
          <div className="accountsTypes__info">
            <p>
              Leverage: Major currencies ( currency pairs comprising any two of
              the following currencies: USD, EUR, JPY, GBP, CAD and CHF) 1:30
              Non-majors currencies ( All other currencies are considered
              no-major)1:20
            </p>
            <p>*Spreads may increase depending on market conditions</p>
            <p>
              ** Please click here to see the Leverage/margin requirement per
              Instrument
            </p>
            <p>
              Trading involves risk of loss. Click here to read more and please
              trade carefully
            </p>
          </div>
        </div>
      </section>
      {/* Account Funding */}
      <section className="accountFunding" id="accFunding">
        <div className="accountFunding__heading">
          <h2>Account Funding</h2>
          <hr />
          <p>There are 3 different ways to fund your CFDPRO Account:</p>
        </div>

        <div className="accountFunding__content">
          <div className="accountFunding__content-infos">
            <div className="accountFunding__content-info">
              {/* 1. Credit Card/Debit Card */}
              <div className="accountFunding__content-info-1">
                <h2>1. Credit Card/Debit Card</h2>
                <p>
                  The best way to fund your account is with a credit or debit
                  card. The transfer is immediate and secure.
                </p>
                <p>
                  Minimum transaction amount $250
                  Please not your card should be enabled for international
                  transactions.
                </p>
              </div>
              {/* 2. Bank Draft */}
              <div className="accountFunding__content-info-2">
                <h2>2. Bank Draft</h2>
                <p>
                  You can utilize your banks services and transfer funds using a
                  bank draft. Please note that in some cases it might take up to
                  5 days for your funds to clear.
                </p>
              </div>
            </div>
            {/* 2nd Section */}
            <div className="accountFunding__content-info">
              {/* 1. Credit Card/Debit Card */}
              <div className="accountFunding__content-info-3">
                <h2>3. Wire Transfer</h2>
                <p>
                  Please use the details provided by your Senior Broker. If you
                  have online banking you can input the details provided online,
                  or visit your bank and fill in the wire transfer form. Please
                  remember to provide your Senior Broker the remittance slip.
                  Depending on your bank your funds might take up to 5 days to
                  clear. As soon as the funds are in your trading account you
                  will receive an email notification.
                </p>
              </div>
              {/* 2. Bank Draft */}
              <div className="accountFunding__content-info-4">
                <h2>Withdrawing Funds</h2>
                <p>In order to submit a withdrawal request you need to:</p>
                <p>
                  Log in to your account in your client area and submit a
                  withdrawal request.
                </p>
                <p>
                  Your request will be addressed and processed promptly.
                  Usually, provided the account is verified the request is
                  process within the next 2 business days. Depending on your
                  bank, your funds might take longer to appear in your bank
                  account.
                </p>
              </div>
            </div>
          </div>
          <div className="accountFunding__content-infos">
            <h2>Things you should take into account:</h2>
            <p>In order to submit a withdrawal request you need to:</p>
            <div className="accountFunding__content-infos-div">
              <i className="fas fa-circle"></i>
              <p>
                The initial amount invested will be returned through the same
                method deposited. If the requested amount exceeds the initial
                invested amount, you need to provide us with the bank account
                details of an account under your name, in order to receive the
                excess amount
              </p>
            </div>
            <div className="accountFunding__content-infos-div">
              <i className="fas fa-circle"></i>
              <p>
                For further inquiries regarding funding please contact us on
                supportcfdpro.com or through our live chat.
              </p>
            </div>
          </div>
          <Link to="/about" onClick={() => window.scrollTo(0, 1200)}>
            <button className="accountFunding__content-btn">
              Get In Touch
            </button>
          </Link>
        </div>
      </section>
    </>
  );
};

export default Accounts;
