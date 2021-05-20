import { StarIcon } from "@heroicons/react/solid";
import Image from "next/image";
import React, { useState } from "react";
import Currency from "react-currency-formatter";

const MAX_RATING = 5,
  MIN_RATING = 1;

function Product({ id, title, description, category, image, price }) {
  const [rating] = useState(
    Math.floor(Math.random() * (MAX_RATING - MIN_RATING + 1)) + MIN_RATING
  );

  const [hasPrime] = useState(1);
  //   const [hasPrime] = useState(Math.random < 0.5);
  return (
    <div className="relative flex flex-col m-5 bg-white z-30 p-10 hover:shadow-2xl rounded-3xl">
      <p className="absolute top-2 right-2 text-xs italic text-gray-400">
        {category}
      </p>
      <Image
        src={image}
        alt={title}
        height={200}
        width={200}
        objectFit="contain"
        className="transition duration-150 transform hover:scale-125 overflow-visible"
      />
      <h4 className="my-3">{title}</h4>
      <div className="flex items-center text-yellow-500 ">
        {Array(rating)
          .fill()
          .map((_, i) => (
            <StarIcon key={i} className="h-5" />
          ))}
      </div>
      <p className="text-xs my-2 line-clamp-2">{description}</p>
      <div className="mb-5">
        <Currency quantity={price} currency="GBP" />
      </div>
      {hasPrime && (
        <div className="flex items-center space-x-2 -mt-5">
          <img className="w-12" src="https://links.papareact.com/fdw" />
          <p className="text-xs text-gray-500">FREE Next-day Delivery</p>
        </div>
      )}
      <button className="mt-auto button">Add to basket</button>
    </div>
  );
}

export default Product;
