import React, { useState, useEffect } from "react";

const Trade = () => {
  const defaultActiveAccount = {
    login: "50502849",
    password: "Aa123456",
  };
  const user = window.user;
  const [activeAccount, setActiveAccount] = useState(defaultActiveAccount);
  const [accounts, setAccounts] = useState({});
  const [demoAccount, setDemoAccount] = useState(true);
  const loginButton = document.querySelector(".login__action-link");

  useEffect(() => {
    // cfdpro.com/accounts.php
    console.log(user);
    if (user !== undefined) setDemoAccount(false);
  }, [user]);

  useEffect(() => {
    getUserAccounts("markgtg15@gmail.com");
  }, []);

  const getUserAccounts = (email) => {
    const requestOptions = {
      method: "POST",
      //   Access-Control-Allow-Origin
      headers: {
        "Content-Type": "application/json",
        "Access-Control-Allow-Origin": "http://127.0.0.1:3000",
        "Access-Control-Allow-Methods": "POST",
        "Access-Control-Allow-Headers": "Content-Type, Authorization",
      },
      body: JSON.stringify({ email }),
    };
    fetch("https://cfdpro.com/accounts.php", requestOptions)
      .then((response) => response.json())
      .then((data) => {
        console.log("data", data);
        setAccounts(data);
      });
  };
  //   useEffect(() => {
  //     console.log("accounts", accounts);
  //   }, [accounts]);

  return (
    <section className="trade">
      <div className="trade__wrapper">
        <div className="trade__content">
          <div className="trade__content-poi">
            {demoAccount && (
              <div
                className="demoAccountWrap"
                onClick={() => loginButton.click()}
              ></div>
            )}
            <iframe
              title="Trading platform"
              src={`https://web-trader.online/#/?login=${activeAccount.login}&password=${activeAccount.password}`}
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Trade;
