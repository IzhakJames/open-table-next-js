import { PRICE } from "@prisma/client";
import React from "react";

interface Props {
  price: PRICE;
}

const Price = ({ price }: Props) => {
  const renderPrice = () => {
    if (price === "CHEAP") {
      return (
        <>
          <span>$$</span>
          <span className="text-gray-400">$$</span>
        </>
      );
    } else if (price === "REGULAR") {
      return (
        <>
          <span>$$$</span>
          <span className="text-gray-400">$</span>
        </>
      );
    } else {
      return (
        <>
          <span>$$$$</span>
        </>
      );
    }
  };
  return <p className="flex mr-3">{renderPrice()}</p>;
};

export default Price;
