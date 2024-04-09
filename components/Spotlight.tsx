import { brands } from "@/data/brands";
import Image from "next/image";
import React from "react";

const Spotlight = () => {
  return (
    <section className="w-full py-8 lg:py-5 px-4 md:px-6 xl:px-36 lg:mt-10 lg:w-1/2 rounded-br-lg">
      <div className="flex flex-col items-center">
        <div className="text-center">
          <p className="max-w-full lg:max-w-[700px] text-lg lg:text-normal text-gray-500 dark:text-gray-400">
            Trusted by developers from:
          </p>
        </div>
        <div className="flex items-center justify-center w-full mt-8">
          {brands.map((item) => (
            <div
              key={item.id}
              className="mx-auto flex w-full items-center justify-center"
            >
              <Image
                alt={item.name}
                className="aspect-[2/1] cursor-pointer overflow-hidden rounded-lg object-contain object-center"
                height="100"
                src={item.icon}
                width="100"
              />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Spotlight;
