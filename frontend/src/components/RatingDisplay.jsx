import { Star } from "lucide-react";

export default function RatingDisplay({ ratings }) {
  if (ratings.length === 0) {
    return <div className="text-xs font-semibold">Not yet rated</div>;
  }

  const averageRating =
    ratings.reduce((acc, rating) => acc + rating, 0) / ratings.length;
  console.log(averageRating);

  if (averageRating === 5) {
    return (
      <section className="flex">
        <Star color="black" fill="#FDDA0D" size={12} />
        <Star color="black" fill="#FDDA0D" size={12} />
        <Star color="black" fill="#FDDA0D" size={12} />
        <Star color="black" fill="#FDDA0D" size={12} />
        <Star color="black" fill="#FDDA0D" size={12} />
      </section>
    );
  }

  if (averageRating >= 4) {
    return (
      <section className="flex">
        <Star color="black" fill="#FDDA0D" size={12} />
        <Star color="black" fill="#FDDA0D" size={12} />
        <Star color="black" fill="#FDDA0D" size={12} />
        <Star color="black" fill="#FDDA0D" size={12} />
      </section>
    );
  }

  if (averageRating >= 3) {
    return (
      <section className="flex">
        <Star color="black" fill="#FDDA0D" size={12} />
        <Star color="black" fill="#FDDA0D" size={12} />
        <Star color="black" fill="#FDDA0D" size={12} />
      </section>
    );
  }

  if (averageRating >= 2) {
    return (
      <section className="flex">
        <Star color="black" fill="#FDDA0D" size={12} />
        <Star color="black" fill="#FDDA0D" size={12} />
      </section>
    );
  }

  if (averageRating >= 1) {
    return (
      <section className="flex">
        <Star color="black" fill="#FDDA0D" size={12} />
      </section>
    );
  }
}
