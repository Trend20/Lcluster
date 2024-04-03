import Link from "next/link";
import React from "react";
import { HiOutlineArrowLongRight } from "react-icons/hi2";

interface CollectionProps {
  collection: any;
}

const Collection = ({ collection }: CollectionProps) => {
  return (
    <div className="flex flex-col items-start p-3 bg-blue-gray-900 rounded-md w-full">
      <h5 className="font-semibold capitalize">{collection.name}</h5>
      <p className="capitalize">{collection.description}</p>
      <Link
        href={`/collections/${collection.id}`}
        className="flex items-center text-sm"
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
