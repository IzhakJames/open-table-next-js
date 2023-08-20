"use client";

import { useEffect } from "react";
import Header from "./components/Header";
import RestaurantCard from "./components/RestaurantCard";
import axios from "axios";

export default function Home() {
  // useEffect(() => {
  //   axios
  //     .get("api/upload")
  //     .then((res) => console.log(res))
  //     .catch((err) => alert(err.message));
  // }, []);
  return (
    <main>
      <Header></Header>
      <div className="py-3 px-36 mt-10 flex flex-wrap justify-center">
        <RestaurantCard></RestaurantCard>
      </div>
    </main>
  );
}
