import React from "react";
import { useQuery } from "@apollo/client";
import { GET_PRODUCTS } from "../../graphql/queries/GET_PRODUCTS";
import ProductCard from "./ProductCard";

export default function DisplayProducts() {
  const { loading, error, data } = useQuery(GET_PRODUCTS);

  if (loading) return <p>Loading...</p>;
  if (error) return <p>Error : {error.message}</p>;

  const { products } = data;

  return (
    <section className="flex flex-col sm:flex-row sm:gap-4 sm:flex-wrap w-full h-full sm:px-10 sm:py-0 ">
      {products.map((product) => (
        <ProductCard key={product.id} product={product} />
      ))}
    </section>
  );
}
