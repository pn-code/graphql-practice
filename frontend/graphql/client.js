import {
  ApolloClient,
  InMemoryCache,
  gql,
} from "@apollo/client";

export const client = new ApolloClient({
  uri: "http://localhost:4000/",
  cache: new InMemoryCache(),
});

export const getAllProducts = async () => {
  return client
    .query({
      query: gql`
        query GetAllProducts {
          products {
            id
            name
            type
          }
        }
      `,
    })
    .then((result) => console.log(result));
};
