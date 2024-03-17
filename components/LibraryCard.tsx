import Link from "next/link";
import React from "react";
import { FaGithub } from "react-icons/fa6";
import { FaNpm } from "react-icons/fa";
import { CiGlobe } from "react-icons/ci";

const LibraryCard = ({ library }: any) => {
  return (
    <div
      className={`flex flex-col rounded-md shadow-2xl cursor-pointer bg-boxdark p-5`}
    >
      <div className="flex p-3 items-center justify-between w-full">
        <div className="flex w-3/4">
          <h3 className="font-extrabold text-xl flex border-none">
            {library.package.name}
          </h3>
          <div className="flex items-center ml-3 px-3 py-1 rounded-md bg-meta-4">
            <p className="text-sm">Version</p>{" "}
            <p className="text-sm ml-3">{library.package.version}</p>
          </div>
        </div>
        <div className="flex w-1/4 justify-end space-x-3 items-center">
          {library.package.links.npm && (
            <Link href={library.package.links.npm} target="_blank">
              <FaNpm color="#4ccd99" size={25} />
            </Link>
          )}
          {library.package.links.repository && (
            <Link href={library.package.links.repository} target="_blank">
              <FaGithub color="#4ccd99" size={25} />
            </Link>
          )}
          {library.package.links.homepage && (
            <Link href={library.package.links.homepage} target="_blank">
              <CiGlobe color="#4ccd99" size={25} />
            </Link>
          )}
        </div>
      </div>
      <div className="flex px-3 items-center">
        <p className="text-lg">{library.package.description}</p>
      </div>
      <div className="flex items-center py-3">
        <div className={`p-3 rounded-md flex w-full flex-wrap space-x-2`}>
          {library.package.keywords
            .slice(1, 5)
            .map((topic: any, index: React.Key | null | undefined) => (
              <p
                key={index}
                className="flex justify-center items-center w-auto text-sm p-3 bg-meta-4 rounded-md"
              >
                {topic}
              </p>
            ))}
        </div>
      </div>
      <button className="flex justify-start items-center ml-3 px-3 py-2 font-medium bg-teal w-40">
        Add To collection
      </button>
    </div>
  );
};

export default LibraryCard;
