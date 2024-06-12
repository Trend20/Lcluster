import React from "react";
import { LuLibrary, LuCombine, LuMerge, LuHelpingHand } from "react-icons/lu";
import { IoSearch } from "react-icons/io5";
import { MdManageHistory } from "react-icons/md";
import Heading from "@/components/common/Heading";
import SingleFeature from "@/components/SingleFeature";

const features = [
  {
    id: 1,
    icon: <LuLibrary size={25} />,
    heading: "Library Access",
    desc: "Easily integrate third-party libraries into your projects.",
  },
  {
    id: 2,
    icon: <LuMerge size={25} />,
    heading: "Seamless Integration",
    desc: "Integrate third-party solutions with ease into your projects.",
  },
  {
    id: 3,
    icon: <IoSearch size={25} />,
    heading: "Search Capabilities",
    desc: "Effortlessly find the right libraries and modules for your needs.",
  },
  {
    id: 4,
    icon: <MdManageHistory size={25} />,
    heading: "Module Management",
    desc: "Manage and organize modules seamlessly for your applications.",
  },
  {
    id: 5,
    icon: <LuCombine size={25} />,
    heading: "Collaboration",
    desc: "Share your library collection with team members.",
  },
  {
    id: 6,
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
          <Heading headingText={' A Productivity Tool Made for Developers!'} />
          <p className="max-w-[700px] m-auto text-gray-500 md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed dark:text-gray-400">
            The platform provides libraries you need to build, deploy, and scale
            your applications.
          </p>
        </div>
        <div className="m-auto mt-20 grid max-w-sm items-start gap-6 sm:max-w-4xl sm:grid-cols-2 md:gap-12 lg:max-w-5xl lg:grid-cols-3">
          {features.map((feature) => (
            <SingleFeature feature={feature} key={feature.id} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Features;
