import React from "react";
import { BsFillBagCheckFill } from "react-icons/bs";
import { BsFillBookmarkCheckFill } from "react-icons/bs";

const pricingData = [
  {
    id: 1,
    icon: <BsFillBagCheckFill className="w-5 h-5" />,
    desc: "Get started free on unlocking your productivity by saving time looking for 3rd party libraries.",
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
    desc: "Gain access to unlimited 3rd party libraries and get on speed with your development process to meet customer needs",
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
    desc: "Get your team on speed by providing them with a wide range of libraries to choose from to help them ship faster.",
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
    <div
      className="w-full py-10 md:py-20 mt-10 md:mt-20 px-4 md:px-6 xl:px-36"
      id="pricing"
    >
      <div className="flex flex-col w-full justify-center items-center gap-4">
        <div className="space-y-2 text-center">
          <div className="inline-block rounded-lg bg-gray-100 px-3 py-1 text-sm dark:bg-gray-800">
            Plans that scale
          </div>
          <div className="space-y-2">
            <h2 className="text-2xl md:text-3xl lg:text-4xl font-bold tracking-tight">
              Pick the perfect plan
            </h2>
            <p className="max-w-full lg:max-w-[700px] text-gray-500 md:text-base lg:text-lg xl:text-xl dark:text-gray-400">
              Start free! Then choose the right plan for you or your team.
            </p>
          </div>
        </div>
        <div className="grid sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 md:gap-6">
          {pricingData.map((price) => (
            <div
              key={price.id}
              className={`flex flex-col rounded-md shadow-2xl p-6 w-94 bg-boxdark ${
                price.id === 2 ? "border-2 border-teal" : ""
              }`}
            >
              <div className="flex items-center justify-between">
                <div className="flex items-center gap-2">
                  {price.icon}
                  <h3 className="text-lg font-bold">{price.package}</h3>
                </div>
                {price.id === 2 && (
                  <p className="items-center font-semibold bg-teal p-1 w-24 sm:w-32 justify-center flex rounded-full">
                    Popular
                  </p>
                )}
              </div>
              <p className="mt-4">{price.desc}</p>
              <hr className="w-full border my-6" />

              <div className="flex flex-col">
                <h1 className="text-4xl md:text-5xl font-extrabold leading-10">
                  {price.value}
                </h1>
                <p className="mt-2 md:mt-3">{price.priceTag}</p>
              </div>
              <h6 className="font-bold leading-6 mt-5">Whats Included</h6>
              {price.priceFeatures.map((item, index) => (
                <p
                  key={index}
                  className="flex items-center w-full py-1 text-sm text-gray-500 dark:text-gray-400"
                >
                  <i className="flex items-center justify-center p-2 border border-body rounded-full mr-3">
                    {price.listIcon}
                  </i>
                  {item}
                </p>
              ))}
              <button className="p-3 mt-6 bg-teal rounded-md outline-none">
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
