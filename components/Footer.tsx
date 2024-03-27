"use client";
import React, { useEffect, useState } from "react";
import Link from "next/link";
import { FaXTwitter } from "react-icons/fa6";
import { FiLinkedin } from "react-icons/fi";
import { FaGithub } from "react-icons/fa";
import { usePathname } from "next/navigation";

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
  const pathname = usePathname();
  const [showHeaderAndFooter, setShowHeaderAndFooter] = useState(true);

  const handleShowHeaderAndFooter = () => {
    if (pathname === "/auth/signin" || pathname === "/auth/signup") {
      setShowHeaderAndFooter(false);
    }
  };

  useEffect(() => {
    handleShowHeaderAndFooter();
  }, []);
  return (
    <>
      {showHeaderAndFooter && (
        <div className="w-full py-6 md:py-10 px-4 md:px-8 lg:px-36 flex flex-col md:flex-row items-center justify-center md:justify-between gap-4 md:gap-6 text-center">
          <div className="flex items-center justify-center gap-4">
            {FooterIcons.map((icon) => (
              <Link
                key={icon.id}
                className="rounded-full border border-gray-200 hover:border-gray-800/90 dark:border-gray-800 dark:hover:border-gray-200 bg-gray-50 w-8 h-8 flex items-center justify-center overflow-hidden"
                href="#"
              >
                {icon.icon}
                <span className="sr-only">{icon.name}</span>
              </Link>
            ))}
          </div>
          <nav className="flex space-x-5 md:flex-row gap-1 md:gap-4">
            {FooterLinks.map((item) => (
              <Link
                key={item.id}
                className="text-xs md:text-sm font-medium text-gray-500 hover:text-gray-900 dark:text-gray-400 dark:hover:text-gray-50"
                href={item.url}
              >
                {item.name}
              </Link>
            ))}
          </nav>
        </div>
      )}
    </>
  );
};

export default Footer;
