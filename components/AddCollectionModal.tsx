"use client";

import React, { useState } from "react";
import { Dialog } from "@material-tailwind/react";
import { AiOutlineClose } from "react-icons/ai";
import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

export function AddCollectionDialog({ open, handleOpen }: any) {
  const [name, setName] = useState("");
  const [description, setDescription] = useState("");
  const [libraries, setLibraries] = useState([]);

  // handle add collection
  // const handleSubmit = async (e: { preventDefault: () => void }) => {
  //   e.preventDefault();
  //   try {
  //     const newCollection = await prisma.collection.create({
  //       data: {
  //         title: name,
  //         description,
  //         libraries: {
  //           create: libraries.map((library: any) => ({
  //             name: library.name,
  //           })),
  //         },
  //       },
  //       include: {
  //         libraries: true,
  //       },
  //     });
  //     console.log("Collection saved:", newCollection);
  //     setName("");
  //     setDescription("");
  //     handleOpen();
  //   } catch (error) {
  //     console.error("Error saving collection:", error);
  //   }
  // };

  return (
    <>
      <Dialog
        placeholder={""}
        open={open}
        size="xs"
        handler={handleOpen}
        animate={{
          mount: { scale: 1, y: 0 },
          unmount: { scale: 0.9, y: -100 },
        }}
        className="p-5"
      >
        <div className="flex items-center justify-between">
          <h3 className="flex flex-col items-start font-bold">
            New collection
          </h3>
          <i
            onClick={handleOpen}
            className="flex cursor-pointer rounded-full p-1 border"
          >
            <AiOutlineClose />
          </i>
        </div>
        <form>
          <div className="flex mt-5">
            <input
              type="text"
              onChange={(e) => setName(e.target.value)}
              value={name}
              placeholder="Name"
              className="p-3 flex border border-grey rounded-md w-full"
            />
          </div>
          <div className="flex mt-5">
            <input
              type="text"
              onChange={(e) => setDescription(e.target.value)}
              value={description}
              placeholder="Description"
              className="p-3 flex border border-grey rounded-md w-full"
            />
          </div>
        </form>
        <div className="space-x-2 flex justify-end w-full mt-5">
          <button
            className="p-3 flex justify-center items-center bg-teal rounded-md font-semibold w-32"
            type="submit"
          >
            Submit
          </button>
        </div>
      </Dialog>
    </>
  );
}
