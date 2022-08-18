import React, { useState, useEffect } from "react";
import { HashLink as Link } from "react-router-hash-link";
import "./style.css";
import logo from "../../image/logo.png";
const Navbar = () => {
  const [checked, setChecked] = useState(false);
  const accFunding = () => {
    // window.scrollTo(0, 1650);
    setChecked(false);
  };

  const [userLogined, setUserLogined] = useState(false);
  const openSignInPopup = window.clickJoinUsCallback;
  const user = window.user;
  useEffect(() => {
    console.log("user window.user", window.user);
    if (user !== undefined) setUserLogined(true);
  }, []);

  return (
    <div className="wrapper header_nav">
      <nav>
        <div className="logo">
          <Link to="/">
            <img src={logo} style={{ height: "50px" }} />
          </Link>
        </div>
        <input
          type="checkbox"
          id="show-menu"
          checked={checked}
          onChange={(e) => setChecked(e.target.checked)}
        />
        <label htmlFor="show-menu" className="menu-icon">
          <i className="fas fa-bars"></i>
        </label>

        <div className="content">
          <ul className="links">
            <li>
              <Link
                to="/"
                className="desktop-link"
                onClick={(event) => event.preventDefault()}
              >
                Trading
              </Link>
              <input type="checkbox" id="show-trading" />
              <label htmlFor="show-trading">Trading</label>
              <ul>
                <li>
                  <Link to="/Forex" onClick={() => setChecked(false)}>
                    CFDs on Forex
                  </Link>
                </li>
                <li>
                  <Link to="/Metals" onClick={() => setChecked(false)}>
                    CFDs on Metals
                  </Link>
                </li>
                <li>
                  <Link to="/Indices" onClick={() => setChecked(false)}>
                    CFDs Indices
                  </Link>
                </li>
                <li>
                  <Link to="/Equities" onClick={() => setChecked(false)}>
                    CFDs on Equities
                  </Link>
                </li>
                <li>
                  <Link
                    to="/Cryptocurrencies"
                    onClick={() => setChecked(false)}
                  >
                    CFDs Cryptocurrencies
                  </Link>
                </li>
                <li>
                  <Link to="/Energies" onClick={() => setChecked(false)}>
                    CFDs on Energies
                  </Link>
                </li>
                <li>
                  <Link to="/Commodities" onClick={() => setChecked(false)}>
                    CFDs on Commodities
                  </Link>
                </li>
                <li>
                  <Link to="/commissions" onClick={() => setChecked(false)}>
                    {" "}
                    Commissions and swaps
                  </Link>
                </li>
              </ul>
            </li>
            {/* Another Nav */}
            <li>
              <Link to="/accounts" className="desktop-link">
                Accounts
              </Link>
              <input type="checkbox" id="show-accounts" />
              <label htmlFor="show-accounts">Accounts</label>
              <ul>
                <li>
                  <Link to="/accounts#types" onClick={() => setChecked(false)}>
                    Account types
                  </Link>
                </li>
                <li>
                  <Link to="/accounts#accFunding" onClick={accFunding}>
                    Account Funding
                  </Link>
                </li>
                <li>
                  <Link to="/comparison" onClick={() => setChecked(false)}>
                    Account Comparison
                  </Link>
                </li>

                <li>
                  <Link to="/kyc" onClick={() => setChecked(false)}>
                    KYC Guide
                  </Link>
                </li>
              </ul>
            </li>
            {/* Another Nav */}
            <li>
              <Link to="/webtrade" className="desktop-link">
                Trading Platforms
              </Link>
              <input type="checkbox" id="show-platform" />
              <label htmlFor="show-platform">Trading Platforms</label>
              <ul>
                <li>
                  <Link to="/webtrade" onClick={() => setChecked(false)}>
                    Web Trader
                  </Link>
                </li>
              </ul>
            </li>
            <li>
              <Link to="/about#about" className="desktop-link">
                About Us
              </Link>
              <input type="checkbox" id="show-about" />
              <label htmlFor="show-about">About Us</label>
              <ul>
                <li>
                  <Link to="/about#about" onClick={() => setChecked(false)}>
                    About US
                  </Link>
                </li>
                <li>
                  <Link to="/about#contact" onClick={() => setChecked(false)}>
                    Contact US
                  </Link>
                </li>
              </ul>
            </li>
            <li>
              <Link to="/tradingglossary" className="desktop-link">
                Tools
              </Link>
              <input type="checkbox" id="show-tools" />
              <label htmlFor="show-tools">Tools</label>
              <ul>
                <li>
                  <Link to="/tradingglossary" onClick={() => setChecked(false)}>
                    Trading Glossary
                  </Link>
                </li>
                <li>
                  <Link to="/tradingglossary" onClick={() => setChecked(false)}>
                    Economical Calendar
                  </Link>
                </li>
              </ul>
            </li>
            <li>
              <a className="header__lg-btn" href="https://client.cfdpro.com/">
                Login
              </a>
              {/* {!userLogined && ( */}
              <a
                className="header__oa-btn"
                href="https://client.cfdpro.com/register"
              >
                Open Account
              </a>
              {/* )} */}
            </li>
          </ul>
        </div>
      </nav>
    </div>
  );
};

export default Navbar;
