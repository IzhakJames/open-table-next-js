import { Cuisine, Location, PRICE } from "@prisma/client";
import Link from "next/link";
import React from "react";
import { searchParams } from "../page";

interface Props {
  locations: Location[];
  cuisines: Cuisine[];
  searchParams: searchParams;
}

const SearchSideBar = ({ locations, cuisines, searchParams }: Props) => {
  return (
    <div className="w-1/5">
      <div className="border-b pb-4 flex flex-col">
        <h1 className="mb-2">Region</h1>
        {locations.map((loc) => (
          <Link
            href={{
              pathname: "search",
              query: {
                ...searchParams,
                city: loc.name,
              },
            }}
            key={loc.id}
            className="font-light text-reg capitalize hover:bg-slate-400 rounded-md cursor-pointer px-1">
            {loc.name}
          </Link>
        ))}
      </div>
      <div className="border-b pb-4 mt-3 flex flex-col">
        <h1 className="mb-2">Cuisine</h1>
        {cuisines.map((cui) => (
          <Link
            href={{
              pathname: "search",
              query: {
                ...searchParams,
                cuisine: cui.name,
              },
            }}
            key={cui.id}
            className="font-light text-reg capitalize  hover:bg-slate-400 rounded-md cursor-pointer px-1">
            {cui.name}
          </Link>
        ))}
      </div>
      <div className="mt-3 pb-4">
        <h1 className="mb-2">Price</h1>
        <div className="flex">
          <Link
            href={{
              pathname: "search",
              query: {
                ...searchParams,
                price: PRICE.CHEAP,
              },
            }}
            className="border w-full text-reg font-light rounded-l p-2 hover:bg-slate-400">
            $$
          </Link>
          <Link
            href={{
              pathname: "search",
              query: {
                ...searchParams,
                price: PRICE.REGULAR,
              },
            }}
            className="border-r border-t border-b w-full text-reg font-light p-2 hover:bg-slate-400">
            $$$
          </Link>
          <Link
            href={{
              pathname: "search",
              query: {
                ...searchParams,
                price: PRICE.EXPENSIVE,
              },
            }}
            className="border-r border-t border-b w-full text-reg font-light p-2 rounded-r hover:bg-slate-400">
            $$$$
          </Link>
        </div>
      </div>
      <div className="border rounded-md w-full text-sm font-light p-2 text-center bg-slate-300 hover:bg-slate-400">
        <Link
          href={{
            pathname: "search",
          }}>
          Reset Search Conditions
        </Link>
      </div>
    </div>
  );
};

export default SearchSideBar;
