import React from "react";
import Image from "next/image";

const Spotlight = () => {
  return (
    <section className="w-full py-8 lg:py-12 px-4 md:px-6 xl:px-36">
      <div className="flex flex-col items-center">
        <div className="text-center">
          <p className="max-w-full lg:max-w-[700px] text-sm lg:text-normal text-gray-500 dark:text-gray-400">
            The platform for rapid progress. Trusted by engineers from:
          </p>
        </div>
        <div className="flex items-center justify-center w-full">
          <div>
            <Image src="logo1.svg" alt="logo" width="80" height="80" />
          </div>
          <div>
            <Image src="logo1.svg" alt="logo" width="80" height="80" />
          </div>
          <div>
            <Image src="logo1.svg" alt="logo" width="80" height="80" />
          </div>
          <div>
            <Image src="logo1.svg" alt="logo" width="80" height="80" />
          </div>
          <div>
            <Image src="logo1.svg" alt="logo" width="80" height="80" />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Spotlight;
