import Image from "next/image";
import React from "react";

interface BrandProps {
    item: any
}
const Brand = ({item}: BrandProps) =>{
    return (
        <div
            className="mx-auto flex w-full items-center justify-center"
        >
            <Image
                alt={item.name}
                className="aspect-[2/1] cursor-pointer overflow-hidden rounded-lg object-contain object-center"
                height="100"
                src={item.icon}
                width="100"
            />
        </div>
    )
}

export default Brand;