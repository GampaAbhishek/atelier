import React from 'react';

interface FooterContactProps {
  phone: string;
  address: string;
  zipCity: string;
  email: string;
}

/**
 * FooterContact Component
 * Handles contact information display
 * Follows Single Responsibility Principle
 */
const FooterContact: React.FC<FooterContactProps> = ({
  phone,
  address,
  zipCity,
  email,
}) => {
  return (
    <div className="flex flex-col gap-4 sm:gap-6">
      <h3 className="text-xs sm:text-sm font-bold uppercase tracking-wider text-white leading-tight">Contacter</h3>
      <address className="flex flex-col gap-4 sm:gap-5 not-italic">
        <div className="flex items-start gap-2 sm:gap-3">
          <span className="text-lg sm:text-xl flex-shrink-0 mt-0.5">📞</span>
          <a
            href={`tel:${phone}`}
            className="text-xs sm:text-sm text-slate-400 hover:text-white hover:underline transition-colors duration-200 break-words focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-slate-900 focus:ring-blue-500 rounded px-1"
          >
            {phone}
          </a>
        </div>
        <div className="flex items-start gap-2 sm:gap-3">
          <span className="text-lg sm:text-xl flex-shrink-0 mt-0.5">📍</span>
          <p className="text-xs sm:text-sm text-slate-400 leading-relaxed break-words">
            {address}
            <br />
            {zipCity}
          </p>
        </div>
        <div className="flex items-start gap-2 sm:gap-3">
          <span className="text-lg sm:text-xl flex-shrink-0 mt-0.5">✉️</span>
          <a
            href={`mailto:${email}`}
            className="text-xs sm:text-sm text-slate-400 hover:text-white hover:underline transition-colors duration-200 break-words focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-slate-900 focus:ring-blue-500 rounded px-1"
          >
            {email}
          </a>
        </div>
      </address>
    </div>
  );
};

export default FooterContact;
