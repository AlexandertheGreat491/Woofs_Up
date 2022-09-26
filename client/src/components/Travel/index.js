import React from "react";
// imports googleFormsToJson
import {
  GoogleFormProvider,
  googleFormsToJson,
} from "react-google-forms-hooks";
// imports the Google Forms json
import form from "./form.json";

// Travel form
const result = await googleFormsToJson();



const Travel = () => {
  return (
    <>
      <div>
        <div className="card container">
          <h2>Shipping</h2>
        </div>
        <div className="card container">
          <h2>Air</h2>
        </div>
        <div className="card container">
          <h2>Sea</h2>
        </div>
        <div className="card container">
          <h2>Land</h2>
        </div>
        <div className="card container">
          <h2>Boarding</h2>
        </div>
      </div>
    </>
  );
};

export default Travel;
