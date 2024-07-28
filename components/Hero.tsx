"use client"
import Link from "next/link";
import React from "react";
import {useSession} from "next-auth/react";

const Hero = () => {
  const {data:session} = useSession();
  return (
    <section className="w-full py-10 md:py-20 mt-30 md:mt-40 flex flex-1 flex-col items-center">
      <div className="flex flex-col gap-4 px-4 md:gap-6 md:px-8">
        <div className="flex flex-col items-center gap-4 text-center">
          <div className="text-center flex flex-col justify-center items-center">
            <h1
              className="text-3xl md:text-5xl font-extrabold capitalize w-full md:w-[880px]"
              style={{ lineHeight: "1.3" }}
            >
              Access Javascript <span className="text-teal">third-party</span> libraries{" "}
              <span className="text-teal">effortlessly</span>.
            </h1>
            <p className="mx-auto leading-6 items-center max-w-full md:max-w-[600px] py-4 md:py-8 text-center text-gray-600 dark:text-gray-400 md:text-lg">
              Gain access to unlimited libraries and resources to help you ship
              your products faster. Focus on Implementation as we gather the
              resources for you.
            </p>
          </div>
         <div className='flex space-x-3'>
           <Link
               className="inline-flex items-center justify-center rounded-md bg-teal px-4 py-3 text-sm md:text-base font-medium shadow-sm transition-colors hover:bg-gray-100 hover:text-gray-900 focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-gray-950 disabled:pointer-events-none disabled:opacity-50 dark:border-gray-800 dark:border-gray-800 dark:bg-gray-950 dark:hover:bg-gray-800 dark:hover:text-gray-50 dark:focus-visible:ring-gray-300"
               href={session ? '/libraries' : '/auth/signin'}>
             View Libraries
           </Link>
           <Link
               className="inline-flex items-center justify-center rounded-md border-teal border px-4 py-3 text-sm md:text-base font-medium shadow-sm transition-colors hover:bg-gray-100 hover:text-gray-900 focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-gray-950 disabled:pointer-events-none disabled:opacity-50 dark:border-gray-800 dark:border-gray-800 dark:bg-gray-950 dark:hover:bg-gray-800 dark:hover:text-gray-50 dark:focus-visible:ring-gray-300"
               href={session ? '/recommend' : '/auth/signin'}>
             Recommend
           </Link>
         </div>
        </div>
      </div>
    </section>
  );
}

export default Hero;
