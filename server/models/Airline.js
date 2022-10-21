const {Schema, model} = require("mongoose");
const dateFormat = ("../utils/dateFormat");

const airlineSchema = new Schema (
    {
        name: {
            type: String, 
            required: "Please enter the name of the airline",
            minlength: 1
        },
        description: {
            type: String,
            required: "Please enter a description",
            minlength: 1
        }
    }
)