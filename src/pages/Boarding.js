// imports react
import React from "react";

// imports the image of a dog with sunglasses sitting on a suitcase
// imports the image of a dog with sunglasses sitting on a suitcase
import dogSuitcase from "../assets/images/dog_suitcase.JPG";

// imports the icons
// imports the HouseUser icon
import { FaHouseUser } from "react-icons/fa";
// imports the LocationArrow icon
import { FaLocationArrow } from "react-icons/fa";

// reference https://be.chewy.com/everything-you-need-to-know-about-pet-boarding/?gclid=Cj0KCQjwy5maBhDdARIsAMxrkw1xTCLzJeWX-StxKYy2i39BxGjJqJkFdb5LvTOxoyK_VZNsKomNLSwaAuUGEALw_wcB
// reference https://images.app.goo.gl/kJjKu6faBXgwzrEr8

const Boarding = () => {
  return (
    <div id="doghotel" className=" ms-2 mt-3">
      <h2 id="board">
        What you need know about boarding your dog
        <FaHouseUser className="ms-1" />
      </h2>
      <a
        id="boardinglinks"
        href="https://be.chewy.com/everything-you-need-to-know-about-pet-boarding/?gclid=Cj0KCQjwy5maBhDdARIsAMxrkw1xTCLzJeWX-StxKYy2i39BxGjJqJkFdb5LvTOxoyK_VZNsKomNLSwaAuUGEALw_wcB"
      >
        Everything you need to know about pet boarding
      </a>

      <h2 id="board">
        Search for the best accomodations by state
        <FaLocationArrow className="m-1" />
      </h2>
      <img
        style={{ width: "15%", height: "15%" }}
        src={dogSuitcase}
        alt="dog"
        className="m-1"
      />
      <a
        id="boardinglinks"
        href="https://www.bringfido.com/resource/doggie_daycare_boarding/region/united_states/"
      >
        Boarding by state
      </a>
    </div>
  );
};

export default Boarding;
