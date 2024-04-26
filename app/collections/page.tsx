"use client"
import React, {useEffect, useState} from "react";
import { CiSearch } from "react-icons/ci";
import CollectionCard from "@/app/collections/components/CollectionCard";
import {ClockLoader} from "react-spinners";

const Collections = () => {
  const [open, setOpen] = useState(false);
  const [collections, setCollections] = useState<any[]>([]);
  const [loading, setLoading] = useState(false);

  const getCollections = async () => {
    setLoading(true);
    const response = await fetch("/api/collections");
    const data = await response.json();
    setLoading(false);
    console.log(data);
    setCollections(data);
  };
  useEffect(() => {
    getCollections();
  }, []);

  const handleOpen = () => setOpen(!open);
  return (
      <div className="px-36 mt-20 py-30">
        <div className="flex items-center justify-between mb-6">
          <div className="relative w-full max-w-md">
            <CiSearch className="absolute left-3 top-1/2 -translate-y-1/2 h-5 w-5 text-gray-400"/>
            <input
                className="w-full rounded-md border py-2 pl-10 pr-4 text-sm bg-transparent focus:border-teal focus:outline-none"
                placeholder="Search collections..."
                type="search"
            />
          </div>
          <button className="ml-4 rounded-md p-3 bg-teal">Add Collection</button>
        </div>
        {
          loading ? <div className="flex w-full justify-center items-center"><ClockLoader color="#36d7b7" /></div> :
              <div className="grid grid-cols-1 gap-6 mt-10 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
                {
                  collections.map((collection: any) => (
                      <CollectionCard collection={collection} key={collection.id}/>
                  ))
                }
              </div>
        }
      </div>
  )
};

export default Collections;
