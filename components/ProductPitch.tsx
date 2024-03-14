import React from "react";
import { MdAccessTime } from "react-icons/md";
import { LuFileCode } from "react-icons/lu";
import { GoShare } from "react-icons/go";
import { CgInsights } from "react-icons/cg";

const ProductPitch = () => {
  return (
    <section className="w-full justify-center items-center flex py-12 mt-20 px-36 md:py-24 lg:py-32 xl:py-40">
      <div className="w-full justify-center flex flex-col items-center gap-4 px-4 md:px-6">
        <div className="text-center">
          <h1 className="text-3xl font-semibold tracking-tighter sm:text-5xl md:text-4xl/none">
            Say Goodbye to Time Wasting.
          </h1>
          <p className="mx-auto max-w-[600px] text-gray-500 md:text-xl dark:text-gray-400 mt-5">
            Discover, integrate, and innovate with the best third-party
            libraries.
          </p>
        </div>
        <div className="flex justify-center items-center w-3/4 mt-10">
          <div className="grid gap-6 lg:grid-cols-2">
            <div className="flex flex-col space-y-2 shadow-2xl p-8 bg-boxdark">
              <i className="rounded-full bg-teal w-12 h-12 p-3 flex justify-center items-center">
                <MdAccessTime size={25} />
              </i>
              <h2 className="text-lg font-bold">Time-saving Efficiency</h2>
              <p className="text-gray-500 dark:text-gray-400">
                Our application streamlines the process of finding and
                integrating third-party libraries, saving developers valuable
                time.
              </p>
            </div>
            <div className="space-y-2 flex flex-col shadow-2xl p-8 bg-boxdark">
              <i className="rounded-full bg-teal w-12 h-12 p-3 flex justify-center items-center">
                <LuFileCode size={25} />
              </i>
              <h2 className="text-lg font-bold">Enhanced Code Quality</h2>
              <p className="text-gray-500 dark:text-gray-400">
                Our platform ensures that teams can maintain high code quality
                standards by minimizing the risk of using outdated or
                unsupported dependencies.
              </p>
            </div>
            <div className="space-y-2 flex flex-col shadow-2xl p-8 bg-boxdark">
              <i className="rounded-full bg-teal w-12 h-12 p-3 flex justify-center items-center">
                <GoShare size={25} />
              </i>
              <h2 className="text-lg font-bold">
                Collaboration and Knowledge Sharing
              </h2>
              <p className="text-gray-500 dark:text-gray-400">
                Our application fosters collaboration and knowledge sharing
                within development teams by enabling developers to share their
                experiences and insights about specific libraries.
              </p>
            </div>
            <div className="space-y-2 flex flex-col shadow-2xl p-8 bg-boxdark">
              <i className="rounded-full bg-teal w-12 h-12 p-3 flex justify-center items-center">
                <CgInsights size={25} />
              </i>
              <h5 className="text-lg font-bold">Reliable Library Insights</h5>
              <p className="text-gray-500 dark:text-gray-400">
                Our platform provides developers with reliable insights into the
                quality and reliability of third-party libraries that align with
                their requirements.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ProductPitch;
