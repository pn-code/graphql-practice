import React from "react";
import { Link } from "react-router-dom";
import RatingDisplay from "./RatingDisplay";

export default function ProductCard({ product }) {
  const ratings = product.reviews.map((review) => review.rating);

  return (
    <Link
      className="w-full flex bg-gray-50 p-4 rounded-md flex-row sm:flex-col sm:w-[260px] h-60 h items-stretch sm:items-center border-b-2 gap-6 justify-center hover:shadow-md duration-200 ease-in-out"
      to={`/products/${product.id}`}
    >
      <div className="w-[160px] h-[80px] sm:w-[200px] sm:h-[120px]">
        <img
          className="w-full h-full object-contain object-center"
          src={product.img}
          alt={product.name}
        />
      </div>
      <section className="w-full h-full flex flex-col justify-between sm:gap-2 text-sm">
        <h3>{product.name}</h3>
        <div className="w-full h-full flex justify-between items-end">
          <div className="flex sm:flex-col sm:gap-0.5 sm:items-start items-center w-full justify-between">
            <RatingDisplay ratings={ratings} />
            <h4 className="font-semibold text-right pr-5 text-lg">
              ${product.price * 0.01}
            </h4>
          </div>

          <Link
            to={`/products/${product.id}`}
            className="w-44 hidden sm:block text-center bg-amber-300 text-gray-800 font-semibold py-1.5 px-3 rounded-sm  hover:bg-amber-400 ease-in-out duration-200 hover:text-white"
          >
            Add to Cart
          </Link>
        </div>
      </section>
    </Link>
  );
}
