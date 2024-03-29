import Link from "next/link";
import React from "react";
import { FaGithub } from "react-icons/fa6";
import { FaNpm } from "react-icons/fa";
import { CiGlobe } from "react-icons/ci";

const LibraryCard = ({ library }: any) => {
  return (
    <div
      className={`flex flex-col rounded-md shadow-2xl cursor-pointer bg-boxdark p-2 sm:p-3 md:p-3 lg:p-3`}
    >
      <div className="flex p-3 lg:flex-row lg:items-center justify-between w-full">
        <div className="flex flex-col lg:flex-row w-full lg:w-3/4 md:w-3/4">
          <h3 className="font-extrabold text-base lg:text-medium sm:text-lg md:text-xl flex border-none">
            {library.package.name}
          </h3>
        </div>
        <div className="flex w-1/2 justify-end space-x-2 lg:space-x-3 sm:space-x-3 items-center">
          {library.package.links.npm && (
            <Link href={library.package.links.npm} target="_blank">
              <FaNpm color="#4ccd99" size={20} />
            </Link>
          )}
          {library.package.links.repository && (
            <Link href={library.package.links.repository} target="_blank">
              <FaGithub color="#4ccd99" size={20} />
            </Link>
          )}
          {library.package.links.homepage && (
            <Link href={library.package.links.homepage} target="_blank">
              <CiGlobe color="#4ccd99" size={20} />
            </Link>
          )}
        </div>
      </div>
      <div className="flex items-center w-40 mt-5 ml-3 lg:ml-3 px-2 py-2 rounded-md bg-meta-4">
        <p className="text-xs sm:text-sm md:text-sm ml-2">
          Version {library.package.version}
        </p>
      </div>
      <div className="flex px-3 items-center mt-2">
        <p className="text-base sm:text-lg md:text-base lg:text-lg">
          {library.package.description}
        </p>
      </div>
      <div className="flex items-center py-2 ml-1">
        <div className={`p-2 rounded-md flex w-full flex-wrap space-x-2 gap-5`}>
          {library.package.keywords
            .slice(1, 5)
            .map((topic: any, index: React.Key | null | undefined) => (
              <p
                key={index}
                className="flex justify-center items-center w-auto text-xs sm:text-sm md:text-sm lg:text-sm p-2 bg-meta-4 rounded-md"
              >
                {topic}
              </p>
            ))}
        </div>
      </div>
      <div className="flex py-5">
        <button className="flex justify-start items-center w-40 ml-3 px-3 py-2 font-medium bg-teal md:w-40">
          Add To Collection
        </button>
      </div>
    </div>
  );
};

export default LibraryCard;
