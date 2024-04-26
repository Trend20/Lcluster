import React from "react";
import { CiSearch } from "react-icons/ci";

const Collections = () => {
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
        <div className="grid grid-cols-1 gap-6 mt-10 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
          <div className="h-full border rounded-lg p-4">
            <div className="flex flex-col justify-between h-full">
              <div>
                <h3 className="text-lg font-semibold">Branding</h3>
                <p className="text-gray-500 dark:text-gray-400 mt-2">A collection of branding assets and guidelines.</p>
              </div>
              <button className="mt-4 border rounded-md p-3">
                View Libraries
              </button>
            </div>
          </div>
          <div className="h-full border rounded-lg p-4">
            <div className="flex flex-col justify-between h-full">
              <div>
                <h3 className="text-lg font-semibold">Web Design</h3>
                <p className="text-gray-500 dark:text-gray-400 mt-2">
                  A collection of web design components and templates.
                </p>
              </div>
              <button className="mt-4 border rounded-md p-3">
                View Libraries
              </button>
            </div>
          </div>
          <div className="h-full border rounded-lg p-4">
            <div className="flex flex-col justify-between h-full">
              <div>
                <h3 className="text-lg font-semibold">Mobile Design</h3>
                <p className="text-gray-500 dark:text-gray-400 mt-2">
                  A collection of mobile design assets and patterns.
                </p>
              </div>
              <button className="mt-4 border rounded-md p-3">
                View Libraries
              </button>
            </div>
          </div>
          <div className="h-full border rounded-lg p-4">
            <div className="flex flex-col justify-between h-full">
              <div>
                <h3 className="text-lg font-semibold">Illustrations</h3>
                <p className="text-gray-500 dark:text-gray-400 mt-2">
                  A collection of custom illustrations for your projects.
                </p>
              </div>
              <button className="mt-4 border rounded-md p-3">
                View Libraries
              </button>
            </div>
          </div>
          <div className="h-full border rounded-lg p-4">
            <div className="flex flex-col justify-between h-full">
              <div>
                <h3 className="text-lg font-semibold">Icons</h3>
                <p className="text-gray-500 dark:text-gray-400 mt-2">
                  A collection of high-quality icons for your designs.
                </p>
              </div>
              <button className="mt-4 border rounded-md p-3">
                View Libraries
              </button>
            </div>
          </div>
          <div className="h-full border rounded-lg p-4">
            <div className="flex flex-col justify-between h-full">
              <div>
                <h3 className="text-lg font-semibold">Prototypes</h3>
                <p className="text-gray-500 dark:text-gray-400 mt-2">
                  A collection of interactive prototypes for user testing.
                </p>
              </div>
              <button className="mt-4 border rounded-md p-3">
                View Libraries
              </button>
            </div>
          </div>
        </div>
      </div>
  )
};

export default Collections;
