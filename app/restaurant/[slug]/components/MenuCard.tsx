import React from "react";

interface Props {
  name: string;
  description: string;
  price: string;
}

const MenuCard = ({ name, description, price }: Props) => {
  return (
    <div className=" border rounded p-3 w-[49%] mb-3">
      <h3 className="font-bold text-lg">{name}</h3>
      <p className="font-light mt-1 text-sm">{description}</p>
      <p className="mt-7">{price}</p>
    </div>
  );
};

export default MenuCard;
