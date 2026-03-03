import React from 'react';

interface FooterLinkProps {
  label: string;
  href: string;
}

interface FooterSectionProps {
  title: string;
  links: FooterLinkProps[];
}

/**
 * FooterSection Component
 * Responsible for rendering a single section of footer links
 * Follows Single Responsibility Principle
 */
const FooterSection: React.FC<FooterSectionProps> = ({ title, links } : {
    title: string;
    links: FooterLinkProps[];
}) => {
  return (
    <div className="flex flex-col ">
      <h3 className="text-xs sm:text-sm font-bold uppercase tracking-wider mb-3 sm:mb-4 text-white leading-tight">{title}</h3>
      <ul className=" list-none p-0 m-0">
        {links.map((link, index) => (
          <li key={`${title}-link-${index}`} className="min-h-[1.5rem] sm:min-h-[1.75rem]">
            <a
              href={link.href}
              className="text-xs sm:text-sm text-slate-400 hover:text-white hover:underline transition-colors duration-200 active:text-blue-400 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-slate-900 focus:ring-blue-500 rounded px-1"
            >
              {link.label}
            </a>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default FooterSection;
