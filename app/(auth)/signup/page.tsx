"use client";
import Link from "next/link";
import React from "react";
import { FaGithub } from "react-icons/fa6";
import { FcGoogle } from "react-icons/fc";
import { HiOutlineArrowLongRight } from "react-icons/hi2";
import Image from "next/image";
import { signIn } from "next-auth/react";

const Signup = () => {
  return (
    <div className="mt-20 md:mt-20 py-10 px-5 md:py-20 flex flex-col w-full justify-center items-center">
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
      <div className="w-full md:w-1/4 justify-center items-center flex flex-col">
        <button
          onClick={() => signIn("google")}
          className="w-full border mt-5 p-3 rounded-lg flex justify-center items-center"
        >
          <i className="mr-2">
            <FcGoogle size={20} />
          </i>
          <span className="text-base md:text-lg">Sign up with Google</span>
        </button>
        <button
          onClick={() => signIn("github")}
          className="w-full border mt-5 p-3 rounded-lg flex justify-center items-center"
        >
          <i className="mr-2">
            <FaGithub size={20} />
          </i>
          <span className="text-base md:text-lg">Sign up with GitHub</span>
        </button>
      </div>
      <p className="mt-6 md:mt-8 text-base md:text-lg flex items-center">
        Already have an account?
        <Link
          href="/signin"
          className="ml-2 md:ml-3 flex items-center text-teal"
        >
          Sign In{" "}
          <i className="flex ml-2 md:ml-3">
            <HiOutlineArrowLongRight />
          </i>
        </Link>
      </p>
    </div>
  );
};

export default Signup;
