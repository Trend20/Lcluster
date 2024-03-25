"use client";
import React, { useState } from "react";
import faqData from "../utils/data.json";
import { FiPlus } from "react-icons/fi";
import { LiaTimesSolid } from "react-icons/lia";
import Link from "next/link";

const FrequentlyAsked = () => {
  const [openIndex, setOpenIndex] = useState(null);

  const toggleAccordion = (index: any) => {
    setOpenIndex(openIndex === index ? null : index);
  };
  return (
    <div className="flex flex-col px-4 lg:px-8 xl:px-36 w-full justify-center items-center py-10 lg:py-20">
      <div className="w-full md:w-3/4 lg:w-1/2 mx-auto flex flex-col justify-center items-center p-4 md:p-6">
        <h2 className="text-2xl md:text-4xl lg:text-5xl font-bold mb-4">
          Frequently Asked Questions
        </h2>
        <div className="space-y-4 w-full mt-6 md:mt-10">
          {faqData.map((faq, index) => (
            <div className="border rounded-lg" key={index}>
              <button
                className="w-full flex items-center justify-between p-3 md:p-4 bg-gray-200"
                onClick={() => toggleAccordion(index)}
              >
                <span>{faq.question}</span>
                <span className="text-lg md:text-xl">
                  {openIndex === index ? (
                    <LiaTimesSolid fill="#4ccd99" />
                  ) : (
                    <FiPlus fill="#4ccd99" />
                  )}
                </span>
              </button>
              {openIndex === index && (
                <div className="px-3 md:px-4 py-2">
                  <p>{faq.answer}</p>
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
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
    </div>
  );
};

export default FrequentlyAsked;
