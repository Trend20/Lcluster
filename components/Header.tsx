import React from "react";
import Link from "next/link";

const Header = () => {
  return (
    <div className="py-10 px-36 flex w-full">
      <div className="w-full flex justify-between items-center">
        <div>
          <Link className="flex items-center space-x-2" href="#">
            <span className="font-bold">CodeCrony</span>
          </Link>
        </div>
        <div className="hidden md:flex">
          <nav className="flex items-center space-x-2">
            <Link className="text-sm font-medium" href="#">
              Features
            </Link>
            <Link className="text-sm font-medium" href="#">
              Pricing
            </Link>
            <Link className="text-sm font-medium" href="#">
              Contact
            </Link>
          </nav>
        </div>
        <div>
          <Link
            href={"/login"}
            className=" bg-teal p-3 rounded-md outline-none"
          >
            Try for Free
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Header;
