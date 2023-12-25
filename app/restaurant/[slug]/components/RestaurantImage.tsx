import React from "react";

const RestaurantImage = ({ images }: { images: string }) => {
  const imageArr = images.split(",");
  return (
    <div>
      <h1 className="font-bold text-3xl mt-10 mb-7 border-b pb-5">
        {images.length} photo{images.length > 1 ? "s" : ""}
      </h1>
      <div className="flex flex-wrap">
        {imageArr.map((image, index) => (
          <img
            key={index}
            className="w-56 h-44 mr-1 mb-1"
            src={image}
            alt="food image"
          />
        ))}
      </div>
    </div>
  );
};

export default RestaurantImage;
