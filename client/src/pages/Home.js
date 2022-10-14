import React from "react";
import dogCanoe from ".//../assets/images/dog_canoe.jpg";
import dogCar from ".//../assets/images/dog_car.jpg";
import { AiFillCamera } from "react-icons/ai";

const Home = () => {
  return (
    <div className="home">
      <img
        style={{ width: "15%", height: "15%" }}
        src={dogCanoe}
        alt="canoe"
        className="d-inline-flex m-3"
      />
      <p id="text">Imagine taking your best friend on your adventures<AiFillCamera className="m-1"/></p>
      <img id="car" style={{ width: "15%", height: "15%" }} src={dogCar} alt="car" className="d-inline-flex m-3" />
      <p id="texttwo">We are here to make that possible. Come join us!</p>
    </div>
  );
};

export default Home;
