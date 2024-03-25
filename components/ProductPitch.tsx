import React from "react";
import { MdAccessTime } from "react-icons/md";
import { LuFileCode } from "react-icons/lu";
import { GoShare } from "react-icons/go";
import { CgInsights } from "react-icons/cg";

const productDetails = [
  {
    id: 1,
    icon: <MdAccessTime size={25} />,
    title: "Time-saving Efficiency",
    description:
      "Our application streamlines the process of finding and integrating third-party libraries, saving developers valuable time.",
  },
  {
    id: 2,
    icon: <LuFileCode size={25} />,
    title: "Enhanced Code Quality",
    description:
      "Our platform ensures that teams can maintain high code quality standards by minimizing the risk of using outdated or unsupported dependencies.",
  },
  {
    id: 3,
    icon: <GoShare size={25} />,
    title: "Collaboration and Knowledge Sharing",
    description:
      "Our application fosters collaboration and knowledge sharing within development teams by enabling developers to share their experiences and insights about specific libraries.",
  },
  {
    id: 4,
    icon: <CgInsights size={25} />,
    title: "Reliable Library Insights",
    description:
      "Our platform provides developers with reliable insights into the quality and reliability of third-party libraries that align with their requirements.",
  },
];

const ProductPitch = () => {
  return (
    <section className="w-full justify-center items-center flex mt-8 py-8 md:py-12 lg:py-16 xl:py-20 px-4 md:px-6 xl:px-36">
      <div className="w-full justify-center flex flex-col items-center gap-4">
        <div className="text-center">
          <h1 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-semibold tracking-tight">
            Say Goodbye to Time Wasting.
          </h1>
          <p className="mx-auto max-w-full lg:max-w-[600px] text-gray-500 md:text-base lg:text-lg dark:text-gray-400 mt-4 md:mt-6">
            Discover, integrate, and innovate with the best third-party
            libraries.
          </p>
        </div>
        <div className="flex justify-center items-center w-full md:w-3/4 mt-8 md:mt-10">
          <div className="grid gap-6 lg:grid-cols-2 w-full">
            {productDetails.map((info: any) => (
              <div
                key={info.id}
                className="flex flex-col space-y-2 shadow-2xl p-6 lg:p-8 bg-boxdark rounded-lg"
              >
                <i className="rounded-full bg-teal w-10 h-10 p-2 flex justify-center items-center">
                  {info.icon}
                </i>
                <h2 className="text-lg font-semibold">{info.title}</h2>
                <p className="text-gray-500 dark:text-gray-400 text-sm lg:text-base">
                  {info.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default ProductPitch;
