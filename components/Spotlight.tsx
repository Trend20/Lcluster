import React from "react";
import Link from "next/link";

const Spotlight = () => {
  return (
    <section className="w-full py-8 lg:py-5 px-4 md:px-6 xl:px-36 lg:mt-10 bg-boxdark lg:w-1/2 rounded-br-lg">
      <div className="flex flex-col items-center">
        <div className="text-center">
          <p className="max-w-full lg:max-w-[700px] text-xl font-bold lg:text-normal text-gray-500 dark:text-gray-400">
            The platform for rapid progress. Made by Developers, for Developers!
          </p>
        </div>
        <div className="flex items-center justify-center w-full mt-8">
          <Link
            className="inline-flex items-center w-full lg:w-40 justify-center rounded-md border-2 font-bold border-teal px-4 py-3 text-sm md:text-base shadow-sm transition-colors hover:bg-gray-100 hover:text-gray-900 focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-gray-950 disabled:pointer-events-none disabled:opacity-50 dark:border-gray-800 dark:border-gray-800 dark:bg-gray-950 dark:hover:bg-gray-800 dark:hover:text-gray-50 dark:focus-visible:ring-gray-300"
            href="/libraries/javascript"
          >
            Try Now
          </Link>
        </div>
      </div>
    </section>
  );
};

export default Spotlight;
