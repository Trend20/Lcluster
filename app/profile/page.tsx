import { getServerSession } from "next-auth";
import Image from "next/image";
import Link from "next/link";
import { redirect } from "next/navigation";
import React from "react";

const Profile = async () => {
  const session = await getServerSession();
  if (!session) {
    return redirect("/auth/signin");
  }
  return (
    <div className="px-50">
      {session && (
        <>
          <div className="flex flex-col justify-center items-center m-auto mt-40 py-5">
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
          <div className="flex flex-col py-10">
            <div className="flex w-full justify-between items-center">
              <h5 className="text-xl font-semibold">My Collections</h5>
              <Link
                href="/libraries"
                className="flex justify-center font-semibold items-center w-40 bg-teal p-3 rounded-md outline-none"
              >
                Create Collection
              </Link>
            </div>
            <div className="flex border h-[500px] rounded-lg mt-10 justify-center items-center">
              <div className="flex flex-col justify-center items-center">
                <h6 className="text-lg">
                  You don&#39;t have any collection yet!
                </h6>
                <Link
                  href="/libraries"
                  className="flex justify-center font-semibold items-center w-40 bg-teal mt-3 p-3 rounded-md outline-none"
                >
                  Add Collection
                </Link>
              </div>
            </div>
          </div>
        </>
      )}
    </div>
  );
};

export default Profile;
