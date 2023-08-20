import Price from "@/app/components/Price";
import { PRICE } from "@prisma/client";
import Link from "next/link";
import React from "react";

interface Props {
  name: string;
  main_image: string;
  price: PRICE;
  city: string;
  cuisine: string;
  slug: string;
}

const RestaurantCard = ({
  name,
  main_image,
  price,
  city,
  cuisine,
  slug,
}: Props) => {
  return (
    <div className="border-b flex pb-5">
      <img src={main_image} alt="Restaurant Image" className="w-44 rounded" />
      <div className="pl-5">
        <h2 className="text-3xl">{name}</h2>
        <div className="flex items-start">
          <div className="flex mb-2">*****</div>
          <p className="ml-2 text-sm">Awesome</p>
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
