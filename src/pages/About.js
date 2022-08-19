import React, { useState } from "react";
import Call from "../components/Contact/Calls";
import Message from "../components/Contact/Message";
import aboutImg from "../image/aboutImg.png";
const About = () => {
  const [select, setSelect] = useState("Call");
  const buttons = {
    Call: <Call />,
    Message: <Message />,
  };
  return (
    <>
      <section className="about" id="about">
        <div className="about__wrapper">
          <div className="about__heading">
            <h2>Who is CFDPRO?</h2>
            <hr />
          </div>
          {/* About Content */}
          <div className="about__content">
            <div className="about__content-text">
              <p>
                CFDPRO was launched a few years back with a unique vision to
                provide unparalleled advanced trading conditions, premium
                education, and state-of-the-art trading tools in the Forex
                industry. Due to the continuous focus on localizing our products
                and services to suit each market, together with our successful
                collaboration with talented and experienced teams from all over
                the world. CFDPRO was quickly established as the global
                trademark it is today.
              </p>
              <p>
                Our number one mission is centered on time. By valuing time and
                understanding the importance of efficiency in the fluctuating,
                lightning-fast world of financial markets, every decision we
                make is designed to ensure that our clients and business
                partners, as well as our team of professionals, invest their
                time wisely. This road is paved by an ironclad focus on
                educating our customers. Knowledge is power, and empowering
                traders to get the best value for their investments is our
                passion.
              </p>
              <p>
                At CFDPRO we are committed to making sure all our clients and
                investors stay connected to the various opportunities that arise
                in the market on a daily basis and ease in connecting with one
                another. With CFDPRO as your financial stockbroker you are sure
                to get all the professional backing and support you require to
                soar in Forex trading.
              </p>
            </div>
            <div className="about__content-img">
              <img src={aboutImg} alt="aboutImg" />
            </div>
          </div>
        </div>
      </section>
      {/* Contact Us */}
      <section className="contact" id="contact">
        <div className="contact__heading">
          <h2>Contact</h2>
          <div className="contact__heading-buttons">
            <button
              className={
                select === "Call"
                  ? "contact__heading-buttons__single contact__btnactive"
                  : "contact__heading-buttons__single "
              }
              onClick={() => setSelect("Call")}
            >
              Let Us Call you
            </button>
            <button
              className={
                select === "Message"
                  ? "contact__heading-buttons__single contact__btnactive"
                  : "contact__heading-buttons__single"
              }
              onClick={() => setSelect("Message")}
            >
              Write Us a Message
            </button>
          </div>
          <div className="contact__content">
            {buttons[select]}
            <div className="contact__content-info">
              <div className="contact__content-info-email">
                <i className="fas fa-envelope"></i>
                <div className="email">
                  <h2>Support Email:</h2>
                  <p>support@cfdpro.com</p>
                </div>
              </div>
              <div className="contact__content-info-phone">
                <i className="fas fa-phone-alt"></i>
                <div className="phone">
                  <h2>Telephone number:</h2>
                  <p>+357 00 000 000</p>
                </div>
              </div>
              <div className="contact__content-info-clock">
                <i className="fas fa-clock"></i>
                <div className="clock">
                  <h2>Monday to Fridays</h2>
                  <p>9.30-21.00 GMT</p>
                </div>
              </div>
              <div className="contact__content-info-social">
                <i className="fab fa-facebook"></i>
                <i className="fab fa-instagram"></i>
                <i className="fab fa-whatsapp"></i>
                <i className="fab fa-twitter"></i>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default About;
