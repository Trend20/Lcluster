import Link from "next/link";
import React from "react";

const Hero = () => {
  return (
    <section className="w-full py-20 flex flex-1 flex-col items-center">
      <div className="container flex flex-col gap-2 px-4 md:gap-4 md:px-6">
        <div className="flex flex-col items-center gap-2 text-center justify-center m-auto">
          <div className="space-y-2 text-center flex flex-col justify-center items-center">
            <h1 className="text-3xl font-bold capitalize w-[880px] leading-10 sm:text-4xl lg:text-5xl/none">
              The Fastest way to get your project up and running.
            </h1>
            <p className="mx-auto leading-3 items-center max-w-[600px] py-8 text-center text-gray-500 md:text-xl dark:text-gray-400">
              CodeCrony gives you access to unlimited libraries and resources to
              help you ship your product faster. You dont have to browse the
              internet looking for third-party libraries because we have it all
              here.
            </p>
          </div>
          <Link
            className="inline-flex w-36 items-center justify-center rounded-md border border-gray-200 border-gray-200 bg-teal px-4 py-3 text-sm font-medium shadow-sm transition-colors hover:bg-gray-100 hover:text-gray-900 focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-gray-950 disabled:pointer-events-none disabled:opacity-50 dark:border-gray-800 dark:border-gray-800 dark:bg-gray-950 dark:hover:bg-gray-800 dark:hover:text-gray-50 dark:focus-visible:ring-gray-300"
            href="/login"
          >
            Get Started
          </Link>
        </div>
      </div>
    </section>
  );
};

export default Hero;
