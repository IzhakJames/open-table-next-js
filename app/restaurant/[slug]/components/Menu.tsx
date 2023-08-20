import React from "react";
import MenuCard from "./MenuCard";
import { Item } from "@prisma/client";

const Menu = ({ items }: { items: Item[] }) => {
  return (
    <main className="bg-white mt-5">
      <div>
        <div className="mt-4 pb-1 mb-1">
          <h1 className="font-bold text-4xl">Menu</h1>
        </div>
        <div className="flex flex-wrap justify-between">
          {items.length > 0 ? (
            items.map((item) => (
              <MenuCard
                key={item.id}
                name={item.name}
                description={item.description}
                price={item.price}></MenuCard>
            ))
          ) : (
            <div className=" border rounded p-3 w-[49%] mb-3">
              <p className="font-light mt-1 text-sm">
                This restaurant has no menu.
              </p>
            </div>
          )}
        </div>
      </div>
    </main>
  );
};

export default Menu;
