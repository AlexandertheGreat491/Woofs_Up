import {React, useState} from "react";
import TextField from "@mui/material/TextField";
import List from "./Components/List"



// imports icons
// imports the book icon
import { FaBookOpen } from "react-icons/fa";

// imports the car icon
import { FaCarSide } from "react-icons/fa";

// imports the article image
import guide from "../assets/images/guide.jpg";

const AllTravel = () => {
  return (
    <div className="roadtrip m-3 p-4" style={{ width: "45%", height: "60%" }}>
      <h1 id="road" className="ms-1">
        Roadtrips with your dog
        <FaCarSide className="ms-1" />
      </h1>
      <h2 id="roady" className="ms-1">
        Plan Plan Plan
      </h2>
      <p className="ms-1" id="puppy">
        Start by reading this article
        <FaBookOpen className="ms-1" />
      </p>

      <a
        href="https://be.chewy.com/how-to-travel-with-your-dog-a-complete-guide-to-hitting-the-road-with-your-pup-2/?gclid=CjwKCAjwtKmaBhBMEiwAyINuwJ3pCtt84IeEGNc80_cOnM5oe2b0baHjuKuycUq4GtqwXoPONwx0gRoCGEcQAvD_BwE"
        className="mb-1"
        id="roadlink"
      >
        How to Travel With Your Dog: A Complete Guide to Hitting the Road With
        Your Pup
        <img
          src={guide}
          style={{ width: "20%", height: "20%" }}
          alt="thumbnail"
          id="article"
          className="m-3"
        ></img>
      </a>
<div className="mainsearch">
  <h1 className="friendly">Dog Friendly Hotel Search</h1>
  <div className="search">
    <TextField
    id="outlined-basic"
    varient="outlined"
    fullWidth
    label="Search"
     />
  </div>
</div>
    </div>
  );
};

export default AllTravel;
