import React from "react";

interface PitchCardProps{
    info: any;
}

const PitchCard = ({info}: PitchCardProps) =>{
    return (
        <div
            className="flex flex-col space-y-2 shadow-2xl p-6 lg:p-8 bg-boxdark rounded-lg"
        >
            <i className="rounded-full bg-teal w-10 h-10 p-2 flex justify-center items-center">
                {info.icon}
            </i>
            <h2 className="text-lg font-semibold">{info.title}</h2>
            <p className="text-gray-500 dark:text-gray-400 text-sm lg:text-base">
                {info.description}
            </p>
        </div>
    )
}

export default PitchCard;