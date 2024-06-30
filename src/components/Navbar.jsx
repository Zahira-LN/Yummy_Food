import React, { useState } from "react";
import {
  AiOutlineMenu,
  AiOutlineSearch,
  AiOutlineClose,
  AiFillTag,
} from "react-icons/ai";
import { BsFillCartFill, BsPerson } from "react-icons/bs";
import { FaGoogleWallet, FaUserFriends } from "react-icons/fa";
import { MdHelp, MdOutlineFavorite } from "react-icons/md";
import { TbTruckReturn } from "react-icons/tb";

const Navbar = () => {
  const [sideNav, setSideNav] = useState(false);
  return (
    <div className="max-w-[1520px] mx-auto flex justify-between items-center p-4">
      <div className="flex items-center">
        <div className="cursor-pointer">
          <AiOutlineMenu size={25} onClick={() => setSideNav(!sideNav)} />
        </div>
        <h1 className="text-2xl sm:text-3xl lg:text-4xl px-2 font-bold">
          {" "}
          Yum <span>Eats</span>
        </h1>
        <div className="hidden lg:flex items-center bg-gray-200 rounded-full p-[2px]  px-2 text-14px">
          <p className="bg-orange-700 text-white rounded-full p-[3px] text-bold">
            Free
          </p>
          <p>Delivery</p>
        </div>
      </div>
      <div className="bg-gray-200 rounded-full flex items-center px-2 w-[200px] sm:w-[400px] lg:w-[500px]">
        <AiOutlineSearch size={25} />
        <input
          className="bg-transparent w-full p-2 rounded-full focus:outline-none"
          type="text"
          placeholder="Search Meals..."
        />
      </div>

      <button className="hidden  bg-orange-700 text-white md:flex items-center gap-1 rounded-full border-none">
        <BsFillCartFill />
        Cart
      </button>

      {sideNav && (
        <div className="w-full bg-black/60 fixed h-screen z-10 top-0 left-0"></div>
      )}
      <div
        className={
          sideNav
            ? "fixed top-0 left-0 w-[300px] bg-white h-screen duration-200 z-20"
            : "fixed top-0 left-[-100%] w-[300px] bg-white h-screen duration-200 z-20"
        }
      >
        <AiOutlineClose
          size={25}
          onClick={() => setSideNav(!sideNav)}
          className="absolute right-4 top-4 cursor-pointer "
        />

        <h2 className="text-2xl p-4 font-bold">
          Yum <span className="text-orange-700  font-bold">Eats</span>
        </h2>

        <nav>
          <ul className="flex flex-col p-4 text-gray-900">
            <li className="text-xl py-4 flex items-center">
              <BsPerson
                size={25}
                className="mr-4 text-white bg-black rounded-full"
              />
              My Account
            </li>
            <li className="text-xl py-4 flex items-center">
              <TbTruckReturn
                size={25}
                className="mr-4 text-white bg-black rounded-full"
              />
              Delivery
            </li>
            <li className="text-xl py-4 flex items-center">
              <MdOutlineFavorite
                size={25}
                className="mr-4 text-white bg-black rounded-full"
              />
              My Favourite
            </li>
            <li className="text-xl py-4 flex items-center">
              <FaGoogleWallet
                size={25}
                className="mr-4 text-white bg-black rounded-full"
              />
              My Wallet
            </li>
            <li className="text-xl py-4 flex items-center">
              <FaUserFriends
                size={25}
                className="mr-4 text-white bg-black rounded-full"
              />
              Users
            </li>
          </ul>
        </nav>
      </div>
    </div>
  );
};

export default Navbar;
