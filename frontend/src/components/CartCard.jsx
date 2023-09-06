import React from "react";
import { useContext } from "react";
import { CartContext } from "../../contexts/CartContext";
import RatingDisplay from "./RatingDisplay";

export default function CartCard({ product}) {
  const ratings = product.reviews.map((review) => review.rating);
  const { removeFromCart } = useContext(CartContext);

  return (
    <article className="w-full sm:w-[600px] flex justify-between p-4 bg-gray-50 sm:rounded-sm border-2 border-gray-500">
      <div className="flex flex-col gap-1">
        <div className="w-[160px] h-[80px] sm:w-[200px] sm:h-[120px]">
          <img
            className="w-full h-full object-contain object-center"
            src={product.img}
            alt={product.name}
          />
        </div>
        <h2>{product.name}</h2>
        <RatingDisplay ratings={ratings} />
      </div>
      <div className="flex flex-col justify-between">
        <div className="text-lg font-semibold">${product.price * 0.01}.00</div>
        <button
          onClick={() => removeFromCart(product.cartIndex)}
          className="text-sm text-blue-600 font-semibold hover:text-blue-800 ease-in-out duration-200"
        >
          REMOVE
        </button>
      </div>
    </article>
  );
}
