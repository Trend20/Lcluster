"use client";
import React, { useEffect, useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { HeaderLinks } from "@/types/header";
import { useSession, signOut } from "next-auth/react";
import { TbLogout } from "react-icons/tb";

const headerData: HeaderLinks[] = [
  {
    id: 1,
    url: "#features",
    name: "features",
  },
  {
    id: 2,
    url: "#pricing",
    name: "pricing",
  },
  {
    id: 3,
    url: "/libraries/javascript",
    name: "libraries",
  },
  {
    id: 4,
    url: "/profile",
    name: "collection",
  },
  {
    id: 5,
    url: "#contact",
    name: "contact us",
  },
];

const Header = () => {
  const [scrollY, setScrollY] = useState(0);
  const [showDiv, setShowDiv] = useState<boolean>(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrollY(window.scrollY);
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  const { data: session } = useSession();
  console.log(session);

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
        <div className="flex-grow md:flex-grow-0 flex-shrink-0">
          <nav className="hidden md:flex items-center space-x-6">
            {headerData.map((item: any) => (
              <Link
                key={item.id}
                className="text-normal capitalize font-medium"
                href={item.url}
              >
                {item.name}
              </Link>
            ))}
          </nav>
        </div>
        <div className="flex justify-end items-center flex-shrink-0">
          {!session ? (
            <Link
              href={"/auth/signin"}
              className="hidden md:flex justify-center items-center font-medium bg-teal p-3 rounded-md outline-none"
            >
              Try for Free
            </Link>
          ) : (
            <button
              onClick={() => signOut({ redirect: true })}
              className="hidden md:flex items-center p-3 border rounded"
            >
              <i className="mr-3">
                <TbLogout size={25} />
              </i>
              Logout
            </button>
          )}
        </div>
      </div>
    </div>
  );
};

export default Header;
