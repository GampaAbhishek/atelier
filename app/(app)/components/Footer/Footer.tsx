import React, { useMemo } from 'react';
import FooterSection from './FooterSection';
import FooterContact from './FooterContact';
import FooterSocial from './FooterBottom';
import {
  FOOTER_SECTIONS,
  FOOTER_CONTACT,
  FOOTER_LEGAL,
  FOOTER_SOCIAL_LINKS,
  FOOTER_SECTION_KEYS,
} from './constants';

/**
 * Footer Component
 * Main orchestrator component that composes footer sections
 * Follows composition and dependency injection patterns
 * Leverages constants for centralized configuration
 */
const Footer: React.FC = () => {
  // Memoize sections to prevent unnecessary re-renders
  const sections = useMemo(
    () =>
      FOOTER_SECTION_KEYS.map((key) => {
        const section = FOOTER_SECTIONS[key as keyof typeof FOOTER_SECTIONS];
        return {
          key,
          ...section,
        };
      }),
    []
  );

  return (
    <footer className="bg-[#0F0A32] text-slate-200  px-6 py-8  border-t border-slate-800 mt-auto" aria-label="Pied de page">
      {/* Main sections container */}
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-5 gap-4 sm:gap-6 lg:gap-8 mb-5">
          {sections.map((section) => (
            <FooterSection
              key={section.key}
              title={section.title}
              links={[...section.links]}
            />
          ))}
        </div>

        {/* Contact and Social Section */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-2 gap-8 sm:gap-6  pt-3 border-t border-slate-800">
          <FooterContact
            phone={FOOTER_CONTACT.phone}
            address={FOOTER_CONTACT.address}
            zipCity={FOOTER_CONTACT.zipCity}
            email={FOOTER_CONTACT.email}
          />
          <FooterSocial socialLinks={FOOTER_SOCIAL_LINKS} />
        </div>
      </div>

      {/* Bottom bar with legal info */}
      <div className="max-w-7xl mx-auto border-t border-slate-800 pt-6 sm:pt-8">
        <p className="text-xs sm:text-sm text-slate-400 text-center">{FOOTER_LEGAL.copyright}</p>
        <p className="text-xs sm:text-sm text-slate-600 text-center mt-2 sm:mt-3">{FOOTER_LEGAL.disclaimer}</p>
      </div>
    </footer>
  );
};

export default Footer;

