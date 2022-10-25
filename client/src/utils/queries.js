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

