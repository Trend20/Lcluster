"use client";

import { signIn, useSession } from "next-auth/react";
import Link from "next/link";
import { redirect } from "next/navigation";
import React from "react";
import { FaGithub } from "react-icons/fa6";
import { FcGoogle } from "react-icons/fc";
import { HiOutlineArrowLongRight } from "react-icons/hi2";
import Image from "next/image";

const Signin = () => {
  const session = useSession();

  console.log("Session: ", session);

  if (session.status === "authenticated") {
    return redirect("/profile");
  } else {
    console.log("not authenticated");
  }
  return (
    <div className="flex flex-col w-full justify-center items-center mt-20 md:mt-20 px-5 py-10 md:py-20">
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
          <span className="text-base md:text-lg">Sign in with Google</span>
        </button>
        <button
          onClick={() => signIn("github")}
          className="w-full border mt-5 p-3 rounded-lg flex justify-center items-center"
        >
          <i className="mr-2">
            <FaGithub size={20} />
          </i>
          <span className="text-base md:text-lg">Sign in with GitHub</span>
        </button>
      </div>
      {/* <div className="flex items-center w-full md:w-1/4 my-6 md:my-10">
        <hr className="border w-1/3 md:w-1/2" />
        <span className="mx-4 md:mx-6 text-base md:text-lg">OR</span>
        <hr className="border w-1/3 md:w-1/2" />
      </div> */}
      {/* <div className="w-full md:w-1/4">
        <form>
          <div className="flex flex-col">
            <label htmlFor="email" className="text-base md:text-lg">
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
            className="w-full mt-6 bg-teal p-3 rounded-lg flex justify-center items-center text-base md:text-lg"
            type="submit"
          >
            Send magic link
          </button>
        </form>
      </div> */}
      <p className="mt-6 md:mt-8 text-base md:text-lg flex items-center">
        Don&#39;t have an account yet?
        <Link
          href="/auth/signup"
          className="ml-2 md:ml-3 flex items-center text-teal"
        >
          Sign Up{" "}
          <i className="flex ml-2 md:ml-3">
            <HiOutlineArrowLongRight />
          </i>
        </Link>
      </p>
    </div>
  );
};

export default Signin;
