"use client";

import { useRouter } from "next/navigation";
import React, { useState } from "react";

const SearchBar = () => {
  const router = useRouter();
  const [location, setLocation] = useState("");

  const handleSearch = () => {
    if (location !== "") {
      router.push(`/search?city=${location}`);
      setLocation("");
    }
  };
  return (
    <div className="text-left text-lg py-3 m-auto flex justify-center">
      <input
        onKeyDown={(e) => {
          if (e.code === "Enter") {
            handleSearch();
          }
        }}
        className="rounded  mr-3 p-2 w-[450px]"
        type="text"
        placeholder="State, city or town"
        value={location}
        onChange={(event) => setLocation(event.target.value)}
      />
      <button
        className="rounded bg-red-600 px-9 py-2 text-white"
        onClick={() => handleSearch()}>
        Let's go
      </button>
    </div>
  );
};

export default SearchBar;
