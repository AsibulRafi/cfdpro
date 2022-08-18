import React, { useState } from "react";

const Message = () => {
  const formInitialDetails = {
    firstName: "",
    lastName: "",
    email: "",
    phone: "",
    message: "",
  };

  const [formDetails, setFormDetails] = useState(formInitialDetails);
  const [buttonText, setButtonText] = useState("Send");
  const [status, setStatus] = useState({});
  const [message, setMessage] = useState(true);
  const onFormUpdate = (category, value) => {
    setFormDetails({
      ...formDetails,
      [category]: value,
    });
  };
  const handleSubmit = async (e) => {
    e.preventDefault();
    setButtonText("Sending...");
    let response = await fetch("http://localhost:5000/contact", {
      method: "POST",
      headers: {
        "Content-Type": "application/json;charset=utf-8",
      },
      body: JSON.stringify(formDetails),
    });
    setButtonText("Send");
    let result = await response.json();
    setFormDetails(formInitialDetails);
    if (result.code === 200) {
      setStatus({ succes: true, message: "Message sent successfully" });
    } else {
      setStatus({
        succes: false,
        message: "Something went wrong, please try again later.",
      });
    }
  };

  return (
    <>
      <div className="contact__content-form">
        <form onSubmit={handleSubmit}>
          <input
            type="text"
            name="firstName"
            placeholder="First Name"
            value={formDetails.firstName}
            onChange={(e) => {
              e.preventDefault();
              onFormUpdate("firstName", e.target.value);
            }}
            required
          />
          <input
            type="text"
            name="lastName"
            value={formDetails.lastName}
            onChange={(e) => onFormUpdate("lastName", e.target.value)}
            placeholder="Last Name"
            required
          />
          <input
            type="email"
            value={formDetails.email}
            placeholder="Email Address"
            onChange={(e) => onFormUpdate("email", e.target.value)}
          />
          <input
            type="text"
            name="phone"
            placeholder="Phone Number"
            value={formDetails.phone}
            onChange={(e) => onFormUpdate("phone", e.target.value)}
            required
          />
          <textarea
            type="text"
            placeholder="Message"
            value={formDetails.message}
            onChange={(e) => onFormUpdate("message", e.target.value)}
          ></textarea>
          <div className="form-check">
            <input type="checkbox" name="checkbox" />
            <p>
              I have read and accept the Client Agreement and Risk Disclosure of
              the Company
            </p>
          </div>
          <button type="submit">{buttonText}</button>
        </form>
      </div>
    </>
  );
};

export default Message;
