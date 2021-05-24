import Image from "next/image";
import { useState } from "react";
import { StarIcon } from "@heroicons/react/solid";
import Currency from "react-currency-formatter";
import { useDispatch } from "react-redux";
import { addToBasket, removeFromBasket } from "../slices/basketSlice";
import { PlusCircleIcon, MinusCircleIcon } from "@heroicons/react/outline";

const MAX_RATING = 5,
  MIN_RATING = 1;

function CheckoutProduct({ id, title, description, category, image, price }) {
  const [rating] = useState(
    Math.floor(Math.random() * (MAX_RATING - MIN_RATING + 1)) + MIN_RATING
  );

  const [hasPrime] = useState(Math.random() < 0.5);

  const dispatch = useDispatch();

  const addItemToBasket = async () => {
    const product = {
      id,
      title,
      description,
      category,
      image,
      price,
    };
    dispatch(addToBasket(product));
  };

  const RemoveItemFromBasket = () => {
    dispatch(removeFromBasket({ id }));
  };

  return (
    <div className="grid grid-cols-5 space-x-2 p-3">
      <Image
        src={image}
        alt={title}
        height={200}
        width={200}
        objectFit="contain"
      />
      <div className="col-span-3">
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
      </div>
      <div className="flex flex-col space-y-1 justify-center">
        <button className="button" onClick={addItemToBasket}>
          Add to basket
        </button>
        <button className="button" onClick={RemoveItemFromBasket}>
          Remove from basket
        </button>
      </div>
    </div>
  );
}

export default CheckoutProduct;
