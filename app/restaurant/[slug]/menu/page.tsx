import React from "react";
import Header from "../components/Header";
import RestaurantNavBar from "../components/RestaurantNavBar";
import Menu from "../components/Menu";

const RestaurantMenu = () => {
  return (
    <div className="bg-white w-[100%] rounded p-3 shadow">
      <RestaurantNavBar></RestaurantNavBar>
      <Menu></Menu>
    </div>
  );
};

export default RestaurantMenu;
