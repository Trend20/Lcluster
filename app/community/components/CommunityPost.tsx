import {GoReply} from "react-icons/go";
import {IoEyeOutline} from "react-icons/io5";
import {LuMessageCircle} from "react-icons/lu";
import React from "react";
import Image from "next/image";

const CommunityPost = ({post}:any) => {
    return (
        <div className="bg-boxdark dark:bg-gray-900 rounded-lg shadow-sm">
            <div className="p-4 md:p-6 space-y-4">
                <p className="text-gray-700 dark:text-gray-300">
                    {post.title}
                </p>
                <div className="flex items-center gap-4">
                    <Image src={post.icon} alt={post.author} width={50} height={50} className='flex items-center justify-center rounded-full' />
                    <div>
                        <div className="font-medium">{post.author}</div>
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
                        <span>{post.answers}</span>
                    </div>
                    <div className="flex items-center gap-2 text-gray-500 dark:text-gray-400">
                        <LuMessageCircle className="h-5 w-5"/>
                        <span>{post.comments}</span>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default CommunityPost;