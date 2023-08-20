import React, { ReactNode } from "react";
import Header from "./components/Header";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Restaurant | Open Table Next JS",
  description: "Generated by Next JS",
};

interface Props {
  children: ReactNode;
  params: { slug: string };
}

const RestaurantLayout = ({ children, params }: Props) => {
  const renderTitle = (slug: string) => {
    const stringArr = slug.split("-");
    stringArr[stringArr.length - 1] =
      "(" + stringArr[stringArr.length - 1] + ")";
    const title = stringArr.join(" ");
    return title;
  };
  return (
    <main>
      <Header title={renderTitle(params.slug)}></Header>
      <div className="flex m-auto w-2/3 justify-between items-start 0 -mt-11">
        {children}
      </div>
    </main>
  );
};

export default RestaurantLayout;
