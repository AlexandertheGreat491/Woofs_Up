const {Schema, model} = require("mongoose");
const dateFormat = require("../utils/dateFormat");

const hotelSchema = new Schema(
    {
        name: {
            type: String,
            required: "Please enter the name of the hotel",
            minLength: 1,
        },
        description: {
            type: String,
            required: "Please describe the hotel and whether or not it's dog friendly",
            minLength: 1,
        },
        createdAt: {
            type: Date,
            default: Date.now,
            get: (timestamp) => dateFormat(timestamp),
        },
        username: {
            type: String,
            required: true,
        },
        url: {
            type: String,
        }
    },
    {
        toJSON: {
            getters: true,
        },
    }
);

const Hotel = model("Hotel", hotelSchema);

module.exports = Hotel;