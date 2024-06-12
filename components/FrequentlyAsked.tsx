"use client";
import React, { useState } from "react";
import faqData from "../utils/data.json";
import Heading from "@/components/common/Heading";
import QuizBlock from "@/components/QuizBlock";
import ContactUs from "@/components/ContactUs";

const FrequentlyAsked = () => {
  const [openIndex, setOpenIndex] = useState(null);

  const toggleAccordion = (index: any) => {
    setOpenIndex(openIndex === index ? null : index);
  };
  return (
    <div className="flex flex-col px-4 lg:px-8 xl:px-36 w-full justify-center items-center py-10 lg:py-20">
      <div className="w-full md:w-3/4 lg:w-1/2 mx-auto flex flex-col justify-center items-center p-4 md:p-6">
        <Heading headingText={'Frequently Asked Questions'} />
        <div className="space-y-4 w-full mt-6 md:mt-10">
          {faqData.map((faq, index) => (
            <QuizBlock key={index} index={index} openIndex={openIndex} faq={faq} toggleAccordion={toggleAccordion} />
          ))}
        </div>
      </div>
      <ContactUs />
    </div>
  );
};
export default FrequentlyAsked;