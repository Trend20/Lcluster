import { brands } from "@/data/brands";
import React from "react";
import Brand from "@/components/Brand";
import FeaturedCompanySlider from "@/components/sliders/FeaturedCompanySlider";

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
          <FeaturedCompanySlider>
            {brands.map((item) => (
              <Brand item={item} key={item.id} />
            ))}
          </FeaturedCompanySlider>
        </div>
      </div>
    </section>
  );
};

export default Spotlight;
