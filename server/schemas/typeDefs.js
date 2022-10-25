const { gql } = require("apollo-server-express");

const typeDefs = gql`
type User {
    _id: ID
    username: String
    email: String
    hotel: [Hotel]
    airline: [Airline]
}

type Hotel {
    _id: ID
    name: String
    description: String
    createdAt: String
    username: String
    url: String
}

type Airline {
    _id: ID
    name: String
    description: String
    maincabin: String
    cargo: String
    beforeyourflight: String
    createdAt: String
    username: String
}

type Auth {
    token: ID!
    user: User
}

type Query {
    me: User
    users: [User]
    user(username: String!): User
    hotelsFindAll: [Hotel]
    hotels(username: String): [Hotel]
    airlinesFindAll: [Airline]
    airlines(username: String): [Airline]
}

type Mutation {
    login(email: String!, password: String!): Auth
    addUser(username: String!, email: String, password: String!): Auth
    addHotel(
        name: String!
        description: String!
        username: String!
        url: String
    ): Hotel
    addAirline(
        name: String!
        description: String!
        username: String!
        maincabin: String
        cargo: String
        beforeyourflight: String
    ): Airline
}
`;

module.exports = typeDefs;