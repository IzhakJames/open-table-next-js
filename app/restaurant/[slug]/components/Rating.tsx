import React from "react";

interface Props {
  averageRating: number;
  numOfReviews: number;
}

const Rating = ({ averageRating, numOfReviews }: Props) => {
  return (
    <div className="flex items-end">
      <div className="ratings mt-2 flex items-center">
        <p>*****</p>
        <p className="text-reg ml-3">{averageRating}</p>
      </div>
      <div>
        <p className="text-reg ml-4">
          {numOfReviews} Review{numOfReviews > 1 ? "s" : ""}
        </p>
      </div>
    </div>
  );
};

export default Rating;
