import React from "react";
import Link from "next/link";
import Image from "next/image";

const Header = () => {
  return (
    <div className="py-10 px-36 flex w-full">
      <div className="w-full flex justify-between items-center">
        <div>
          <Link className="flex items-center space-x-2" href="/">
            <Image src="logo1.svg" alt="logo" width="200" height="200" />
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
            className="w-40 bg-teal p-3 rounded-md outline-none"
          >
            Try for Free
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Header;
