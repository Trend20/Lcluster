import React from "react";
import Link from "next/link";

const libDetails = [
    {
        id: 1,
        url: "/libraries/javascript",
        icon: "/icons/javascript.svg",
    },
    {
        id: 2,
        url: "/libraries/python",
        icon: "/icons/python.svg",
    },
    {
        id: 3,
        url: "/libraries/php",
        icon: "/icons/php.svg",
    },
    {
        id: 4,
        url: "/libraries/ruby",
        icon: "/icons/ruby.svg",
    },
    {
        id: 5,
        url: "/libraries/java",
        icon: "/icons/java.svg",
    },
];

const Libraries = () => {
    return (
        <section className="w-full justify-center items-center flex mt-8 py-8 md:py-12 lg:py-16 xl:py-20 px-4 md:px-6 xl:px-36" id="libraries">
            <div className="w-full justify-center flex flex-col items-center gap-4">
                <div className="text-center">
                    <h1 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-semibold tracking-tight">
                        Choose your language.
                    </h1>
                    <p className="mx-auto max-w-full lg:max-w-[600px] text-gray-500 md:text-base lg:text-lg dark:text-gray-400 mt-4 md:mt-6">
                        We have a wide range of libraries tailored to your favourite programming languages.
                    </p>
                </div>
                <div className="flex justify-center items-center w-full md:w-3/4 mt-8 md:mt-10">
                    <div className="grid gap-6 lg:grid-cols-5 w-full">
                        {libDetails.map((info: any) => (
                            <div
                                key={info.id}
                                className="flex flex-col space-y-2 shadow-2xl p-6 lg:p-8 bg-boxdark rounded-lg"
                            >
                                <Link href={info.url}>
                                    <i className="flex justify-center items-center">
                                        {info.icon}
                                    </i>
                                </Link>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Libraries;
