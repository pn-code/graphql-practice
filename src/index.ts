import { ApolloServer } from "@apollo/server";
import { startStandaloneServer } from "@apollo/server/standalone";

const products = [
  {
    id: "1",
    name: "Apple 2022 MacBook Pro Laptop",
    type: ["electronics, laptops"],
  },
  {
    id: "2",
    name: "Apple 2022 MacBook Air Laptop",
    type: ["electronics, laptops"],
  },
  {
    id: "3",
    name: "Beats Studio Pro",
    type: ["electronics, headphones"],
  },
  {
    id: "4",
    name: "Beats Studio Buds",
    type: ["electronics, headphones"],
  },
];

const authors = [
  {
    id: "1",
    name: "John",
    verified: true,
  },
  {
    id: "2",
    name: "Mario",
    verified: false,
  },
  {
    id: "3",
    name: "Pete",
    verified: true,
  },
];

const reviews = [
  {
    id: "1",
    rating: 4,
    content: "lorem ipsum",
    author_id: "1",
    product_id: "2",
  },
  {
    id: "2",
    rating: 3,
    content: "lorem ipsum",
    author_id: "2",
    product_id: "3",
  },
  {
    id: "3",
    rating: 1,
    content: "lorem ipsum",
    author_id: "3",
    product_id: "2",
  },
  {
    id: "4",
    rating: 5,
    content: "lorem ipsum",
    author_id: "2",
    product_id: "1",
  },
  {
    id: "5",
    rating: 4,
    content: "lorem ipsum",
    author_id: "3",
    product_id: "1",
  },
  {
    id: "6",
    rating: 2,
    content: "lorem ipsum",
    author_id: "3",
    product_id: "3",
  },
  {
    id: "7",
    rating: 5,
    content: "lorem ipsum",
    author_id: "1",
    product_id: "3",
  },
];

const typeDefs = `#graphql
    type Product {
        id: ID!
        name: String!
        type: [String!]!
    }
    type Review {
        id: ID!
        rating: Int!
        content: String!
    }
    type Author {
        id: ID!
        name: String!
        verified: Boolean!
    }
    type Query {
        review(id: ID!): Review
        product(id: ID!): Product
        author(id: ID!): Author
        reviews: [Review]
        products: [Product]
        authors: [Author]
    }
`;

export const resolvers = {
  Query: {
    products: () => products,
    reviews: () => reviews,
    authors: () => authors,
    review: (_: any, args: any) =>
      reviews.find((review) => review.id === args.id),
    product: (_: any, args: any) =>
      products.find((product) => product.id === args.id),
    author: (_: any, args: any) =>
      authors.find((author) => author.id === args.id),
  },
};

// server setup
const server = new ApolloServer({
  typeDefs,
  resolvers,
});

const { url } = await startStandaloneServer(server, {
  listen: { port: 4000 },
});

console.log(`Server is running on: ${url}`);
