import React from "react";
import dogCanoe from ".//../assets/images/dog_canoe.jpg";

const Home = () => {
  return (
    <div className="home">
      <img
        id="canoe"
        style={{ width: "15%", height: "15%" }}
        src={dogCanoe}
        alt="canoe"
        className="d-inline-flex m-3"
      />
      <p id="text">Imagine taking your best friend on your adventures</p>
    </div>
  );
};

export default Home;
