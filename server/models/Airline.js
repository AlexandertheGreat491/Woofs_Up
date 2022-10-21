const {Schema, model} = require("mongoose");
const dateFormat = ("../utils/dateFormat");

const airlineSchema = new Schema (
    {
        name: {
            tyep: String, 
            required: "Please enter the name of the airline",
            minLength: 1
        },
    }
)