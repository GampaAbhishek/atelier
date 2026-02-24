'use client';

import React from 'react';

interface NoAnswerCardProps {
  onOpenTicket: () => void;
}

function NoAnswerCard({ onOpenTicket }: NoAnswerCardProps) {
  return (
    <div className="border-2 border-[#1BACE1] rounded-lg sm:rounded-xl lg:rounded-2xl p-4 sm:p-5 lg:p-6 flex flex-col gap-4 sm:gap-5">
      <h2 className="text-2xl sm:text-3xl lg:text-4xl font-semibold text-gray-900">
        Question non répondu ?
      </h2>
      <p className="text-sm sm:text-base text-gray-700 leading-relaxed">
        Lorem ipsum dolor sit amet consectetur. Dignissim enim tincidunt
        lacinia quam tempus nisl neque euismod risus. Netus urna fames dictum
        donec nibh a arcu id. Nunc adipiscing etiam auctor sed velit.
        Tincidunt sed maecenas cras viverra ultricies sed
      </p>
      <div className="flex w-full justify-end pt-2 sm:pt-3">
        <button
          onClick={onOpenTicket}
          className="bg-[#1BACE1] hover:bg-[#1899cc] text-white text-sm sm:text-base font-medium py-2.5 sm:py-3 px-5 sm:px-6 rounded-lg transition-colors duration-200 focus:outline-none focus:ring-2 focus:ring-[#1BACE1] focus:ring-offset-2"
          aria-label="Ouvrir un ticket"
        >
          Ouvrir un ticket
        </button>
      </div>
    </div>
  );
}

export default NoAnswerCard;
