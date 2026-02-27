import React from 'react';
import FAQList from './FAQList';

function HeaderTitle() {
  return (
    <div className="flex flex-col gap-4 sm:gap-5">
      <h1 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-[#024272] ">
        Foire aux questions
      </h1>
      <p className=" w-full sm:w-11/12 lg:w-10/12 text-sm sm:text-base text-gray-700 leading-relaxed">
        Lorem ipsum dolor sit amet consectetur. Dignissim enim tincidunt
        lacinia quam tempus nisl neque euismod risus. Netus urna fames dictum
        donec nibh a arcu id. Nunc adipiscing etiam auctor sed velit.
        Tincidunt sed maecenas cras viverra ultricies sed
      </p>
    </div>
  );
}

function Header() {
  return (
    <div className="flex flex-col gap-8 sm:gap-9 lg:gap-10">
      <HeaderTitle />
      <div>
        <FAQList />
      </div>
    </div>
  );
}

export default Header;
