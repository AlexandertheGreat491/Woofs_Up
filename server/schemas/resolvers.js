// imports apollo-server-express
const { AuthenticationError } = require("apollo-server-express");
// imports all three models
const { User, Hotel, Airline } = require("../models");
// imports signToken
const { signToken } = require("..utils/auth");
