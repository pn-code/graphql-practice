import React from "react";
import { ShoppingCart } from "lucide-react";

export default function ProductCard({ product }) {
  return (
    <article className="w-full flex bg-gray-50 p-4 rounded-md flex-row sm:flex-col sm:w-[260px] h-60 h items-stretch sm:items-center border-b-2 border-gray-200 sm:border-transparent gap-6 justify-center">
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
          <h4 className="font-semibold text-right pr-2 sm:text-lg">
            ${product.price * 0.01}
          </h4>
          <button className="hidden sm:flex bg-amber-300 text-gray-800 font-semibold py-1.5 px-3 rounded-sm  hover:bg-amber-400 ease-in-out duration-200 hover:text-white">
            Add to Cart
          </button>
        </div>
      </section>
    </article>
  );
}
