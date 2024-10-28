"use client";
import React, { useEffect, useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { useSession, signOut } from "next-auth/react";
import { TbLogout } from "react-icons/tb";
import { AiOutlineClose, AiOutlineMenu } from "react-icons/ai";
import { usePathname } from "next/navigation";
import ThemeToggle from "./common/ThemeToggle";
import { headerData } from "@/data/header";

const Header = () => {
  const [scrollY, setScrollY] = useState(0);
  const [showNavLinks, setShowNavLinks] = useState(false);
  const pathname = usePathname();
  const isHomepage = pathname === "/";
  const { data: session } = useSession();

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
      className={`fixed top-0 left-0 w-full px-4 md:px-8 lg:px-36 py-5 z-50 ${
        isScrolled ? "bg-boxdark shadow-md transition-all duration-300" : ""
      }`}
    >
      <div className="w-full flex justify-between items-center">
        <div className="flex justify-start items-center flex-shrink-0">
          <Link className="flex items-center space-x-2" href="/">
            <Image
              src="/logo3.png"
              alt="logo"
              width="200"
              height="200"
              className="w-25 md:w-25"
            />
          </Link>
        </div>
        <div
          className={`lg:flex lg:w-3/4 lg:items-center lg:flex-row lg:border-0 lg:bg-transparent lg:relative lg:top-0 lg:justify-between lg:border-none ${
            showNavLinks
              ? "flex absolute border-2 px-3  flex-col rounded-md border-teal bg-meta-4  top-20 right-5"
              : "hidden"
          }`}
        >
          <nav
            className={`flex lg:w-3/4 lg:justify-center lg:bg-transparent w-full rounded-md items-start lg:items-center flex-col lg:flex-row space-y-4 md:space-y-0 md:space-x-6 md:border-none py-4 md:py-0`}
          >
            {headerData.map((item: any) => (
              <Link
                onClick={() => setShowNavLinks(false)}
                key={item.id}
                className={`text-normal capitalize font-medium`}
                href={isHomepage ? item.homepageUrl : item.authenticatedUrl}
              >
                {item.name}
              </Link>
            ))}
          </nav>
          <div className="flex lg:justify-end lg:w-1/4 py-1 items-center flex-shrink-0">
            {!session ? (
              <Link
                href={"/signin"}
                className="md:flex justify-center lg:items-center font-medium w-36 bg-teal p-3 rounded-md outline-none"
              >
                Try for Free
              </Link>
            ) : (
              <button
                onClick={() => signOut({ redirect: true })}
                className="flex items-center p-3 border rounded w-36"
              >
                <i className="mr-3">
                  <TbLogout size={25} />
                </i>
                Logout
              </button>
            )}
          </div>
        </div>
        <div className="lg:hidden">
          <button
            className="block md:hidden focus:outline-none"
            onClick={() => setShowNavLinks(!showNavLinks)}
          >
            {showNavLinks ? (
              <AiOutlineClose size={24} />
            ) : (
              <AiOutlineMenu size={24} />
            )}
          </button>
        </div>
      </div>
    </div>
  );
};

export default Header;
