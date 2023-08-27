import { Review } from "@prisma/client";
import React from "react";
import ReviewCard from "./ReviewCard";

interface Props {
  reviews: Review[];
}

const Reviews = ({ reviews }: Props) => {
  return (
    <>
      {reviews.length > 0 ? (
        <div>
          <h1 className="font-bold text-3xl mt-10 mb-7 borber-b pb-5">
            What {reviews.length}{" "}
            {reviews.length > 1 ? "people are" : "person is"} saying
          </h1>
          <div>
            {reviews.map((review) => (
              <ReviewCard
                first_name={review.first_name}
                last_name={review.last_name}
                review={review.text}></ReviewCard>
            ))}
          </div>
        </div>
      ) : (
        <div className="border flex justify-center content-center py-4">
          This restaurant has no reviews.
        </div>
      )}
    </>
  );
};

export default Reviews;
