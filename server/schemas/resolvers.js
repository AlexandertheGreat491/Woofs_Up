// imports apollo-server-express
const { AuthenticationError } = require("apollo-server-express");
// imports all three models
const { User, Hotel, Airline } = require("../models");
// imports signToken
const { signToken } = require("..utils/auth");

const resolvers = {
  Query: {
    me: async (_parent, _args, context) => {
      if (context.user) {
        const userData = await User.findOne({ _id: context.user._id }).select(
          "-__v -password"
        );
        return userData;
      }
      throw new AuthenticationError("Not logged in!");
    },

    users: async () => {
      return User.find().select("-__v -password");
    },

    user: async (_parent, { username }) => {
      return User.findOne({ username }).select("-__v - password");
    },

    hotelsFindAll: async (_parent) => {
      return Hotel.find().sort({ createdAt: -1 });
    },

    hotels: async (_parent, { username }) => {
      const params = username ? { username } : {};
      return Hotel.find(params).sort({ createdAt: -1 });
    },

    hotel: async (_parent, { _id }) => {
      return Hotel.findOne({ _id });
    },

    airlinesFindAll: async (_parent) => {
      return Airline.find().sort({ createdAt: -1 });
    },

    airlines: async (_parent, { username }) => {
      const params = username ? { username } : {};
      return Hotel.find(params).sort({ createdAt: -1 });
    },

    airline: async (_parent, { _id }) => {
      return Hotel.findOne({ _id });
    },
  },

  Mutation: {
    addUser: async (_parent, args) => {
      const user = await User.create(args);
      const token = signToken(user);

      return { token, user };
    },

    login: async (_parent, { email, password }) => {
      const user = await User.findOne({ email });

      if (!user) {
        throw new AuthenticationError("Incorrect credentials!");
      }

      const correctPw = await user.isCorrectPassword(password);

      if (!correctPw) {
        throw new AuthenticationError("Incorrect credentials!");
      }

      const token = signToken(user);
      return { token, user };
    },

    addHotel: async (_parent, { name, description, username, url }) => {
      const hotel = await Hotel.create({
        name: name,
        description: description,
        createdAt: Date.now(),
        username: username,
        url: url,
      });
      return hotel;
    },
    addAirline: async (
      _parent,
      { name, description, maincabin, cargo, beforeyourflight, username }
    ) => {
      const airline = await Airline.create({
        name: name,
        description: description,
        maincabin: maincabin,
        cargo: cargo,
        beforeyourflight: beforeyourflight,
        username: username,
      });
      return airline;
    },
  },
};

module.exports = resolvers;
