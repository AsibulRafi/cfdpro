import React from "react";
import { BrowserRouter } from "react-router-dom";
import { Routes, Route } from "react-router";
// import $ from 'jquery';
import Home from "./pages/Home";
import Navbar from "./components/navbar/Navbar";
import Accounts from "./pages/Accounts";
import About from "./pages/About";
import Footer from "./components/Footer/Footer";
import KYC from "./pages/KYC";
import WebTrade from "./pages/WebTrade";
import Comparison from "./pages/Comparison";
import Commissions from "./pages/Commissions";

import CFDForex from "./CFD/CFDForex";
import CFDMetals from "./CFD/CFDMetals";
import CFDIndices from "./CFD/CFDIndices";
import CFDEquities from "./CFD/CFDEquities";
import CFDCryptocurrencies from "./CFD/CFDCryptocurrencies";
import CFDEnergies from "./CFD/CFDEnergies";
import CFDCommodities from "./CFD/CFDCommodities";
import Forex from "./AllInstruments/Forex";
import Metals from "./AllInstruments/Metals";
import Indices from "./AllInstruments/Indices";
import Equities from "./AllInstruments/Equities";
import Cryptocurrencies from "./AllInstruments/Cryptocurrencies";
import Energies from "./AllInstruments/Energies";
import Commodities from "./AllInstruments/Commodities";
import TradingGlossary from "./pages/TradingGlossary";
import Trade from "./pages/Trade";
const App = () => {
  return (
    <BrowserRouter>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/accounts" element={<Accounts />} />
        <Route path="/trade" element={<Trade />} />
        <Route path="/about" element={<About />} />
        <Route path="/kyc" element={<KYC />} />
        <Route path="/webtrade" element={<WebTrade />} />
        <Route path="/comparison" element={<Comparison />} />
        <Route path="/commissions" element={<Commissions />} />
        <Route path="/tradingglossary" element={<TradingGlossary />} />
        {/*  CFD*/}
        <Route path="/Forex" element={<CFDForex />} />
        <Route path="/Metals" element={<CFDMetals />} />
        <Route path="/Indices" element={<CFDIndices />} />
        <Route path="/Equities" element={<CFDEquities />} />
        <Route path="/Cryptocurrencies" element={<CFDCryptocurrencies />} />
        <Route path="/Energies" element={<CFDEnergies />} />
        <Route path="/Commodities" element={<CFDCommodities />} />
        {/* All Instruments  */}
        <Route path="/allinstrumentsforex" element={<Forex />} />
        <Route path="/allinstrumentsmetals" element={<Metals />} />
        <Route path="/allinstrumentsindices" element={<Indices />} />
        <Route path="/allinstrumentsequities" element={<Equities />} />
        <Route
          path="/allinstrumentscryptocurrencies"
          element={<Cryptocurrencies />}
        />
        <Route path="/allinstrumentsenergies" element={<Energies />} />
        <Route path="/allinstrumentscommodities" element={<Commodities />} />
      </Routes>

      <Footer />
    </BrowserRouter>
  );
};

export default App;
