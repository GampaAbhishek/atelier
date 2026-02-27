'use client';

import React, { useState } from 'react';

interface FAQItemProps {
  question: string;
  answer?: string;
}

function FAQItem({ question, answer }: FAQItemProps) {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <button
      onClick={() => setIsOpen(!isOpen)}
      className="w-full text-left bg-white border-2 border-[#9AA4EA] rounded-xl p-4 sm:p-5 transition-all  focus:outline-none"
      aria-expanded={isOpen}
      aria-label={`FAQ: ${question}`}
    >
      <div className="flex items-center justify-between gap-3 sm:gap-4">
        <span className="text-base sm:text-lg font-medium text-gray-800">
          {question}
        </span>
        <svg
          className={`w-5 h-5 sm:w-6 sm:h-6 text-[#1BACE1] flex-shrink-0 transition-transform duration-300 ${
            isOpen ? 'rotate-45' : ''
          }`}
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
          aria-hidden="true"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2}
            d="M12 4v16m8-8H4"
          />
        </svg>
      </div>
      {isOpen && answer && (
        <p className="mt-4 text-sm sm:text-base text-gray-600 leading-relaxed">
          {answer}
        </p>
      )}
    </button>
  );
}

export default FAQItem;
