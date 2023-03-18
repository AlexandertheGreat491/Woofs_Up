import React from "react";

// imports icons
// imports the book icon
import { FaBookOpen } from "react-icons/fa";

// imports the car icon
import { FaCarSide } from "react-icons/fa";

// imports the article image
import guide from "../assets/images/guide.jpg";

const AllTravel = () => {
  return (
    <div className="roadtrip ms-1 me-4 mt-3" style={{ width: "45%", height: "15%" }}>
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
    </div>
  );
};

export default AllTravel;
