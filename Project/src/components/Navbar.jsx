"use client";

import { useState } from "react";
import * as Icon from "react-bootstrap-icons";
import { Link } from "react-router-dom";


const Navbar = () => {
  const [isClick, setIsClick] = useState(false);

  const toggleNavbar = () => {
    setIsClick(!isClick);
  };

  return (
    <nav className="bg-white border-b sticky top-0 z-[9999999999]">
      <div className="w-full h-[30px] bg-gray-200"></div>
      <div className="max-w-7xl m-auto   sm:px-6 lg:px-6">
        <div className="flex items-center justify-between max-md:px-[40px] px-[120px] max-lg:h-[70px]  h-[90px]">
          <div className="flex justify-center">
            <div className="flex-shrink-0">
              <Link href="/">
                <img src="/111.png" width={120} alt="" />
              </Link>
            </div>
          </div>

          <div className="hidden lg:flex items-center  space-x-3 text-black/80">
            <Link
              to={"/"}
              className="border-b-[3px] transition-all duration-700 text-[16px] tracking-tight font-semibold border-transparent hover:border-black active:border-black px-3 py-2"
            >
              Home
            </Link>
            <Link
              to={"/service"}
              className="border-b-[3px] transition-all duration-700 text-[16px] tracking-tight font-semibold border-transparent hover:border-black px-3 py-2"
            >
              Services
            </Link>
            <Link
              to={"/about"}
              className="border-b-[3px] transition-all duration-700 text-[16px] tracking-tight font-semibold border-transparent hover:border-black px-3 py-2"
            >
              About Us
            </Link>
            <Link
              to={"/contact"}
              className="border-b-[3px] transition-all duration-700 text-[16px] tracking-tight font-semibold border-transparent hover:border-black px-3 py-2"
            >
              Contact Us
            </Link>
            <Link
              to={"/order-now"}
              className="border-b-[3px] transition-all  items-end duration-700 text-[16px] tracking-tight font-semibold border-transparent hover:border-black px-3 py-2"
            >
              Order Now
            </Link>
          </div>

          <div className="lg:hidden  flex items-center">
            {isClick ? (
              <button className="" onClick={toggleNavbar}>
                <Icon.XLg color="black" size={25} />
              </button>
            ) : (
              <button onClick={toggleNavbar}>
                <Icon.List color="black" size={25} />
              </button>
            )}
          </div>
        </div>
      </div>

      <div
        className={`lg:hidden transition-all duration-300 ease-out overflow-hidden ${isClick ? "max-h-60 opacity-100" : "max-h-0 opacity-0"
          }`}
      >
        <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
          <Link
            to={"/"}
            className="border-b-[3px] block transition-all duration-300 tracking-tight font-semibold border-transparent hover:bg-[#33373d] hover:text-white px-3 py-2"
          >
            Home
          </Link>
          <Link
            to={"/service"}
            className="border-b-[3px] block transition-all duration-300 tracking-tight font-semibold border-transparent hover:bg-[#33373d] hover:text-white px-3 py-2"
          >
            Service
          </Link>
          <Link
            to={"/about"}
            className="border-b-[3px] block transition-all duration-300 tracking-tight font-semibold border-transparent hover:bg-[#33373d] hover:text-white px-3 py-2"
          >
            Abous Us
          </Link>
          <Link
            to={"/contact"}
            className="border-b-[3px] block transition-all duration-300 tracking-tight font-semibold border-transparent hover:bg-[#33373d] hover:text-white px-3 py-2"
          >
            Contact us
          </Link>

          <Link
            to={"/order-now"}
            className="border-b-[3px] block transition-all duration-300 tracking-tight font-semibold border-transparent hover:bg-[#33373d] hover:text-white px-3 py-2"
          >
            Order Now
          </Link>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
