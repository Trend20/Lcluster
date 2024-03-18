"use client";

import React, { useState } from "react";
import { Dialog } from "@material-tailwind/react";
import { AiOutlineClose } from "react-icons/ai";

export function AddCollectionDialog({ open, handleOpen }: any) {
  const [name, setName] = useState("");
  const [description, setDescription] = useState("");
  const [libraries, setLibraries] = useState([]);

  // handle add collection
  return (
    <>
      <Dialog open={open} size="xs" handler={handleOpen} className="p-5">
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
