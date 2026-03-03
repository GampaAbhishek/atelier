"use client";

import React from "react";
import FAQItem from "./FAQItem";

interface FAQ {
  id: number;
  question: string;
  answer: string;
}

const faqData: FAQ[] = [
  {
    id: 1,
    question: "La question numéro 180",
    answer:
      "Lorem ipsum dolor sit amet consectetur. Dignissim enim tincidunt lacinia quam tempus nisl neque euismod risus.",
  },
  {
    id: 2,
    question: "La question numéro 180",
    answer:
      "Lorem ipsum dolor sit amet consectetur. Dignissim enim tincidunt lacinia quam tempus nisl neque euismod risus.",
  },
  {
    id: 3,
    question: "La question numéro 180",
    answer:
      "Lorem ipsum dolor sit amet consectetur. Dignissim enim tincidunt lacinia quam tempus nisl neque euismod risus.",
  },
  {
    id: 4,
    question: "La question numéro 180",
    answer:
      "Lorem ipsum dolor sit amet consectetur. Dignissim enim tincidunt lacinia quam tempus nisl neque euismod risus.",
  },
  {
    id: 5,
    question: "La question numéro 180",
    answer:
      "Lorem ipsum dolor sit amet consectetur. Dignissim enim tincidunt lacinia quam tempus nisl neque euismod risus.",
  },
  {
    id: 6,
    question: "La question numéro 180",
    answer:
      "Lorem ipsum dolor sit amet consectetur. Dignissim enim tincidunt lacinia quam tempus nisl neque euismod risus.",
  },
  {
    id: 7,
    question: "La question numéro 180",
    answer:
      "Lorem ipsum dolor sit amet consectetur. Dignissim enim tincidunt lacinia quam tempus nisl neque euismod risus.",
  },
  {
    id: 8,
    question: "La question numéro 180",
    answer:
      "Lorem ipsum dolor sit amet consectetur. Dignissim enim tincidunt lacinia quam tempus nisl neque euismod risus.",
  },
];

function FAQList() {
  return (
    <div className="flex flex-col gap-3 sm:gap-4 mb-10">
      {/* Desktop Search Bar */}
      <div className="bg-white hidden md:flex border-2 border-[#9AA4EA] rounded-xl items-center overflow-hidden">
        <input
          type="text"
          placeholder="Search..."
          className="flex-1 px-4 py-4 text-gray-800 bg-white outline-none placeholder-[#9D9D9D]"
        />
        <button className="px-6 py-4 bg-[#1BACE1] text-white font-medium hover:bg-[#1899cc] transition-colors duration-200 whitespace-nowrap">
          Chercher une question
        </button>
      </div>

      {/* Mobile Search Bar */}
      <div className="md:hidden flex flex-col gap-5">
        <input
          type="text"
          placeholder="Search..."
          className="w-full p-4 text-black bg-white rounded-xl border-2 border-[#9AA4EA] placeholder-[#9D9D9D]"
        />
        <button className="w-full p-4 rounded-xl bg-[#1BACE1] text-white font-medium hover:bg-[#1899cc] transition-colors duration-200">
          Chercher une question
        </button>
      </div>

      {faqData.map((faq) => (
        <FAQItem key={faq.id} question={faq.question} answer={faq.answer} />
      ))}
    </div>
  );
}

export default FAQList;
