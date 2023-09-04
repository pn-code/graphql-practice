import { CheckCircle } from "lucide-react";
import React from "react";
import RatingDisplay from "./RatingDisplay";

export default function ReviewCard({ review }) {
  return (
    <article className="flex flex-col gap-1 text-zinc-700 border-b border-zinc-200 py-1">
      <header className="w-full flex justify-between">
        <div className="flex gap-0.5">
          <h3 className="font-semibold text-sm">{review.author.name}</h3>
          {review.author.verified && <CheckCircle color="green" size={10} />}
        </div>
        <RatingDisplay ratings={[review.rating]}/>
      </header>
      <p className="text-sm text-zinc-600">{review.content}</p>
    </article>
  );
}
