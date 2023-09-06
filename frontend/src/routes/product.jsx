import React from "react";
import { useQuery } from "@apollo/client";
import { GET_PRODUCT } from "../../graphql/queries/GET_PRODUCT";
import { useParams } from "react-router-dom";
import RatingDisplay from "../components/RatingDisplay";
import ReviewsDisplay from "../components/ReviewsDisplay";
import { useContext } from "react";
import { CartContext } from "../../contexts/CartContext";

export default function Product() {
  const { productId } = useParams();

  const { loading, error, data } = useQuery(GET_PRODUCT, {
    variables: { productId },
  });

  if (loading) return <p>Loading...</p>;
  if (error) return <p>Error : {error.message}</p>;

  const { product } = data;
  const ratings = product.reviews.map((review) => review.rating);

  // Cart Functionality
  const { cart, addToCart } = useContext(CartContext);

  return (
    <section className="mt-8 sm:mt-0 w-full h-full sm:min-h-[calc(100vh-200px)] flex flex-col sm:flex-row items-center justify-center gap-4">
      {/* Product */}
      <div className="sm:h-[260px] flex flex-col sm:flex-row gap-4 sm:gap-8 p-10 bg-gray-50 rounded-sm items-center sm:items-start">
        <div className="w-[200px] h-[120px] sm:w-[240px] sm:h-[160px]">
          <img
            className="w-full h-full object-contain object-center"
            src={product.img}
            alt={product.name}
          />
        </div>
        <section className="h-full w-full flex flex-col gap-20">
          {/* Upper right */}
          <div>
            <h2 className="text-xl font-semibold">{product.name}</h2>
          </div>

          {/* Lower Right */}
          <div className="w-full flex justify-between">
            <div>
              <RatingDisplay ratings={ratings} />
              <span className="text-sm font-semibold">
                {ratings.length > 0
                  ? (
                      ratings.reduce((acc, curr) => acc + curr, 0) /
                      ratings.length
                    ).toFixed(1) + "/5.0"
                  : ""}
              </span>
            </div>
            <button
              onClick={() =>
                addToCart({ ...product, cartIndex: cart.length + 1 })
              }
              className="bg-amber-300 text-black px-4 py-1 font-semibold rounded-sm hover:bg-amber-400 hover:text-white ease-in-out duration-200"
            >
              Add to Cart
            </button>
          </div>
        </section>
      </div>

      <ReviewsDisplay reviews={product.reviews} />
    </section>
  );
}
