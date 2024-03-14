import React from "react";
import Link from "next/link";
import { TbBrandFacebook } from "react-icons/tb";
import { FaXTwitter } from "react-icons/fa6";
import { FaInstagram } from "react-icons/fa6";
import { FiLinkedin } from "react-icons/fi";
import { FaGithub } from "react-icons/fa";

const Footer = () => {
  return (
    <div className="w-full py-10 px-36 flex items-center justify-center gap-4 text-center md:flex-row md:gap-6">
      <div className="flex items-center justify-center gap-4">
        <Link
          className="rounded-full border border-gray-200 border-gray-200 hover:border-gray-800/90 dark:border-gray-800 dark:hover:border-gray-200 bg-gray-50 w-8 h-8 flex items-center justify-center overflow-hidden"
          href="#"
        >
          <FaXTwitter className="w-4 h-4 text-twitter" />
          <span className="sr-only">Twitter</span>
        </Link>
        <Link
          className="rounded-full border border-gray-200 border-gray-200 hover:border-gray-800/90 dark:border-gray-800 dark:hover:border-gray-200 bg-gray-50 w-8 h-8 flex items-center justify-center overflow-hidden"
          href="#"
        >
          <FaGithub className="w-4 h-4 text-github" />
          <span className="sr-only">GitHub</span>
        </Link>
        <Link
          className="rounded-full border border-gray-200 border-gray-200 hover:border-gray-800/90 dark:border-gray-800 dark:hover:border-gray-200 bg-gray-50 w-8 h-8 flex items-center justify-center overflow-hidden"
          href="#"
        >
          <FiLinkedin className="w-4 h-4 text-linkedin" />
          <span className="sr-only">LinkedIn</span>
        </Link>
      </div>
      <nav className="flex flex-col gap-1 md:flex-row md:gap-4">
        <Link
          className="text-sm font-medium text-gray-500 hover:text-gray-900 dark:text-gray-400 dark:hover:text-gray-50"
          href="#"
        >
          Pricing
        </Link>
        <Link
          className="text-sm font-medium text-gray-500 hover:text-gray-900 dark:text-gray-400 dark:hover:text-gray-50"
          href="mailto:enockomondi305@gmail.com"
        >
          Contact Us
        </Link>
        <Link
          className="text-sm font-medium text-gray-500 hover:text-gray-900 dark:text-gray-400 dark:hover:text-gray-50"
          href="#"
        >
          Privacy Policy
        </Link>
      </nav>
    </div>
  );
};

export default Footer;
