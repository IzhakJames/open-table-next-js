import { Review } from "@prisma/client";

export const CalculateRating = (reviews: Review[]) => {
  const total_rating = reviews.reduce((sum, rating) => sum + rating.rating, 0);

  const total_reviews = reviews.length;
  const result = new Intl.NumberFormat("en", {
    maximumFractionDigits: 1,
  }).format(total_rating / total_reviews);

  return parseFloat(result);
};
