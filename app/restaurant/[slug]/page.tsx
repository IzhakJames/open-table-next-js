import NavBar from "@/app/components/NavBar";
import Link from "next/link";
import React from "react";
import Header from "./components/Header";
import RestaurantNavBar from "./components/RestaurantNavBar";
import Title from "./components/Title";
import Rating from "./components/Rating";
import Description from "./components/Description";
import RestaurantImage from "./components/RestaurantImage";
import Reviews from "./components/Reviews";
import ReservationCard from "./components/ReservationCard";

const RestaurantDetails = () => {
  return (
    <main className="bg-gray-100 min-h-screen w-screen">
      <main className="max-w-screen-2xl m-auto bg-white">
        <NavBar></NavBar>
        <Header></Header>
        <div className="flex m-auto w-2/3 justify-between items-start 0 -mt-11">
          <div className="bg-white w-[70%] rounded p-3 shadow">
            <RestaurantNavBar></RestaurantNavBar>
            <Title></Title>
            <Rating></Rating>
            <Description></Description>
            <RestaurantImage></RestaurantImage>
            <Reviews></Reviews>
          </div>
          <div className="w-[27%] relative text-reg">
            <ReservationCard></ReservationCard>
          </div>
        </div>
      </main>
    </main>
  );
};

export default RestaurantDetails;
