import React, { useState } from "react";
//import { useForm } from "react-hook-form";
import { validateEmail } from "../../utils/helpers";
import { FaDog } from "react-icons/fa";

// Travel function to get return statement
const Travel = () => {
  const [formState, setFormState] = useState({
    name: "",
    email: "",
    message: "",
  });

  const [errorMessage, setErrorMessage] = useState("");
  const { name, email, message } = formState;
  const handleSubmit = (e) => {
    e.preventDefault();
    if (!errorMessage) {
      setFormState({ [e.target.name]: e.target.value });
      console.log("Form", formState);
    }
  };

  const handleChange = (e) => {
    if (e.target.name === "email") {
      const isValid = validateEmail(e.target.value);
      if (!isValid) {
        setErrorMessage("Your email is invalid!");
      } else {
        setErrorMessage("");
      }
    } else {
      if (!e.target.value.length) {
        setErrorMessage(`${e.target.name} is required.`);
      } else {
        setErrorMessage("");
      }
    }
  };

  return (
    <section>
      <h1>
        <FaDog />
        Barks and Travel
      </h1>
      <form onSubmit={handleSubmit}>
        <div>
          <label htmlFor="name">Name:</label>
          <input
            type="text"
            name="name"
            defaultValue={name}
            onBlur={handleChange}
          />
        </div>
        <div>
          <label htmlFor="email">Email address:</label>
          <input
            type="email"
            name="email"
            defaultValue={email}
            onBlur={handleSubmit}
          />
        </div>
        <div>
          <label htmlFor="travel">Travel:</label>
          <p>Please select the answers that best meet your travel needs.</p>
          <br></br>
          <p>Will you be traveling domestically or internationally?</p>
          <input type="radio" name="domestic" value="Domestically"></input>
          <label for="domestic">Domestically</label>
          <input
            type="radio"
            name="international"
            value="Internationally"
          ></input>
          <label for="international">Internationally</label>
          <br></br>
          <p>Will you be travelling with your dog?</p>
          <input type="radio" name="yes" value="Yes"></input>
          <label for="yes">Yes</label>
          <input type="radio" name="no" value="No"></input>
          <label for="no">No</label>
          <br></br>
          <p>Do you need flight reservations?</p>
          <input type="radio" name="yes" value="Yes"></input>
          <label for="yes">Yes</label>
          <input type="radio" name="no" value="No"></input>
          <label for="no">No</label>
          <br></br>
          <p>
            What is your preferred airline? If you do not have a preferred
            airline simply put N/A
          </p>
          <input
            type="submit"
            name="submit"
            value="submit"
            placeholder="Enter your preffered airline"
          ></input>
          <label></label>
          <label for="submit">Submit</label>
        </div>
        {errorMessage && (
          <div>
            <p className="error-text">{errorMessage}</p>
          </div>
        )}
        <button type="submit">Submit</button>
      </form>
    </section>
  );
};

export default Travel;
