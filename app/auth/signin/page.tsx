"use client";

import { signIn, useSession } from "next-auth/react";
import Link from "next/link";
import { redirect } from "next/navigation";
import React from "react";
import { FaGithub } from "react-icons/fa6";
import { FcGoogle } from "react-icons/fc";
import { HiOutlineArrowLongRight } from "react-icons/hi2";

const Signin = () => {
  const session = useSession();

  console.log("Session: ", session);

  if (session) {
    return redirect("/profile");
  } else {
    console.log("not found");
  }
  return (
    <div className="mt-30 flex flex-col w-full justify-center items-center lg:col-span-2">
      <div className="w-1/4 justify-center items-center flex flex-col">
        <button className="w-full border mt-5 p-3 rounded-lg flex justify-center items-center">
          <i className="mr-8">
            <FcGoogle size={25} />
          </i>
          Sign in with Google
        </button>
        <button className="w-full border mt-5 p-3 rounded-lg flex justify-center items-center">
          <i className="mr-8">
            <FaGithub size={25} />
          </i>
          Sign in with GitHub
        </button>
      </div>
      <div className="flex items-center w-1/4 my-10">
        <hr className="border w-1/2" />
        OR
        <hr className="border w-1/2" />
      </div>
      <div className="w-1/4">
        <form>
          <div className="flex flex-col">
            <label htmlFor="email" className="text-lg">
              Email
              <span className="ml-2 text-meta-1">*</span>
            </label>
            <input
              id="email"
              className="w-full border mt-3 bg-transparent p-3 rounded-lg flex justify-center items-center focus:border focus:border-teal"
              placeholder="Enter your email"
              required
              type="email"
            />
          </div>
          <button
            className="w-full mt-10 bg-teal p-3 rounded-lg flex justify-center items-center"
            type="submit"
          >
            Send magic link
          </button>
        </form>
      </div>
      <p className="mt-8 text-lg flex items-center">
        Don&#39;t have an account yet?
        <Link href="/auth/signup" className="ml-3 flex items-center text-teal">
          Sign Up{" "}
          <i className="flex ml-3">
            <HiOutlineArrowLongRight />
          </i>
        </Link>
      </p>
    </div>
  );
};

export default Signin;
