import {LiaTimesSolid} from "react-icons/lia";
import {FiPlus} from "react-icons/fi";
import React from "react";

interface QuizBlockProps {
    index: string | number;
    openIndex: string | number | null;
    faq: any;
    toggleAccordion: (index: any) => void;
}

const QuizBlock = ({index, openIndex, faq, toggleAccordion}: QuizBlockProps) => {
    return (
        <div className="border rounded-lg">
            <button
                className="w-full flex items-center justify-between p-3 md:p-4 bg-gray-200"
                onClick={() => toggleAccordion(index)}
            >
                <span>{faq.question}</span>
                <span className="text-lg md:text-xl">
                  {openIndex === index ? (
                      <LiaTimesSolid fill="#4ccd99"/>
                  ) : (
                      <FiPlus fill="#4ccd99"/>
                  )}
                </span>
            </button>
            {openIndex === index && (
                <div className="px-3 md:px-4 py-2">
                    <p>{faq.answer}</p>
                </div>
            )}
        </div>
    )
}

export default QuizBlock;