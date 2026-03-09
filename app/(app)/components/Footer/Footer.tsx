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
import Logo from '@/public/Logo.svg';
import Image from 'next/image';
import Location from '@/public/Sidebar/location.svg';
import Phone from '@/public/Sidebar/mobileIcon.png';
import Mail from '@/public/Sidebar/mailIcon.png';

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
    <footer className="bg-[#0F0A32] text-slate-200 p-[70px_0_50px_0]   border-t border-slate-800 mt-auto" aria-label="Pied de page">
      {/* Main sections container */}
      <div className="max-w-7xl mx-auto">
        <div className="hidden md:grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-4 sm:gap-6 lg:gap-1 mb-5 p-4">
          <div className='flex flex-col gap-2'>
            <Image
              src={Logo}
              alt="Atelier Logo"
              width={150}
              height={50}
              className="mb-4"
            />
            <div className='flex flex-row gap-3'>
              <Image src={Phone} alt="Phone Icon" width={15} height={15} />
              {/* <div className='flex flex-col'> */}
              <span className='text-sm text-slate-400'>04 84 89 41 14</span>
              {/* </div> */}
            </div>
            <div className='flex flex-row gap-3'><Image
              src={Location}
              alt="Location Icon"
              width={15}
              height={15}
              className='mt-3'
            />
              <span className='text-sm text-slate-400 w-[140px]'>24 Avenue du prado Entree 2, Niveau 3 13006 Marseille</span>
            </div>
            <div className='flex flex-row gap-3 justify-center items-center'><Image
              src={Mail}
              alt="Mail Icon"
              width={15}
              height={15}
            />
              <span className='text-sm text-slate-400'>contact@atelierinfonumerik.fr</span>
            </div>
          </div>
          {sections.map((section) => (
            <FooterSection
              key={section.key}
              title={section.title}
              links={[...section.links]}
              link={section.link}
            />
          ))}
        </div>
         <div className="md:hidden flex flex-col gap-6  mb-5 p-4">
          <div className='flex flex-col gap-2'>
            <div className='w-full flex justify-center'>
              <Image
              src={Logo}
              alt="Atelier Logo"
              width={150}
              height={50}
              className="mb-4 justify-center "
            />
            </div>
            <div className='flex flex-row gap-3'>
              <Image src={Phone} alt="Phone Icon" width={15} height={15} />
              {/* <div className='flex flex-col'> */}
              <span className='text-sm text-slate-400'>04 84 89 41 14</span>
              {/* </div> */}
            </div>
            <div className='flex flex-row gap-3'><Image
              src={Location}
              alt="Location Icon"
              width={15}
              height={15}
              className='mt-3'
            />
              <span className='text-sm text-slate-400 w-[140px]'>24 Avenue du prado Entree 2, Niveau 3 13006 Marseille</span>
            </div>
            <div className='flex flex-row gap-3 items-center'><Image
              src={Mail}
              alt="Mail Icon"
              width={15}
              height={15}
            />
              <span className='text-sm text-slate-400'>contact@atelierinfonumerik.fr</span>
            </div>
          </div>
          <div className='grid grid-cols-2 gap-3'>
            {sections.map((section) => (
            <FooterSection
              key={section.key}
              title={section.title}
              links={[...section.links]}
              link={section.link}
            />
          ))}
          </div>
        </div>
      </div>

      {/* Bottom bar with legal info */}
      <div className="max-w-7xl mx-auto pt-6 sm:pt-8">
        <div className="max-sm:flex max-sm:flex-col flex flex-row  gap-4 items-center">
          <p className="text-sm sm:text-sm text-slate-400 ml-3">© 2020 
            <span style={{ color: '#00adfc' }} className='ml-2 mr-2 text-sm'><a style={{ color: '#00adfc' }} href="https://atelierinfonumerik.fr" className='text-sm'>Atelier Infonumerik</a></span>
             – Tous droits réservés. – Prestataire informatique de l&apos;extrême dans toute la France.</p>
          <FooterSocial socialLinks={FOOTER_SOCIAL_LINKS} />
        </div>
      </div>
    </footer>
  );
};

export default Footer;

