import React from "react";
import { BsFillBagCheckFill } from "react-icons/bs";
import { BsFillBookmarkCheckFill } from "react-icons/bs";
import Heading from "@/components/common/Heading";

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
      " Limited access to basic libraries.",
      " Limited monthly searches or downloads",
      " Community Support",
    ],
  },
  {
    id: 2,
    icon: <BsFillBagCheckFill className="w-5 h-5" />,
    package: "Pro",
    desc: "Gain access to unlimited 3rd party libraries and get on speed with your development process.",
    value: "$5",
    priceTag: "Monthly",
    listIcon: <BsFillBookmarkCheckFill fill="#4ccd99" />,
    buttonText: "Subscribe",
    priceFeatures: [
      " Unlimited access to libraries.",
      " Unlimited monthly searches.",
      " 5 Collections",
    ],
  },
  {
    id: 3,
    icon: <BsFillBagCheckFill className="w-5 h-5" />,
    package: "Team",
    desc: "Get your team on speed by providing them with a wide range of libraries to choose from to help them ship faster.",
    value: "$20",
    priceTag: "Monthly",
    listIcon: <BsFillBookmarkCheckFill fill="#4ccd99" />,
    buttonText: "Subscribe",
    priceFeatures: [
      " Unlimited Collections",
      " Access to all libraries",
      " Access to Library Insights",
    ],
  },
];
const Pricing = () => {
  return (
    <div
      className="w-full py-6 md:py-10 mt-6 md:mt-12 px-4 md:px-6 xl:px-36"
      id="pricing"
    >
      <div className="flex flex-col w-full justify-center items-center gap-4">
        <div className="space-y-2 text-center">
          <div className="inline-block rounded-lg bg-gray-100 px-3 py-1 text-sm dark:bg-gray-800">
            Plans that scale
          </div>
          <div className="space-y-2">
            <Heading headingText={'Pick the perfect plan'} />
            <p className="max-w-full lg:max-w-[700px] text-sm md:text-base lg:text-lg xl:text-xl text-gray-500 dark:text-gray-400">
              Start free! Then choose the right plan for you or your team.
            </p>
          </div>
        </div>
        <div className="grid lg:w-3/4 grid-cols-1 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-3 gap-4 md:gap-6">
          {pricingData.map((price) => (
            <div
              key={price.id}
              className={`flex flex-col rounded-md shadow-2xl p-6 sm:w-full bg-boxdark ${
                price.id === 2 ? "border-2 border-teal" : ""
              }`}
            >
              <div className="flex items-center justify-between py-3">
                <div className="flex items-center gap-2">
                  {price.icon}
                  <h3 className="text-base md:text-lg lg:text-xl font-bold">
                    {price.package}
                  </h3>
                </div>
                {price.id === 2 && (
                  <p className="items-center font-semibold bg-teal p-1 w-24 sm:w-32 justify-center flex rounded-full">
                    Popular
                  </p>
                )}
              </div>
              <p className="mt-6 text-sm md:text-base lg:text-lg">
                {price.desc}
              </p>
              <hr className="w-full border my-4" />

              <div className="flex flex-col">
                <h1 className="text-2xl md:text-3xl lg:text-4xl font-extrabold leading-10">
                  {price.value}
                </h1>
                <p className="mt-2 md:mt-3">{price.priceTag}</p>
              </div>
              <h6 className="font-bold leading-6 mt-4">Whats Included</h6>
              {price.priceFeatures.map((item, index) => (
                <p
                  key={index}
                  className="flex items-center w-full py-1 text-xs md:text-sm text-gray-500 dark:text-gray-400"
                >
                  <i className="flex items-center justify-center p-2 border border-body rounded-full mr-3">
                    {price.listIcon}
                  </i>
                  {item}
                </p>
              ))}
              <button
                className={`p-3 mt-4 rounded-md outline-none ${
                  price.id === 2
                    ? "bg-teal border-0"
                    : "bg-transparent border-2 border-teal"
                }`}
              >
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
