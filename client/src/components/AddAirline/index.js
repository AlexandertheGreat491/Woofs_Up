import React, {useState} from "react";
// Need for later
// import {useMutation} from "@apollo/client";

function AddAirline(props) {
    const {options = [], setOptions} = props;

    const [name, setName] = useState("");
    const nameChange = (event) => {
        setName(event.target.value);
    };

    const [description, setDescription] = useState("");
    const descriptionChange = (event) => {
        setDescription(event.target.value);
    };

    const [maincabin, setMainCabin] = useState("");
    const maincabinChange = (event) => {
        setMainCabin(event.target.value);
    };

    const [cargo, setCargo] = useState("");
    const cargoChange = (event) => {
        setCargo(event.target.value);
    };

    const [beforeyourflight,setBeforeYourFlight] = useState("");
    const beforeyourflightChange = (event) => {
        setBeforeYourFlight(event.target.value);
    };

    const [username, setUsername] = useState("");
    const userChange = (event) => {
        setUsername(event.target.value);
    };
}