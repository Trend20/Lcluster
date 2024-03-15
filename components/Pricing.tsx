import React from "react";
import { BsFillBagCheckFill } from "react-icons/bs";
import { BsFillBookmarkCheckFill } from "react-icons/bs";

const pricingData = [
  {
    id: 1,
    icon: <BsFillBagCheckFill className="w-5 h-5" />,
    package: "Free",
    value: "$0",
    priceTag: "Free forever",
    listIcon: <BsFillBookmarkCheckFill fill="#4ccd99" />,
    buttonText: "Get Started",
    priceFeatures: [
      " Start with the essentials",
      " Start with the essentials",
      " Start with the essentials",
    ],
  },
  {
    id: 2,
    icon: <BsFillBagCheckFill className="w-5 h-5" />,
    package: "Pro",
    value: "$5",
    priceTag: "Billed Yearly",
    listIcon: <BsFillBookmarkCheckFill fill="#4ccd99" />,
    buttonText: "Subscribe",
    priceFeatures: [
      " Start with the essentials",
      " Start with the essentials",
      " Start with the essentials",
    ],
  },
  {
    id: 3,
    icon: <BsFillBagCheckFill className="w-5 h-5" />,
    package: "Team",
    value: "$20",
    priceTag: "Billed Yearly",
    listIcon: <BsFillBookmarkCheckFill fill="#4ccd99" />,
    buttonText: "Subscribe",
    priceFeatures: [
      " Start with the essentials",
      " Start with the essentials",
      " Start with the essentials",
    ],
  },
];
const Pricing = () => {
  return (
    <div className="w-full py-30 mt-20 px-36" id="pricing">
      <div className="flex flex-col w-full justify-center items-center gap-8 px-4 md:px-6">
        <div className="space-y-2 text-center">
          <div className="inline-block rounded-lg bg-gray-100 px-3 py-1 text-sm dark:bg-gray-800">
            Plans that scale
          </div>
          <div className="space-y-2">
            <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl">
              Pick the perfect plan
            </h2>
            <p className="max-w-[700px] text-gray-500 md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed dark:text-gray-400">
              Start free! Then choose the right plan for you or your team.
            </p>
          </div>
        </div>
        <div className="grid w-3/4 sm:grid-cols-2 lg:grid-cols-3">
          {pricingData.map((price) => (
            <div
              key={price.id}
              className={`flex flex-col w-[360px] rounded-md shadow-2xl p-5 bg-boxdark ${
                price.id === 2 ? "border-2 border-teal" : ""
              }`}
            >
              <div className="flex items-center gap-2">
                {price.icon}
                <h3 className="text-lg font-bold">{price.package}</h3>
              </div>
              <hr className="w-full border my-8" />

              <div className="flex flex-col">
                <h1 className="text-5xl font-extrabold leading-10">
                  {price.value}
                </h1>
                <p className="mt-3">{price.priceTag}</p>
              </div>
              <h6 className="font-bold leading-10 mt-5">Whats Included</h6>
              {price.priceFeatures.map((item, index) => (
                <p
                  key={index}
                  className="flex items-center w-full py-2 text-sm text-gray-500 dark:text-gray-400"
                >
                  <i className="flex p-2 justify-center border border-body rounded-full mr-5">
                    {price.listIcon}
                  </i>
                  {item}
                </p>
              ))}
              <button className="p-3 mt-8 bg-teal rounded-md outline-none">
                {price.buttonText}
              </button>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Pricing;
