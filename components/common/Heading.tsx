import React from "react";

interface HeadingProps {
    headingText?: string;
}

const Heading = ({headingText}: HeadingProps) =>{
    return (
        <h1 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-semibold tracking-tight">
            {headingText}
        </h1>
    )
}

export default Heading;