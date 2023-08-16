import React from "react";

import Header from "./components/Header";
import SearchSideBar from "./components/SearchSideBar";
import RestaurantCard from "./components/RestaurantCard";

const Search = () => {
  return (
    <>
      <Header></Header>
      <div className="flex py-4 m-auto w-2/3 justify-between items-start">
        <SearchSideBar></SearchSideBar>

        <div className="w-5/6">
          <RestaurantCard></RestaurantCard>
        </div>
      </div>
    </>
  );
};

export default Search;