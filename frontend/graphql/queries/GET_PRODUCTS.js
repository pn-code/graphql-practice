import { gql } from "@apollo/client";

export const GET_PRODUCTS = gql`
  query GetAllProducts {
    products {
      id
      name
      type
      price
      img
    }
  }
`;
