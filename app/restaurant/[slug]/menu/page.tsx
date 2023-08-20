import React from "react";
import RestaurantNavBar from "../components/RestaurantNavBar";
import Menu from "../components/Menu";
import { PrismaClient, Item } from "@prisma/client";

const prisma = new PrismaClient();

const fetchMenuDetails = async (slug: string): Promise<Item[]> => {
  const menuDetails = await prisma.restaurant.findUnique({
    where: {
      slug,
    },
    select: {
      items: true,
    },
  });
  if (!menuDetails) {
    throw new Error();
  }

  return menuDetails.items;
};

const RestaurantMenu = async ({ params }: { params: { slug: string } }) => {
  const menu = await fetchMenuDetails(params.slug);

  return (
    <div className="bg-white w-[100%] rounded p-3 shadow">
      <RestaurantNavBar slug={params.slug}></RestaurantNavBar>
      <Menu items={menu}></Menu>
    </div>
  );
};

export default RestaurantMenu;
