import Link from "next/link";
import React from "react";
import { RestaurantCardDetails } from "../page";
import Price from "./Price";
import Stars from "./Stars";
import { CalculateRating } from "../utils/CalculateRating";

interface Props {
  restaurant: RestaurantCardDetails;
}

const RestaurantCard = ({ restaurant }: Props) => {
  return (
    <div className="w-64 h-72 m-3 rounded overflow-hidden border cursor-pointer hover:shadow-lg">
      <Link href={`/restaurant/${restaurant.slug}`}>
        <img
          src={restaurant.main_image}
          alt="restaurant image"
          className="w-full h-36"
        />
        <div className="p-1">
          <h3 className="text-black font-bold text-2xl mb-2">
            {restaurant.name}
          </h3>
          <div className="flex items-start">
            <Stars ratings={CalculateRating(restaurant.reviews)}></Stars>
            <p className="ml-2">
              {restaurant.reviews.length} review
              {restaurant.reviews.length > 1 ? "s" : ""}
            </p>
          </div>
          <div className="flex text-reg font-light capitalize">
            <p className=" mr-3">{restaurant.cuisine.name}</p>
            <Price price={restaurant.price}></Price>
            <p>{restaurant.location.name}</p>
          </div>
          <p className="text-sm mt-1 font-bold">Booked 3 times today</p>
        </div>
      </Link>
    </div>
  );
};

export default RestaurantCard;
