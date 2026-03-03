import React, { memo } from 'react';
import Image, { StaticImageData } from 'next/image';
import { ContactInfo } from './constants';

interface ContactSectionProps {
  title: string;
  contacts: ContactInfo[];
}

/**
 * ContactSection Component
 * Responsible for rendering contact information
 * Single Responsibility: Contact section rendering
 */
const ContactSection = memo(({ title, contacts }: ContactSectionProps) => (
  <div className="border rounded-2xl border-black h-auto mt-4 p-4">
    <div className="flex flex-col items-center justify-center gap-4">
      <span className="text-[16px] font-medium text-black">{title}</span>
      <div className="flex flex-col gap-4 w-full">
        {contacts.map((contact) => (
          <div key={contact.id} className="flex items-start gap-4">
            <Image
              src={contact.icon}
              alt={contact.type}
              width={15}
              height={15}
            />
            <span className="max-sm:text-[10px] md:text-[9px] lg:text-[10px] xl:text-[13px] 2xl:text-[14px] text-black font-medium">{contact.value}</span>
          </div>
        ))}
      </div>
    </div>
  </div>
));

ContactSection.displayName = 'ContactSection';

export default ContactSection;
