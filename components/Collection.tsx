import Link from "next/link";
import React from "react";
import { HiOutlineArrowLongRight } from "react-icons/hi2";

interface CollectionProps {
  collection: any;
}

const Collection = ({ collection }: CollectionProps) => {
  return (
    <div className="flex flex-col items-start bg-boxdark p-3 rounded-md w-full">
      <h5 className="font-semibold capitalize leading-10">{collection.name}</h5>
      <p className="capitalize">{collection.description}</p>
      <Link
        href={`/collections/${collection.id}`}
        className="flex items-center text-sm mt-5 bg-black p-3 rounded-md"
     >
        <i className="mr-3">
          <HiOutlineArrowLongRight color="#4ccd99" size={20} />
        </i>
        View Libraries
      </Link>
    </div>
  );
};

export default Collection;
