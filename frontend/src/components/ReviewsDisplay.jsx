import React from "react";
import ReviewCard from "./ReviewCard";

export default function ReviewsDisplay({ reviews }) {
  return (
    <section className="bg-gray-50 w-full h-auto sm:w-[300px] sm:h-[260px] rounded-sm p-4">
      <h2 className="font-semibold">Reviews</h2>

      <div className="flex flex-col gap-2 overflow-y-auto h-full w-full">
        {reviews.length > 0 ? reviews.map((review, idx) => (
          <ReviewCard key={idx} review={review} />
        )): <div className="w-full h-[80%] flex items-center justify-center font-semibold text-zinc-700">No reviews.</div>}
      </div>
    </section>
  );
}
