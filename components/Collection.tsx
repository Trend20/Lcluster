import Link from "next/link";
import React from "react";

interface CollectionProps {
  collection: any;
}

const Collection = ({ collection }: CollectionProps) => {
  return (
    <div className="flex">
      <h5>{collection.name}</h5>
      <p>{collection.description}</p>
      <Link href={`/collections/${collection.id}`}>View Libraries</Link>
    </div>
  );
};

export default Collection;
