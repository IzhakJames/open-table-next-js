import { Review } from "@prisma/client";

export const CalculateRating = (reviews: Review[]) => {
  const total_rating = reviews.reduce((sum, rating) => sum + rating.rating, 0);

  const total_reviews = reviews.length;
  let result = new Intl.NumberFormat("en", {
    maximumFractionDigits: 1,
  }).format(total_rating / total_reviews);
  if (total_rating === 0 && total_reviews === 0) {
    result = "0";
  }
  return parseFloat(result);
};
