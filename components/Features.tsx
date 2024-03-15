import React from "react";
import { LuLibrary, LuCombine, LuMerge, LuHelpingHand } from "react-icons/lu";
import { IoSearch } from "react-icons/io5";
import { MdManageHistory } from "react-icons/md";

const features = [
  {
    id: 1,
    icon: <LuLibrary size={25} />,
    heading: "Library Access",
    desc: "Easily integrate third-party libraries into your projects.",
  },
  {
    id: 1,
    icon: <LuMerge size={25} />,
    heading: "Seamless Integration",
    desc: "Integrate third-party solutions with ease into your projects.",
  },
  {
    id: 1,
    icon: <IoSearch size={25} />,
    heading: "Search Capabilities",
    desc: "Effortlessly find the right libraries and modules for your needs.",
  },
  {
    id: 1,
    icon: <MdManageHistory size={25} />,
    heading: "Module Management",
    desc: "Manage and organize modules seamlessly for your applications.",
  },
  {
    id: 1,
    icon: <LuCombine size={25} />,
    heading: "Collaboration",
    desc: "Share your library collection with team members.",
  },
  {
    id: 1,
    icon: <LuHelpingHand size={25} />,
    heading: "Support & Updates",
    desc: "Receive timely support and updates for your integrated libraries.",
  },
];

const Features = () => {
  return (
    <section className="w-full py-30 mt-20" id="features">
      <div className="flex flex-col items-center justify-center space-y-4 px-4 md:px-6">
        <div className="space-y-2 text-center flex flex-col justify-center">
          <h2 className="text-3xl font-semibold tracking-tighter sm:text-4xl">
            A Productivity Tool Made for Developers!
          </h2>
          <p className="max-w-[700px] m-auto text-gray-500 md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed dark:text-gray-400">
            The platform provides libraries you need to build, deploy, and scale
            your applications.
          </p>
        </div>
        <div className="m-auto mt-20 grid max-w-sm items-start gap-6 sm:max-w-4xl sm:grid-cols-2 md:gap-12 lg:max-w-5xl lg:grid-cols-3">
          {features.map((feature) => (
            <div
              key={feature.id}
              className="flex flex-col items-center text-center space-y-2 rounded-md shadow-2xl p-5 bg-boxdark"
            >
              <i className="rounded-full bg-teal w-12 h-12 p-3 flex justify-center items-center">
                {feature.icon}
              </i>
              <h3 className="text-xl font-bold">{feature.heading}</h3>
              <p className="text-sm text-gray-500 dark:text-gray-400">
                {feature.desc}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Features;
