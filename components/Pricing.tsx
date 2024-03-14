import React from "react";
import { BsFillBagCheckFill } from "react-icons/bs";
import { BsFillBookmarkCheckFill } from "react-icons/bs";
const Pricing = () => {
  return (
    <div className="w-full pt-12 pb-16 px-36" id="pricing">
      <div className="flex flex-col w-full justify-center items-center gap-8 px-4 md:px-6">
        <div className="space-y-2 text-center">
          <div className="inline-block rounded-lg bg-gray-100 px-3 py-1 text-sm dark:bg-gray-800">
            Plans that scale
          </div>
          <div className="space-y-2">
            <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl">
              Pick the perfect plan
            </h2>
            <p className="max-w-[700px] text-gray-500 md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed dark:text-gray-400">
              Start free! Then choose the right plan for you or your team.
            </p>
          </div>
        </div>
        <div className="grid w-3/4 sm:grid-cols-2 lg:grid-cols-3">
          <div className="flex flex-col w-[360px] rounded-md shadow-2xl p-5 bg-boxdark">
            <div className="flex items-center gap-2">
              <BsFillBagCheckFill className="w-5 h-5" />
              <h3 className="text-lg font-bold">Free</h3>
            </div>
            <hr className="w-full border my-8" />

            <div className="flex flex-col">
              <h1 className="text-5xl font-extrabold leading-10">$0</h1>
              <p className="mt-3">Free forever</p>
            </div>
            <h6 className="font-bold leading-10 mt-5">Whats Included</h6>
            <p className="flex items-center w-full py-2 text-sm text-gray-500 dark:text-gray-400">
              <i className="flex p-2 justify-center border border-body rounded-full mr-5">
                <BsFillBookmarkCheckFill fill="#4ccd99" />
              </i>
              Start with the essentials
            </p>
            <p className="flex items-center w-full py-2 text-sm text-gray-500 dark:text-gray-400">
              <i className="flex p-2 justify-center border border-body rounded-full mr-5">
                <BsFillBookmarkCheckFill fill="#4ccd99" />
              </i>
              Start with the essentials
            </p>
            <p className="flex items-center w-full py-2 text-sm text-gray-500 dark:text-gray-400">
              <i className="flex p-2 justify-center border border-body rounded-full mr-5">
                <BsFillBookmarkCheckFill fill="#4ccd99" />
              </i>
              Start with the essentials
            </p>
            <p className="flex items-center w-full py-2 text-sm text-gray-500 dark:text-gray-400">
              <i className="flex p-2 justify-center border border-body rounded-full mr-5">
                <BsFillBookmarkCheckFill fill="#4ccd99" />
              </i>
              Start with the essentials
            </p>
            <button className="p-3 mt-8 bg-teal rounded-md outline-none">
              Subscribe
            </button>
          </div>
          <div className="flex flex-col border-2 w-[360px] border-teal rounded-md shadow-2xl p-5 bg-boxdark">
            <div className="flex items-center gap-2">
              <BsFillBagCheckFill className="w-5 h-5" />
              <h3 className="text-lg font-bold">Pro</h3>
            </div>
            <hr className="w-full border my-8" />
            <div className="flex flex-col">
              <h1 className="text-5xl font-extrabold leading-10">$5</h1>
              <p className="mt-3">Billed Yearly</p>
            </div>
            <h6 className="font-bold leading-10 mt-5">Whats Included</h6>
            <p className="flex items-center w-full py-2 text-sm text-gray-500 dark:text-gray-400">
              <i className="flex p-2 justify-center border border-body rounded-full mr-5">
                <BsFillBookmarkCheckFill fill="#4ccd99" />
              </i>
              Start with the essentials
            </p>
            <p className="flex items-center w-full py-2 text-sm text-gray-500 dark:text-gray-400">
              <i className="flex p-2 justify-center border border-body rounded-full mr-5">
                <BsFillBookmarkCheckFill fill="#4ccd99" />
              </i>
              Start with the essentials
            </p>
            <p className="flex items-center w-full py-2 text-sm text-gray-500 dark:text-gray-400">
              <i className="flex p-2 justify-center border border-body rounded-full mr-5">
                <BsFillBookmarkCheckFill fill="#4ccd99" />
              </i>
              Start with the essentials
            </p>
            <p className="flex items-center w-full py-2 text-sm text-gray-500 dark:text-gray-400">
              <i className="flex p-2 justify-center border border-body rounded-full mr-5">
                <BsFillBookmarkCheckFill fill="#4ccd99" />
              </i>
              Start with the essentials
            </p>
            <button className="p-3 mt-8 bg-teal rounded-md outline-none">
              Subscribe
            </button>
          </div>
          <div className="flex flex-col w-[360px] rounded-md shadow-2xl p-5 bg-boxdark">
            <div className="flex items-center gap-2">
              <BsFillBagCheckFill className="w-5 h-5" />
              <h3 className="text-lg font-bold">Team</h3>
            </div>
            <hr className="w-full border my-8" />
            <div className="flex flex-col">
              <h1 className="text-5xl font-extrabold leading-10">$20</h1>
              <p className="mt-3">Billed Yearly</p>
            </div>
            <h6 className="font-bold leading-10 mt-5">Whats Included</h6>
            <p className="flex items-center w-full py-2 text-sm text-gray-500 dark:text-gray-400">
              <i className="flex p-2 justify-center border border-body rounded-full mr-5">
                <BsFillBookmarkCheckFill fill="#4ccd99" />
              </i>
              Start with the essentials
            </p>
            <p className="flex items-center w-full py-2 text-sm text-gray-500 dark:text-gray-400">
              <i className="flex p-2 justify-center border border-body rounded-full mr-5">
                <BsFillBookmarkCheckFill fill="#4ccd99" />
              </i>
              Start with the essentials
            </p>
            <p className="flex items-center w-full py-2 text-sm text-gray-500 dark:text-gray-400">
              <i className="flex p-2 justify-center border border-body rounded-full mr-5">
                <BsFillBookmarkCheckFill fill="#4ccd99" />
              </i>
              Start with the essentials
            </p>
            <p className="flex items-center w-full py-2 text-sm text-gray-500 dark:text-gray-400">
              <i className="flex p-2 justify-center border border-body rounded-full mr-5">
                <BsFillBookmarkCheckFill fill="#4ccd99" />
              </i>
              Start with the essentials
            </p>
            <button className="p-3 mt-8 bg-teal rounded-md outline-none">
              Subscribe
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Pricing;
