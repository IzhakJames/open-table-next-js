import React from "react";
import RestaurantNavBar from "../components/RestaurantNavBar";
import Menu from "../components/Menu";

const RestaurantMenu = ({ params }: { params: { slug: string } }) => {
  console.log(params);
  return (
    <div className="bg-white w-[100%] rounded p-3 shadow">
      <RestaurantNavBar slug={params.slug}></RestaurantNavBar>
      <Menu></Menu>
    </div>
  );
};

export default RestaurantMenu;
