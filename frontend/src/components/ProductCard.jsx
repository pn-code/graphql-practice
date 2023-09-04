import React from "react";

export default function ProductCard({ product }) {
  return (
    <article className="flex flex-col w-20 h-44 items-stretch">
      <h3>{product.name}</h3>
      <button className="bg-amber-500 text-white py-2 px-4">Add to Cart</button>
    </article>
  );
}
