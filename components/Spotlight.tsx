import React from "react";
import Image from "next/image";

const Spotlight = () => {
  return (
    <section className="w-full py-12 lg:py-16 px-36">
      <div className="flex flex-col items-center px-4 md:px-6">
        <div className="text-center">
          <p className="max-w-[700px] text-normal text-gray-500 dark:text-gray-400">
            The platform for rapid progress. Trusted by engineers from:
          </p>
        </div>
        <div className="flex items-center justify-center gap-8 flex-1">
          <div>
            <Image src="logo1.svg" alt="logo" width="100" height="100" />
          </div>
          <div>
            <Image src="logo1.svg" alt="logo" width="100" height="100" />
          </div>
          <div>
            <Image src="logo1.svg" alt="logo" width="100" height="100" />
          </div>
          <div>
            <Image src="logo1.svg" alt="logo" width="100" height="100" />
          </div>
          <div>
            <Image src="logo1.svg" alt="logo" width="100" height="100" />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Spotlight;
