"use client";
import React from "react";
import Image, { StaticImageData } from "next/image";
import fullStar from "../../public/icons/full-star.png";
import halfStar from "../../public/icons/half-star.png";
import emptyStar from "../../public/icons/empty-star.png";

interface Props {
  ratings: number;
}

const Stars = ({ ratings }: Props) => {
  const diff = 5 - ratings;
  const starsArr = [] as StaticImageData[];
  for (let i = 1; i < 6; i++) {
    if (i <= ratings) {
      starsArr.push(fullStar);
    } else {
      if (i - ratings <= 0.6) {
        starsArr.push(halfStar);
      } else {
        starsArr.push(emptyStar);
      }
    }
  }
  return (
    <>
      {starsArr.map((star, index) => (
        <Image
          key={index}
          width={20}
          src={star}
          alt="full star"
          className="flex mb-2"
        />
      ))}
    </>
  );
};

export default Stars;
