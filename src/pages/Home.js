// imports react
import React from "react";



// imports the image for the about section
import drinkingHorse from ".//../assets/images/drinking_horse.jpg";

const Home = () => {
  return (
    <div style={{ width: "100%" }} className="home">
      <br></br>
      <h2 id="up" className="mt-1 mb-3 text-center">
        About Woofs Up
        
      </h2>

      <div className="ms-5">
        {/*image for the about section */}
        <img
          style={{ width: "20%", height: "20%" }}
          src={drinkingHorse}
          alt="drinking horse"
          className="mb-1 me-1 float-start"
        />
        <p id="bio" className="ms-3 me-2 mt-3 p-2">
          In March 2022, I took trip to Big Sky, Montana to do some skiing and
          hiking. In order to make this trip, I had to board my miniature
          schnauzer, Winston. I thouroughly enjoyed my time in the Big Sky and
          Bozeman area, but I missed Winston the entire time and from watching
          the webcam at his daycare he was not entirely happy to be there. This
          experience made me wonder if there was a way that I could have brought
          Winston with me. I knew I was not the only dog owner to have ever had
          this thought. That is how Woofs Up started and here at Woofs Up we are
          on a mission to make it easier and more realistic for dog owners to
          travel with their dogs.
        </p>
      </div>
    </div>
  );
};

export default Home;
