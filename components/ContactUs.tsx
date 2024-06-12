import Link from "next/link";
import React from "react";

const ContactUs = () => {
    return (
        <div
            className="flex flex-col py-6 lg:py-10 mt-6 lg:mt-10 justify-center items-center"
            id="contact"
        >
            <h3 className="text-xl md:text-2xl lg:text-3xl font-bold mb-4">
                Still have questions?
            </h3>
            <p>Talk to our team.</p>
            <Link
                className="p-3 mt-3 w-36 md:w-40 justify-center flex items-center border border-teal rounded-md outline-none"
                href="mailto:enockomondi305@gmail.com"
                target="_blank"
            >
                Contact
            </Link>
        </div>
    )
}

export default ContactUs;