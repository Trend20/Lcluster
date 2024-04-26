import React from "react";
import { IoSearchOutline } from "react-icons/io5";
import {posts} from "@/data/posts";
import CommunityPost from "@/app/community/components/CommunityPost";

const Community = () => {
  return (
      <div className="w-full mx-auto px-36 py-30 mt-20">
        <div className="flex items-center justify-between mb-6">
          <h1 className="text-2xl font-bold">Community</h1>
          <div className="relative">
            <IoSearchOutline className="absolute left-3 top-1/2 -translate-y-1/2 h-5 w-5 text-gray-500 dark:text-gray-400"/>
            <input
                className="pl-10 pr-4 py-2 rounded-md border bg-transparent focus:outline-none focus:ring-2 focus:ring-teal focus:border-teal"
                placeholder="Search posts..."
                type="search"
            />
          </div>
        </div>
        <div className="grid gap-6">
            {
                posts.map((post) => (
                    <CommunityPost post={post} key={post.id} />
                ))
            }
        </div>
      </div>
  )
};

export default Community;
