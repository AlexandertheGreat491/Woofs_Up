import React, { useState } from "react";
import { send } from "emailjs-com";
//import { validateEmail } from "../../utils/helpers";
import { FaDog, FaHotel } from "react-icons/fa";
import Boarding from "../../pages/Boarding";
import Roadtrips from "../../pages/AllTravel";

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

  const searchBar = () => {};

  const [searchInput, setSearchInput] = useState("");

  const handletheChange = (e) => {
    e.preventDefault();
    setSearchInput(e.target.value);
  };
  if (searchInput.length > 0) {
    hotel.filter((pets) => {
      return;
      pets.name.match(searchInput);
    });
  }
  if (searchInput.length > 0) {
    reststop.filter((pets) => {
      return;
      pets.name.match(searchInput);
    });
  }
  if (searchInput.length > 0) {
    airline.filter((pets) => {
      return;
      pets.name.match(searchInput);
    });
  }

  return (
    <section id="form">
      <Boarding />
      <Roadtrips />
      <form
        id="travelform"
        className="mb-1 travel card d-inline-flex"
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
      {/* search bar */}
      <div>
        <input
          type="text"
          placeholder="Search here"
          onChange={handletheChange}
          value={searchInput}
        />
        <table>
          <tr>
            <th>Hotel</th>
            <th>Reststop</th>
            <th>Pets</th>
          </tr>
          {pets.map((hotel, *index*) =>
          {
            <tr>
              <td>{hotel.name}</td>
              <td>{reststop.name}</td>
              <td>{pets.name}</td>
            </tr>
})}
        </table>
      </div>
    </section>
  );
};

export default {TravelForm, searchBar};

