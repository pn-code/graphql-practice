import React from "react";
import { useContext } from "react";
import { CartContext } from "../../contexts/CartContext";
import CartCard from "../components/CartCard";

export default function Cart() {
  const { cart } = useContext(CartContext);

  const cartTotal = cart.reduce((acc, product) => product.price + acc, 0);
  return (
    <section className="flex justify-center items-start sm:mt-10 sm:gap-10">
      <section className="flex flex-col gap-2">
        <h2 className="text-2xl font-semibold text-left">Your Cart</h2>
        {cart.length > 0 ? (
          cart.map((product, idx) => (
            <CartCard key={idx} index={idx} product={product} />
          ))
        ) : (
          <div className="bg-gray-50 p-4 rounded-sm border-2 border-gray-500">There are no items in your cart.</div>
        )}
      </section>
      <section className="flex flex-col gap-2">
        <h2 className="text-2xl font-semibold text-left">Your Total</h2>
        <div className="w-full sm:w-[200px] bg-gray-50 rounded-sm p-4 border-2 border-gray-500">
          <div className="text-lg font-semibold">
            Total: ${cartTotal * 0.01}.00
          </div>
        </div>
      </section>
    </section>
  );
}
