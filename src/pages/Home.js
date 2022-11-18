// imports react
import React from "react";
// importss the camera icon
import { AiFillCamera } from "react-icons/ai";
// imports the plane icon
import { FaTelegramPlane } from "react-icons/fa";
// imports the image
import drinkingHorse from ".//../assets/images/drinking_horse.jpg";

const Home = () => {
  return (
    <div id="about" style={{ width: "100%" }} className="home about card">
      <h2 id="up" className="text-center">
        About Woofs Up
      </h2>
      <img
        style={{ width: "20%", height: "20%" }}
        src={drinkingHorse}
        alt="drinking horse"
        className="mb-1 ms-2"
      />

      <p id="text">
        Imagine taking your best friend on your adventures
        <AiFillCamera className="m-1" />
      </p>

      <p id="texttwo">
        We are here to make that possible. Come join us!
        <FaTelegramPlane className="m-1" />
      </p>
      <p id="bio">
        In March 2022, I took trip to Big Sky, Montana to do some skiing and
        hiking. In order to make this trip, I had to board my miniature
        schnauzer, Winston. I thouroughly enjoyed my time in the Big Sky and
        Bozeman area, but I missed Winston the entire time and from watching the
        webcam at his daycare he was not entirely happy to be there. This
        experience made me wonder if there was a way that I could have brought
        Winston with me. I knew I was not the only dog owner to have ever had
        this thought. That is how Woofs Up started and here at Woofs Up we are
        on a mission to make it easier and more realistic for dog owners to
        travel with their dogs.
      </p>
    </div>
  );
};

export default Home;
