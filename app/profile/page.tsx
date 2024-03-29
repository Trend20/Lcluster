"use client";
import { AddCollectionDialog } from "@/components/AddCollectionModal";
import { useSession } from "next-auth/react";
import Image from "next/image";
import Link from "next/link";
import { redirect } from "next/navigation";
import React, { useEffect, useState } from "react";

const Profile = () => {
  const [open, setOpen] = useState(false);
  const [collections, setCollections] = useState<any[]>([]);

  const getCollections = async () => {
    const response = await fetch("/api/collections");
    const data = await response.json();
    console.log(data);
    setCollections(data);
  };
  useEffect(() => {
    getCollections();
  }, []);

  const handleOpen = () => setOpen(!open);

  const { data: session } = useSession();
  if (!session) {
    return redirect("/auth/signin");
  }
  return (
    <div className="px-4 mt-20 md:px-6 lg:px-36">
      {session && (
        <>
          <div className="flex flex-col justify-center items-center mt-8 md:mt-16 py-5">
            <div className="flex">
              <Image
                src={session?.user?.image!}
                alt="Avatar"
                width="100"
                height="100"
                className="rounded-full"
              />
            </div>
            <p className="font-medium">{session.user?.name}</p>
          </div>
          <div className="flex flex-col py-8 md:py-10 lg:py-12">
            <div className="flex w-full justify-between items-center">
              <h5 className="text-lg md:text-xl lg:text-2xl font-semibold">
                My Collections
              </h5>
              <button
                onClick={handleOpen}
                className="flex justify-center font-semibold items-center w-40 md:w-52 bg-teal p-3 rounded-md outline-none"
              >
                Create Collection
              </button>
            </div>
            <div className="flex border h-64 md:h-80 lg:h-96 rounded-lg mt-6 md:mt-8 lg:mt-10 justify-center items-center">
              {collections.length !== 0 ? (
                <div className="grid lg:grid-cols-4 gap-8">
                  {collections.map((item: any) => (
                    <Link
                      href={`/collections/${item.id}`}
                      key={item.id}
                      className="shadow-xl bg-green-200 p-3 w-32 justify-center items-center flex rounded-md"
                    >
                      {item.name}
                    </Link>
                  ))}
                </div>
              ) : (
                <div className="flex flex-col justify-center items-center">
                  <h6 className="text-base md:text-lg lg:text-xl">
                    You don&#39;t have any collection yet!
                  </h6>
                  <Image
                    src="icons/col.svg"
                    alt="Avatar"
                    width="100"
                    height="100"
                    className="rounded-full py-4"
                  />
                  <Link
                    href="/libraries/javascript"
                    className="flex justify-center font-semibold items-center w-40 md:w-52 bg-teal mt-2 md:mt-3 p-3 rounded-md outline-none"
                  >
                    Add Library
                  </Link>
                </div>
              )}
            </div>
          </div>
        </>
      )}
      <AddCollectionDialog
        open={open}
        handleOpen={handleOpen}
        getCollections={getCollections}
      />
    </div>
  );
};

export default Profile;
