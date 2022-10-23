const { AuthenticationError } = require("apollo-server-express");
const { User, Hotel, Airline } = require("../models");
const { signToken } = require("..utils/auth");
