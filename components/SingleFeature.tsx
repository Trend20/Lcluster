import React from "react";

interface SingleFeatureProps{
    feature: any
}

const SingleFeature = ({feature}: SingleFeatureProps) => {
    return (
        <div
            className="flex flex-col items-center text-center space-y-2 rounded-md shadow-2xl p-5 bg-boxdark"
        >
            <i className="rounded-full bg-teal w-12 h-12 p-3 flex justify-center items-center">
                {feature.icon}
            </i>
            <h3 className="text-xl font-bold">{feature.heading}</h3>
            <p className="text-sm text-gray-500 dark:text-gray-400">
                {feature.desc}
            </p>
        </div>
    )
}

export default SingleFeature;