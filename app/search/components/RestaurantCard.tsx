import Price from "@/app/components/Price";
import Stars from "@/app/components/Stars";
import { CalculateRating } from "@/app/utils/CalculateRating";
import { PRICE, Review } from "@prisma/client";
import Link from "next/link";
import React from "react";

interface Props {
  name: string;
  main_image: string;
  price: PRICE;
  city: string;
  cuisine: string;
  slug: string;
  reviews: Review[];
}

const RestaurantCard = ({
  name,
  main_image,
  price,
  city,
  cuisine,
  slug,
  reviews,
}: Props) => {
  const renderRating = () => {
    const average_rating = CalculateRating(reviews);
    if (average_rating >= 4) {
      return "Awesome";
    } else if (average_rating >= 3) {
      return "Good";
    } else if (average_rating > 0) {
      return "Average";
    } else {
      return "No Rating";
    }
  };

  return (
    <div className="border-b flex pb-5">
      <img
        src={main_image}
        alt="Restaurant Image"
        className="w-44 h-36 rounded"
      />
      <div className="pl-5">
        <h2 className="text-3xl">{name}</h2>
        <div className="flex items-start">
          <Stars ratings={CalculateRating(reviews)}></Stars>
          <p className="ml-2 text-sm">{renderRating()}</p>
        </div>
        <div className="mb-9">
          <div className="font-light flex text-reg">
            <Price price={price}></Price>
            <p className="mr-4 capitalize">{cuisine}</p>
            <p className="mr-4 capitalize">{city}</p>
          </div>
        </div>
        <div className="text-red-600">
          <Link href={`/restaurant/${slug}`}>View more information</Link>
        </div>
      </div>
    </div>
  );
};

export default RestaurantCard;
