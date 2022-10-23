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
`