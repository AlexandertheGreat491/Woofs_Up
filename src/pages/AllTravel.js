import React from "react";
// imports icons
// imports the book icon
import { FaBookOpen } from "react-icons/fa";
// imports the car icon
import { FaCarSide } from "react-icons/fa";
// imports the plaine icon
import { FaPlaneDeparture } from "react-icons/fa";
// imports the article image
import guide from "../assets/images/guide.jpg";
// imports the image of a dog with sunglasses sitting on a suitcase
// imports the image of a dog with sunglasses sitting on a suitcase
import dogSuitcase from "../assets/images/dog_suitcase.JPG";
// imports icons
import { FaHouseUser } from "react-icons/fa";
import { FaLocationArrow } from "react-icons/fa";

const AllTravel = () => {
  return (
    <div className="roadtrip ms-1 me-4" style={{ width: "45%", height: "15%" }}>
      <h1 id="road" className="ms-1">
        Roadtrips with your dog
        <FaCarSide className="ms-1" />
      </h1>
      <p id="roady" className="ms-1">
        Plan Plan Plan
      </p>
      <p className="ms-1" id="puppy">
        Start by reading this article
        <FaBookOpen className="ms-1" />
      </p>

      <a
        href="https://be.chewy.com/how-to-travel-with-your-dog-a-complete-guide-to-hitting-the-road-with-your-pup-2/?gclid=CjwKCAjwtKmaBhBMEiwAyINuwJ3pCtt84IeEGNc80_cOnM5oe2b0baHjuKuycUq4GtqwXoPONwx0gRoCGEcQAvD_BwE"
        className="mb-1"
        id="roadlink"
      >
        <img
          src={guide}
          style={{ width: "18%", height: "18%" }}
          alt="thumbnail"
          id="article"
          className="me-1"
        ></img>
        How to Travel With Your Dog: A Complete Guide to Hitting the Road With
        Your Pup
      </a>

      <div id="doghotel" className="mt-1">
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
    </div>
  );
};

export default AllTravel;
