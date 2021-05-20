import React from "react";
import Image from "next/image";
import {
  MenuIcon,
  SearchIcon,
  ShoppingCartIcon,
} from "@heroicons/react/outline";

function Header({ categories }) {
  return (
    <header>
      {/* Top Container */}
      <div className="flex items-center bg-amazon_blue p-1 flex-grow py-2">
        <div className="mt-2 flex flex-grow sm:flex-grow-0">
          <Image
            src="https://links.papareact.com/f90"
            width={150}
            height={40}
            objectFit="contain"
            className="cursor-pointer"
          />
        </div>
        <div className="hidden sm:flex flex-grow items-center h-10 rounded-md bg-yellow-400 hover:bg-yellow-500 cursor-pointer">
          <input
            type="text"
            className="p-2 h-full w-6 flex-grow flex-shrink rounded-l-md focus:outline-none px-4"
          />
          <SearchIcon className="h-12 p-4" />
        </div>
        {/* Right Div */}
        <div className="text-white flex items-center space-x-6 mx-6 whitespace-nowrap">
          <div className="link">
            <p>Hello Bishal Shrestha,</p>
            <p className="font-extrabold md:text-sm">Account & List</p>
          </div>
          <div className="link">
            <p>Returns</p>
            <p className="font-extrabold md:text-sm">& Orders</p>
          </div>
          <div className="link relative flex items-center">
            <div
              className="text-sm absolute -top-1 -right-3 md:right-10 p-1 rounded-full w-8
             bg-yellow-400 text-center text-black font-bold"
            >
              0
            </div>
            <p>
              <ShoppingCartIcon className="h-12" />
            </p>
            <p className="font-extrabold md:text-sm hidden md:inline">Basket</p>
          </div>
        </div>
      </div>
      {/* Bottom Container */}
      <div className="flex items-center bg-amazon_blue-light text-white text-sm space-x-3 p-2 pl-6">
        <p className="link flex items-center">
          <MenuIcon className="h-6 mr-1" />
          All
        </p>
        <p className="link">Prime Video</p>
        <p className="link">Amazon Business</p>
        <p className="link">Today's Deals</p>
        {categories.map((category, i) => (
          <p key={i} className="link hidden lg:inline-flex capitalize">
            {category}
          </p>
        ))}
        <p className="link hidden lg:inline-flex">Prime</p>
        <p className="link hidden lg:inline-flex">Buy Again</p>
        <p className="link hidden lg:inline-flex">Health & Personal Care</p>
      </div>
    </header>
  );
}

export default Header;
