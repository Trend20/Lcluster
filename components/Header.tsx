import React from "react";
import Link from "next/link";
import Image from "next/image";

const Header = () => {
  return (
    <div className="px-50 flex w-full py-5">
      <div className="w-full flex justify-between items-center">
        <div className="flex justify-start w-36">
          <Link className="flex items-center w-full space-x-2" href="/">
            <Image
              src="logo1.svg"
              alt="logo"
              width="100"
              height="100"
              className="w-32"
            />
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
            href={"/auth/signin"}
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
