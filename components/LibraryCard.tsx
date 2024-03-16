import Link from "next/link";
import React, { useState } from "react";
import { FiExternalLink } from "react-icons/fi";
import { GrCaretUp, GrCaretDown } from "react-icons/gr";

const LibraryCard = ({ library }: any) => {
  const [showTopics, setShowTopics] = useState<boolean>(false);
  return (
    <div
      className={`flex flex-col rounded-md shadow-2xl cursor-pointer bg-boxdark`}
    >
      <div className="flex p-3 items-center justify-between">
        <h3 className="font-bold flex border-none">{library.package.name}</h3>
        <Link href={library.package.links.npm} target="_blank">
          <FiExternalLink color="#4ccd99" />
        </Link>
      </div>
      {/* <hr className="border" /> */}
      <div className="flex p-3 items-center">
        <p>{library.package.description}</p>
      </div>
      {/* <hr className="border" /> */}
      <div className="flex p-3 items-center justify-between">
        <p>Version:</p> <p>{library.package.version}</p>
      </div>
      {/* <hr className="border" /> */}
      <div className="flex items-center relative">
        <span
          className="flex p-3 items-center justify-between w-full"
          onClick={() => setShowTopics((prev) => !prev)}
        >
          <p>Topics</p>
          <p>
            {" "}
            <i>
              {showTopics ? <GrCaretUp color="#4ccd99" /> : <GrCaretDown />}
            </i>
          </p>
        </span>
        <div
          className={`flex-col absolute bg-meta-4 p-3 rounded-md text-whiten w-full top-10 ${
            showTopics ? "grid grid-cols-3 gap-3" : "hidden"
          }`}
        >
          {library.package.keywords.map(
            (topic: any, index: React.Key | null | undefined) => (
              <p
                key={index}
                className="flex justify-center items-center text-sm p-1 bg-teal rounded-full"
              >
                {topic}
              </p>
            )
          )}
        </div>
      </div>
      {/* <hr className="border" /> */}

      <div className="flex py-8">
        <Link
          href={library.package.links.npm}
          target="_blank"
          className="flex justify-center items-center border border-teal text-teal rounded-md p-3 w-3/4 m-auto"
        >
          Demo
        </Link>
      </div>
    </div>
  );
};

export default LibraryCard;
