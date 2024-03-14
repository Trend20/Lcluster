import React from "react";
import Link from "next/link";
import { FaXTwitter } from "react-icons/fa6";
import { FiLinkedin } from "react-icons/fi";
import { FaGithub } from "react-icons/fa";

const FooterIcons = [
  {
    id: 1,
    icon: <FaXTwitter className="w-4 h-4 text-twitter" />,
    name: "twitter",
  },
  {
    id: 2,
    icon: <FiLinkedin className="w-4 h-4 text-twitter" />,
    name: "linkedin",
  },
  {
    id: 3,
    icon: <FaGithub className="w-4 h-4 text-twitter" />,
    name: "github",
  },
];

const FooterLinks = [
  {
    id: 1,
    name: "Pricing",
    url: "#pricing",
  },
  {
    id: 2,
    name: "Contact Us",
    url: "#contact",
  },
  {
    id: 3,
    name: "Privacy Policy",
    url: "#policy",
  },
];

const Footer = () => {
  return (
    <div className="w-full py-10 px-36 flex items-center justify-center gap-4 text-center md:flex-row md:gap-6">
      <div className="flex items-center justify-center gap-4">
        {FooterIcons.map((icon) => (
          <Link
            key={icon.id}
            className="rounded-full border border-gray-200 border-gray-200 hover:border-gray-800/90 dark:border-gray-800 dark:hover:border-gray-200 bg-gray-50 w-8 h-8 flex items-center justify-center overflow-hidden"
            href="#"
          >
            {icon.icon}
            <span className="sr-only">{icon.name}</span>
          </Link>
        ))}
      </div>
      <nav className="flex flex-col gap-1 md:flex-row md:gap-4">
        {FooterLinks.map((item) => (
          <Link
            key={item.id}
            className="text-sm font-medium text-gray-500 hover:text-gray-900 dark:text-gray-400 dark:hover:text-gray-50"
            href={item.url}
          >
            {item.name}
          </Link>
        ))}
      </nav>
    </div>
  );
};

export default Footer;
