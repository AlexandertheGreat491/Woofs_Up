import React, { useState } from "react";
import { send } from "emailjs-com";
//import { validateEmail } from "../../utils/helpers";
import { FaDog } from "react-icons/fa";
import Boarding from "../../pages/Boarding";

// Travel function to get return statement
const TravelForm = () => {
  const [toSend, setToSend] = useState({
    from_name: "",
    to_name: "",
    message: "",
    reply_to: "",
  });

  const onSubmit = (e) => {
    e.preventDefault();

    send("service_8wr5jg6", "template_mqigr1p", toSend, "VAttkBUX6Azj6oY7o")
      .then((response) => {
        console.log("SUCCESS!", response.status, response.text);
      })
      .catch((err) => {
        console.log("FAILED...", err);
      });
  };

  const handleChange = (e) => {
    setToSend({ ...toSend, [e.target.name]: e.target.value });
  };

  return (
    <section id="form">
      <Boarding />

      <form
        id="travelform"
        className="mt-1 mb-1 travel card d-inline-flex"
        onSubmit={onSubmit}
      >
        <h2 id="bark" className="m-1 card-header">
          <FaDog className="me-1" />
          Barks and Travel
        </h2>
        <label id="from" htmlFor="from_name">
          From:
        </label>
        <input
          type="text"
          name="from_name"
          placeholder="from name"
          value={toSend.from_name}
          onChange={handleChange}
          required
        />
        <label id="to" htmlFor="to_name">
          To:
        </label>
        <input
          type="text"
          name="to_name"
          placeholder="to name"
          value={toSend.to_name}
          onChange={handleChange}
          required
        />
        <label id="message" htmlFor="message">
          Message:
        </label>
        <input
          type="text"
          name="message"
          placeholder="Your message"
          value={toSend.message}
          onChange={handleChange}
        />
        <label id="email" htmlFor="reply_to">
          Email:
        </label>
        <input
          type="text"
          name="reply_to"
          placeholder="Your email"
          value={toSend.reply_to}
          onChange={handleChange}
        />
        <button className="m-2" id="travelsubmit" type="submit">
          Submit
        </button>
      </form>
    </section>
  );
};

export default TravelForm;
