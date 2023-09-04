import React from "react";
import { useQuery } from "@apollo/client";
import { GET_PRODUCTS } from "../graphql/queries/GET_PRODUCTS";

export default function DisplayProducts() {
  const { loading, error, data } = useQuery(GET_PRODUCTS);

  if (loading) return <p>Loading...</p>;
  if (error) return <p>Error : {error.message}</p>;
  return <div>DisplayProducts</div>;
}
