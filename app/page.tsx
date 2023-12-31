// "use client";
// import { useEffect } from "react";
// import axios from "axios";

import Header from "./components/Header";
import RestaurantCard from "./components/RestaurantCard";
import { Cuisine, Location, PRICE, Review } from "@prisma/client";
import prisma from "@/prisma/client";

export interface RestaurantCardDetails {
  id: number;
  name: string;
  main_image: string;
  slug: string;
  cuisine: Cuisine;
  location: Location;
  price: PRICE;
  reviews: Review[];
}

const fetchRestaurant = async (): Promise<RestaurantCardDetails[]> => {
  const restaurants = prisma.restaurant.findMany({
    select: {
      id: true,
      name: true,
      main_image: true,
      slug: true,
      cuisine: true,
      location: true,
      price: true,
      reviews: true,
    },
  });
  return restaurants;
};

export default async function Home() {
  // Only used once to upload data to supabase instead of manual upload
  // useEffect(() => {
  //   axios
  //     .get("api/upload")
  //     .then((res) => console.log(res))
  //     .catch((err) => alert(err.message));
  // }, []);
  const restaurants = await fetchRestaurant();

  return (
    <main>
      <Header></Header>
      <div className="py-3 px-36 mt-10 flex flex-wrap justify-center">
        {restaurants.map((item) => (
          <RestaurantCard key={item.id} restaurant={item}></RestaurantCard>
        ))}
      </div>
    </main>
  );
}
