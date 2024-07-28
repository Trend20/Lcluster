import React from "react";

const CollectionCard = ({collection}:any) =>{
    return (
        <div className="h-full border rounded-lg p-4">
            <div className="flex flex-col justify-between h-full">
                <div>
                    <h3 className="text-lg font-semibold">{collection.name}</h3>
                    <p className="text-gray-500 dark:text-gray-400 mt-2">
                        {collection.description}
                    </p>
                </div>
                <button className="mt-4 border rounded-md p-3">
                    View Libraries
                </button>
            </div>
        </div>
    )
}

export default CollectionCard;