import React from "react";

const Call = () => {
  return (
    <>
      <div className="contact__content-form">
        <form action="https://formsubmit.co/support@cfdpro.com" method="POST">
          <input
            type="text"
            name="firstName"
            placeholder="First Name"
            required
          />
          <input type="text" name="lastName" placeholder="Last Name" required />
          <input type="email" placeholder="Email Address" />
          <input type="text" name="phone" placeholder="Phone Number" required />
          <input type="hidden" name="_captcha" value="false" />
          <div className="form-check">
            <input type="checkbox" name="checkbox" />
            <p>
              I have read and accept the Client Agreement and Risk Disclosure of
              the Company
            </p>
          </div>
          <button type="submit">Send</button>
        </form>
      </div>
    </>
  );
};

export default Call;
