import { gql } from "@apollo/client";

// query for all hotels
export const QUERY_HOTELS = gql`
  query Query {
    hotelsFindAll {
      _id
      name
      description
      createdAt
      username
      url
    }
  }
`;

// query for a single hotel
export const QUERY_HOTEL = gql`
query Query($id: ID:) {
  hotel(_id: $id) {
    _id
    name
    description
    createdAt
    username
    url
  }
}
`;

// query for all airlines
export const QUERY_AIRLINES = gql `
query Query {
  airlinesFindAll {
    name
    description
    maincabin
    cargo
    beforeyourflight
    createdAt
    username
  }
}
`;

// query for a single airline
export const QUERY_AIRLINE = gql`
query Query($id: ID:) {
  hotel(_id: $id) {
    _id
    name
    description
    maincabin
    cargo
    beforeyourflight
    createdAt
    username
    url
  }
}
`;