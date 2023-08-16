import NavBar from "@/app/components/NavBar";
import React from "react";
import Header from "../components/Header";
import RestaurantNavBar from "../components/RestaurantNavBar";
import Menu from "../components/Menu";

const RestaurantMenu = () => {
  return (
    <>
      <Header></Header>
      <div className="flex m-auto w-2/3 justify-between items-start 0 -mt-11">
        <div className="bg-white w-[100%] rounded p-3 shadow">
          <RestaurantNavBar></RestaurantNavBar>
          <Menu></Menu>
        </div>
      </div>
    </>
  );
};

export default RestaurantMenu;
