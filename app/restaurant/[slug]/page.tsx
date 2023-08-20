import React from "react";
import RestaurantNavBar from "./components/RestaurantNavBar";
import Title from "./components/Title";
import Rating from "./components/Rating";
import Description from "./components/Description";
import RestaurantImage from "./components/RestaurantImage";
import Reviews from "./components/Reviews";
import ReservationCard from "./components/ReservationCard";
import { PrismaClient } from "@prisma/client";

interface RestaurantDetails {
  id: number;
  name: string;
  images: string[];
  description: string;
  slug: string;
}

const prisma = new PrismaClient();

const fetchRestaurantBySlug = async (slug: string) => {
  const restaurant = prisma.restaurant.findUnique({
    where: {
      slug,
    },
    select: {
      id: true,
      name: true,
      images: true,
      description: true,
      slug: true,
    },
  });

  return restaurant;
};

interface Props {
  params: { slug: string };
}

const RestaurantDetails = async ({ params }: Props) => {
  const restaurant = await fetchRestaurantBySlug(params.slug);
  if (!restaurant) {
    return (
      <div className="bg-white w-[70%] rounded p-3 shadow text-center">
        This restaurant does not exits.
      </div>
    );
  }

  return (
    <>
      <div className="bg-white w-[70%] rounded p-3 shadow">
        <RestaurantNavBar slug={restaurant.slug}></RestaurantNavBar>
        <Title title={restaurant.name}></Title>
        <Rating></Rating>
        <Description description={restaurant.description}></Description>
        <RestaurantImage images={restaurant.images}></RestaurantImage>
        <Reviews></Reviews>
      </div>
      <div className="w-[27%] relative text-reg">
        <ReservationCard></ReservationCard>
      </div>
    </>
  );
};

export default RestaurantDetails;
