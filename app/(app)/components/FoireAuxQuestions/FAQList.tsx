'use client';

import React from 'react';
import FAQItem from './FAQItem';

interface FAQ {
  id: number;
  question: string;
  answer: string;
}

const faqData: FAQ[] = [
  {
    id: 1,
    question: 'La question numéro 180',
    answer: 'Lorem ipsum dolor sit amet consectetur. Dignissim enim tincidunt lacinia quam tempus nisl neque euismod risus.'
  },
  {
    id: 2,
    question: 'La question numéro 180',
    answer: 'Lorem ipsum dolor sit amet consectetur. Dignissim enim tincidunt lacinia quam tempus nisl neque euismod risus.'
  },
  {
    id: 3,
    question: 'La question numéro 180',
    answer: 'Lorem ipsum dolor sit amet consectetur. Dignissim enim tincidunt lacinia quam tempus nisl neque euismod risus.'
  },
  {
    id: 4,
    question: 'La question numéro 180',
    answer: 'Lorem ipsum dolor sit amet consectetur. Dignissim enim tincidunt lacinia quam tempus nisl neque euismod risus.'
  },
  {
    id: 5,
    question: 'La question numéro 180',
    answer: 'Lorem ipsum dolor sit amet consectetur. Dignissim enim tincidunt lacinia quam tempus nisl neque euismod risus.'
  },
  {
    id: 6,
    question: 'La question numéro 180',
    answer: 'Lorem ipsum dolor sit amet consectetur. Dignissim enim tincidunt lacinia quam tempus nisl neque euismod risus.'
  },
  {
    id: 7,
    question: 'La question numéro 180',
    answer: 'Lorem ipsum dolor sit amet consectetur. Dignissim enim tincidunt lacinia quam tempus nisl neque euismod risus.'
  },
  {
    id: 8,
    question: 'La question numéro 180',
    answer: 'Lorem ipsum dolor sit amet consectetur. Dignissim enim tincidunt lacinia quam tempus nisl neque euismod risus.'
  },
];

function FAQList() {
  return (
    <div className="flex flex-col gap-3 sm:gap-4">
        <div className='bg-white border-2  rounded-xl flex justify-between border-[#9AA4EA]'>
            <span className="text-[#9D9D9D] items-center pt-[16px] pl-[10px]">Search...</span>
            <button className='p-4 rounded-l-xl rounded-r-[10px] bg-[#1BACE1]'>Chercher une question</button>
        </div>
      {faqData.map((faq) => (
        <FAQItem
          key={faq.id}
          question={faq.question}
          answer={faq.answer}
        />
      ))}
    </div>
  );
}

export default FAQList;
