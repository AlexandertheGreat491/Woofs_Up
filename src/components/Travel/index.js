// imports react and the react hooks
import React, { useState } from "react";

// imports emailjs
import { send } from "emailjs-com";

// imports the icons
// imports the FaDog icon
import { FaDog } from "react-icons/fa";

// imports pages
// imports the Boarding page
import Boarding from "../../pages/Boarding";

// imports the Roadtrips page
import Roadtrips from "../../pages/AllTravel";

//Travel function to get return statement
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
      <Roadtrips />
      <form
        id="travelform"
        className="ms-4 mb-4 mt-3 card d-inline-flex"
        style={{ width: "20%", height: "20%" }}
        onSubmit={onSubmit}
      >
        <h2 id="bark" className="m-1 card-header">
          <FaDog className="me-1" />
          Barks and Travel
        </h2>
        <label id="from" htmlFor="from_name" className="ms-1">
          From:
        </label>
        <input
          type="text"
          name="from_name"
          placeholder="from name"
          value={toSend.from_name}
          onChange={handleChange}
          required
          className="m-1"
        />
        <label id="to" htmlFor="to_name" className="ms-1">
          To:
        </label>
        <input
          type="text"
          name="to_name"
          placeholder="to name"
          value={toSend.to_name}
          onChange={handleChange}
          required
          className="m-1"
        />
        <label id="message" htmlFor="message" className="ms-1">
          Message:
        </label>
        <input
          type="text"
          name="message"
          placeholder="Your message"
          value={toSend.message}
          onChange={handleChange}
          className="m-1"
        />
        <label id="email" htmlFor="reply_to" className="ms-1">
          Email:
        </label>
        <input
          type="text"
          name="reply_to"
          placeholder="Your email"
          value={toSend.reply_to}
          onChange={handleChange}
          className="m-1"
        />
        <button className="m-2" id="travelsubmit" type="submit">
          Submit
        </button>
      </form>
    </section>
  );
};

export default TravelForm;

