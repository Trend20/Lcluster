"use client"
import React from "react";
import Link from "next/link";
import Image from "next/image";
import {libDetails} from "@/data/lib";
import {useSession} from "next-auth/react";
import Heading from "@/components/common/Heading";

const Libraries = () => {
    const { data:session  } = useSession();

    return (
        <section className="w-full justify-center items-center flex mt-8 py-8 md:py-12 lg:py-16 xl:py-20 px-4 md:px-6 xl:px-36" id="libraries">
            <div className="w-full justify-center flex flex-col items-center gap-4">
                <div className="text-center">
                    <Heading headingText={' Choose your language.'} />
                    <p className="mx-auto max-w-full lg:max-w-[600px] text-gray-500 md:text-base lg:text-lg dark:text-gray-400 mt-4 md:mt-6">
                        We have a wide range of libraries tailored to your favourite programming languages.
                    </p>
                </div>
                <div className="flex justify-center items-center w-full md:w-3/4 mt-8 md:mt-10">
                    <div className="flex justify-center items-center space-x-8 w-full">
                        {libDetails.map((info: any) => (
                                <Link key={info.id} href={session ? info.url : '/auth/signin'} className="flex justify-center items-center">
                                    <Image src={info.icon} alt={info.url} width={50} height={50} />
                                </Link>
                        ))}
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Libraries;
