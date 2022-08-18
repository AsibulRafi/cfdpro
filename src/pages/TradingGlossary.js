import React, { useEffect, useState, useRef } from "react";
import Accordion from "../components/Accordion/Accordion";
const TradingGlossary = () => {
  const [selectedLetter, setSelectedLetter] = useState("a");
  const _ref = useRef(null);
  useEffect(() => {
    window.scrollTo(0, 0);
    const script = document.createElement("script");
    script.src =
      "https://s3.tradingview.com/external-embedding/embed-widget-market-overview.js";
    script.async = true;
    script.innerHTML = {
      colorTheme: "dark",
      isTransparent: false,
      width: "510",
      height: "600",
      locale: "en",
      importanceFilter: "-1,0,1",
    };
    _ref.current.appendChild(script);
  }, []);

  const alpabet = [
    "a",
    "b",
    "c",
    "d",
    "e",
    "f",
    "g",
    "h",
    "i",
    "j",
    "k",
    "l",
    "m",
    "n",
    "o",
    "p",
    "q",
    "r",
    "s",
    "t",
    "u",
    "v",
    "w",
    "x",
    "y",
    "z",
  ];

  const LettersBlock = () => {
    return alpabet.map((letter) => {
      return (
        <div
          key={letter}
          className={letter === selectedLetter ? "tg__active" : "tg_text"}
          onClick={() => setSelectedLetter(letter)}
        >
          {letter.toUpperCase()}
        </div>
      );
    });
  };
  return (
    <>
      <section className="trading__glossary">
        <div className="trading__glossary__wrapper">
          <h2 className="trading__glossary__heading">TOOLS</h2>
          <div className="trading__glossary__content">
            <div className="trading__glossary__content-alphabet">
              <div className="trading__glossary__content-alphabet-scrollbar">
                <div className="trading__glossary__content-alphabet-scrollbar__wrapper">
                  <LettersBlock />
                </div>
              </div>
            </div>
            <div className="trading__glossary__content-accordion">
              <Accordion letter={selectedLetter} />
            </div>
          </div>
        </div>
      </section>

      {/* <FuncAccordeon /> */}
      <section className="calender">
        <div className="calender__heading">
          <h2>Economical Calendar</h2>
          <hr />
        </div>

        <div
          className="tradingview-widget-container"
          style={{ margin: "auto" }}
          ref={_ref}
        >
          <div className="tradingview-widget-container__widget"></div>
        </div>
      </section>
    </>
  );
};

export default TradingGlossary;
