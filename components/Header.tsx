"use client";
import React, { useEffect, useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { HeaderLinks } from "@/types/header";
import { useSession, signOut } from "next-auth/react";
import { redirect } from "next/navigation";
import { FaRegUser } from "react-icons/fa6";
import { LiaCaretDownSolid } from "react-icons/lia";
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
    url: "#contact",
    name: "contact",
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
  if (!session) {
    if (session) return redirect("/explore");
  }

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
        <div className="md:flex w-1/4 flex justify-center items-center">
          <nav className="flex items-center space-x-10">
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
        {!session ? (
          <div className="w-1/4 flex justify-end items-center">
            <Link
              href={"/auth/signin"}
              className="flex justify-center items-center w-36 bg-teal p-3 rounded-md outline-none"
            >
              Try for Free
            </Link>
          </div>
        ) : (
          <div className="flex cursor-pointer flex-col">
            <div
              className="flex items-center cursor-pointer"
              onClick={() => setShowDiv((prev) => !prev)}
            >
              {/* <Image
                src={session.user?.image}
                alt="Avatar"
                width="100"
                height="100"
                className="flex rounded-full w-10.5 h-10.5"
              /> */}
              <i className="px-3">
                <LiaCaretDownSolid />
              </i>
            </div>
            {showDiv ? (
              <div className="flex flex-col absolute bg-blue-gray-50 top-20 px-3 py-5 h-25.5 rounded-md items-start- justify-start">
                <Link
                  href="/profile"
                  prefetch={false}
                  className="flex items-center rounded-md p-1 hover:bg-meta-4 hover:text-whiten"
                >
                  <i className="mr-3">
                    <FaRegUser />
                  </i>
                  {session.user?.name}
                </Link>
                <button
                  onClick={() => signOut({ redirect: true })}
                  className="flex items-center p-1 rounded mt-5 hover:bg-meta-4 hover:text-whiten"
                >
                  <i className="mr-3">
                    <TbLogout />
                  </i>
                  Logout
                </button>
              </div>
            ) : (
              ""
            )}
          </div>
        )}
      </div>
    </div>
  );
};

export default Header;
