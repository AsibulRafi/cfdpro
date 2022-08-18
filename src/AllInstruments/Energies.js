import React, { useEffect } from "react";
import forex from "./../image/forexw.png";
import metals from "./../image/metalsw.png";
import indices from "./../image/indicesw.png";
import equities from "./../image/equitiesw.png";
import cryptocurrencies from "./../image/cryptocurrenciesw.png";
import energies from "./../image/energiesw.png";
import commodities from "./../image/commoditiesw.png";
import { Link } from "react-router-dom";

const Energies = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  return (
    <section className="allInstruments">
      <div className="allInstruments__wrapper">
        <div className="allInstruments__heading">
          <h2>All instruments</h2>
          <hr />
          <p>
            Below you can find the list of all available media for transactions
            with our CFD service.
          </p>
        </div>
        <div className="allInstruments__content">
          <Link
            to="/allinstrumentsenergies"
            className="allInstruments__content-main"
          >
            <h4>energies</h4>
            <img src={energies} alt="allInstruments" />
          </Link>
          <div className="allInstruments__content-boxs">
            {/* Box Single */}
            <Link
              to="/allinstrumentsforex"
              className="allInstruments__content-box"
            >
              <h4>Forex</h4>
              <img src={forex} alt="allInstruments" />
            </Link>
            <Link
              to="/allinstrumentsmetals"
              className="allInstruments__content-box"
            >
              <h4>Metals</h4>
              <img src={metals} alt="allInstruments" />
            </Link>
            <Link
              to="/allinstrumentsindices"
              className="allInstruments__content-box"
            >
              <h4>indices</h4>
              <img src={indices} alt="allInstruments" />
            </Link>
            <Link
              to="/allinstrumentsequities"
              className="allInstruments__content-box"
            >
              <h4>equities</h4>
              <img src={equities} alt="allInstruments" />
            </Link>
            <Link
              to="/allinstrumentscryptocurrencies"
              className="allInstruments__content-box"
            >
              <h4>cryptocurrencies</h4>
              <img src={cryptocurrencies} alt="allInstruments" />
            </Link>
            <Link
              to="/allinstrumentscommodities"
              className="allInstruments__content-box"
            >
              <h4>commodities</h4>
              <img src={commodities} alt="allInstruments" />
            </Link>
          </div>
        </div>
        <div className="allInstruments__table">
          <table className="allInstruments__table-content">
            <thead className="allInstruments__table-content-heading">
              <tr>
                <th>Symbols</th>
                <th>Description</th>
                <th> Currency</th>
                <th>Nominal Volume</th>
                <th>Minimum Volume</th>
                <th>Maximum Volume</th>
                <th>Volume Step</th>
                <th>Swap Long In Points</th>
                <th>Swap Short In Points</th>
                <th>Trading Hours (Server Time)*</th>
              </tr>
            </thead>
            <tbody className="allInstruments__table-content-body">
              <tr>
                <td>USOIL.c</td>
                <td>Crude Oil Brent Cash</td>
                <td>USD</td>
                <td>Number of Contracts * Market Price*1 Barrel</td>
                <td>10 Lot</td>
                <td>10000 Lots</td>
                <td>1</td>
                <td>-21.800000</td>
                <td>-15.890000</td>
                <td>Mon-Fri 01:00-23:58</td>
              </tr>
              <tr>
                <td>UKOIL.c</td>
                <td>West Texas Intermediate Crude Oil cash</td>
                <td>USD</td>
                <td>Number of Contracts * Market Price*1 Barrel</td>
                <td>10 Lot</td>
                <td>10000 Lots</td>
                <td>1</td>
                <td>-17.34</td>
                <td>-26.00</td>
                <td>Mon-Fri 03:00-23:58</td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
    </section>
  );
};

export default Energies;
