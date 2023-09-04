import { gql } from "@apollo/client";

export const GET_PRODUCT = gql`
  query Product($productId: ID!) {
    product(id: $productId) {
      img
      name
      price
      type
      reviews {
        content
        author {
          verified
          name
        }
        rating
      }
    }
  }
`;
