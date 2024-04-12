import Link from "next/link";
import Image from "next/image";
import React from "react";
import { getServerSession } from "next-auth";
import { redirect } from "next/navigation";
import {libDetails} from "@/data/lib";

const Libraries = async () => {
  const session = await getServerSession();
  if (!session) {
    return redirect("/auth/signin");
  }
  return (
    <div className="flex w-full flex-col justify-center items-center px-50 py-30 mt-40">
      <div className="flex justify-center items-center">
        <h1 className="flex text-3xl text-center w-full font-extrabold">
          Choose Project Stack
        </h1>
      </div>
      <div className="flex items-center space-x-3 flex-col lg:flex-row m-auto mt-8 px-5">
        {libDetails.map((item) => (
          <Link
            href={`/libraries/${item.name}`}
            className="flex flex-col p-5 justify-center items-center"
            key={item.id}
          >
            <Image
              src={item.icon}
              alt={item.name}
              width="100"
              height="100"
              className="flex w-10.5 h-10.5"
            />
          </Link>
        ))}
      </div>
    </div>
  );
};

export default Libraries;
