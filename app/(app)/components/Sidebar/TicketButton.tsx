import React, { memo } from 'react';
import Image, { StaticImageData } from 'next/image';

interface TicketButtonProps {
  label: string;
  icon: StaticImageData;
  onClick?: () => void;
  className?: string;
}

/**
 * TicketButton Component
 * Responsible for rendering the ticket creation button
 * Single Responsibility: Button rendering with icon
 */
const TicketButton = memo(
  ({ label, icon, onClick, className = '' }: TicketButtonProps) => (
    <button
      onClick={onClick}
      className={`border w-full rounded-2xl cursor-pointer border-black h-16 flex gap-5 items-center justify-center hover:bg-gray-50 transition-colors ${className}`}
      aria-label={label}
    >
      <span className="text-[16px] font-medium">{label}</span>
      <Image src={icon} alt={label} width={30} height={30} />
    </button>
  )
);

TicketButton.displayName = 'TicketButton';

export default TicketButton;
