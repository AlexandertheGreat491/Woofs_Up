import React, {useState} from "react";
//Need this for later
//import {useMutation} from "@apollo/client";

function AddHotel(props) {
    const {options = [], setOption} = props;

    const [name, setName] = useState("");
    const nameChange = (event) => {
        setName(event.target.value);
    };

    const [description, setDescription] = useState("");
    const descriptionChange = (event) => {
        setDescription(event.target.value);
    };

    const [username, setUsername] = useState("");
    const userChange = (event) => {
        setUsername(event.target.value);
    };

}