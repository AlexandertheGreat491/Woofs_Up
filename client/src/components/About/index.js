// imports react
import React from "react";
// imports the image
import drinkingHorse from "../../assets/images/drinking_horse.jpg";

function About() {
  return (
    <article>
      <section>
        <div>
          <h2>About Woofs Up</h2>
          <img src={drinkingHorse} alt="drinking horse" />
          <div>
            <p>
              In March 2022, I took trip to Big Sky, Montana to do some skiing
              and hiking. In order to make this trip, I had to board my
              miniature schnauzer, Winston. I thouroughly enjoyed my time in the Big Sky and Bozeman area, but I missed Winston
              the entire time and from watching the webcam at his daycare he was not entirely happy to be there.
              This experience made me wonder if there was a way that I could have brought Winston with me. I knew I was not the only dog owner 
              to have ever had this thought. That is how Woofs Up started and here at Woofs Up we are on a mission to make it easier and more realistic for dog owners to travel
              with their dogs.
            </p>
          </div>
        </div>
      </section>
    </article>
  );
}

export default About;
