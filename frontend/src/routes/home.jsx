import React from "react";
import DisplayProducts from "../components/DisplayProducts";

export default function Home() {
  return (
    <>
      <h2 className="text-lg font-[500] sm:px-10 sm:py-4 p-2 bg-gray-50 sm:bg-transparent">
        Latest Deals
      </h2>
      <DisplayProducts />
    </>
  );
}
