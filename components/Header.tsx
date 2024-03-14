"use client";
import React, { useEffect, useState } from "react";
import Link from "next/link";
import Image from "next/image";

const Header = () => {
  const [scrollY, setScrollY] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      setScrollY(window.scrollY);
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);
  const isScrolled = scrollY > 0;
  return (
    <div
      className={`fixed top-0 left-0 w-full px-50 py-3 z-50 ${
        isScrolled ? "bg-boxdark shadow-md transition-all duration-300" : ""
      }`}
    >
      <div className="w-full flex justify-between items-center">
        <div className="flex justify-start w-1/4 items-center">
          <Link className="flex items-center space-x-2" href="/">
            <Image
              src="/logo1.png"
              alt="logo"
              width="200"
              height="200"
              className="w-50"
            />
          </Link>
        </div>
        {/* px-50 flex w-full py-5 fixed inset-x-0 top-0 shadow-sm translate-y-[scroll] transition-transform */}
        <div className="md:flex w-1/4 flex justify-center items-center">
          <nav className="flex items-center space-x-2">
            <Link className="text-normal" href="#features">
              Features
            </Link>
            <Link className="text-normal" href="#pricing">
              Pricing
            </Link>
            <Link className="text-normal" href="#contact">
              Contact
            </Link>
          </nav>
        </div>
        <div className="w-1/4 flex justify-end items-center">
          <Link
            href={"/auth/signin"}
            className="flex justify-center items-center w-36 bg-teal p-3 rounded-md outline-none"
          >
            Try for Free
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Header;
