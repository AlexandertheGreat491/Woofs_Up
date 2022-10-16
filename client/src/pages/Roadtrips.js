import React from "react";
import { FaBookOpen } from "react-icons/fa";
import { FaCarSide } from "react-icons/fa";

const Roadtrips = () => {
  return (
    <div className="roadtrip m-1">
      <h1 id="road" className="ms-1">Roadtrips with your dog<FaCarSide className="ms-1"/></h1>
      <p id="roady" className="ms-1">Plan Plan Plan</p>
      <p className="ms-1">Start by reading this article<FaBookOpen className="ms-1"/></p>
      <a href="https://be.chewy.com/how-to-travel-with-your-dog-a-complete-guide-to-hitting-the-road-with-your-pup-2/?gclid=CjwKCAjwtKmaBhBMEiwAyINuwJ3pCtt84IeEGNc80_cOnM5oe2b0baHjuKuycUq4GtqwXoPONwx0gRoCGEcQAvD_BwE"
      className="mb-1 ms-1"
      id="roadlink">
        How to Travel With Your Dog: A Complete Guide to Hitting the Road With
        Your Pup
      </a>
      <p className="ms-1">Then search our database for everything from dog friendly hotels to dog parks to veterinarians to rest stops</p>
    </div>
  );
};

export default Roadtrips;
