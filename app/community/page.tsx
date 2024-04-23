import React from "react";
import { IoEyeOutline } from "react-icons/io5";
import { IoSearchOutline } from "react-icons/io5";
import { GoReply } from "react-icons/go";
import { LuMessageCircle } from "react-icons/lu";

const Community = () => {
  return (
      <div className="w-full mx-auto px-50 py-30 mt-20">
        <div className="flex items-center justify-between mb-6">
          <h1 className="text-2xl font-bold">Community</h1>
          <div className="relative w-full max-w-md">
            <IoSearchOutline className="absolute left-3 top-1/2 -translate-y-1/2 h-5 w-5 text-gray-500 dark:text-gray-400"/>
            <input
                className="pl-10 pr-4 py-2 rounded-md bg-gray-100 dark:bg-gray-800 focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent"
                placeholder="Search posts..."
                type="search"
            />
          </div>
        </div>
        <div className="grid gap-6">
          <div className="bg-white dark:bg-gray-900 rounded-lg shadow-sm">
            <div className="p-4 md:p-6 space-y-4">
              <p className="text-gray-700 dark:text-gray-300">
                Excited to share my latest project with the community! Let me know what you think.
              </p>
              <div className="flex items-center gap-4">
                {/*<Avatar>*/}
                {/*  <AvatarImage alt="@shadcn" src="/placeholder-avatar.jpg"/>*/}
                {/*  <AvatarFallback>CN</AvatarFallback>*/}
                {/*</Avatar>*/}
                <div>
                  <div className="font-medium">Olivia Davis</div>
                  <div className="text-sm text-gray-500 dark:text-gray-400">2 hours ago</div>
                </div>
              </div>
              <div className="flex items-center gap-4">
                <button className='flex items-center space-x-3'>
                  <GoReply className="h-4 w-4 mr-2"/>
                  Answer
                </button>
                <div className="flex items-center gap-2 text-gray-500 dark:text-gray-400">
                  <IoEyeOutline className="h-5 w-5"/>
                  <span>125</span>
                </div>
                <div className="flex items-center gap-2 text-gray-500 dark:text-gray-400">
                  <LuMessageCircle className="h-5 w-5"/>
                  <span>12</span>
                </div>
              </div>
            </div>
          </div>
          <div className="bg-white dark:bg-gray-900 rounded-lg shadow-sm">
            <div className="p-4 md:p-6 space-y-4">
              <p className="text-gray-700 dark:text-gray-300">
                Anyone have experience with the new Vercel features? I'm trying to set up a custom domain and could use
                some help.
              </p>
              <div className="flex items-center gap-4">
                {/*<Avatar>*/}
                {/*  <AvatarImage alt="@jaredpalmer" src="/placeholder-avatar.jpg"/>*/}
                {/*  <AvatarFallback>JP</AvatarFallback>*/}
                {/*</Avatar>*/}
                <div>
                  <div className="font-medium">Jared Palmer</div>
                  <div className="text-sm text-gray-500 dark:text-gray-400">4 hours ago</div>
                </div>
              </div>
              <div className="flex items-center gap-4">
                <button className='flex items-center space-x-3'>
                  <GoReply className="h-4 w-4 mr-2"/>
                  Answer
                </button>
                <div className="flex items-center gap-2 text-gray-500 dark:text-gray-400">
                  <IoEyeOutline className="h-5 w-5"/>
                  <span>82</span>
                </div>
                <div className="flex items-center gap-2 text-gray-500 dark:text-gray-400">
                  <LuMessageCircle className="h-5 w-5"/>
                  <span>6</span>
                </div>
              </div>
            </div>
          </div>
          <div className="bg-white dark:bg-gray-900 rounded-lg shadow-sm">
            <div className="p-4 md:p-6 space-y-4">
              <p className="text-gray-700 dark:text-gray-300">
                I'm building a new website and would love some feedback on the design. Anything helps!
              </p>
              <div className="flex items-center gap-4">
                {/*<Avatar>*/}
                {/*  <AvatarImage alt="@maxleiter" src="/placeholder-avatar.jpg"/>*/}
                {/*  <AvatarFallback>ML</AvatarFallback>*/}
                {/*</Avatar>*/}
                <div>
                  <div className="font-medium">Max Leiter</div>
                  <div className="text-sm text-gray-500 dark:text-gray-400">8 hours ago</div>
                </div>
              </div>
              <div className="flex items-center gap-4">
                <button className='flex items-center space-x-3'>
                  <GoReply className="h-4 w-4 mr-2"/>
                  Answer
                </button>
                <div className="flex items-center gap-2 text-gray-500 dark:text-gray-400">
                  <IoEyeOutline className="h-5 w-5"/>
                  <span>64</span>
                </div>
                <div className="flex items-center gap-2 text-gray-500 dark:text-gray-400">
                  <LuMessageCircle className="h-5 w-5"/>
                  <span>9</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
  )
};

export default Community;
