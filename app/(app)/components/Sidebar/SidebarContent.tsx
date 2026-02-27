'use client';

import { memo } from 'react';
import { StaticImageData } from 'next/image';
import { SIDEBAR_MENU_ITEMS, SIDEBAR_CONTACT_INFO } from './constants';
import SidebarLogo from './SidebarLogo';
import TicketButton from './TicketButton';
import MenuSection from './MenuSection';
import MenuItem from './MenuItem';
import ContactSection from './ContactSection';

interface SidebarContentProps {
  companyLogo: StaticImageData;
  addButton: StaticImageData;
  activeMenuId: string;
  onMenuClick: (id: string) => void;
  onTicketClick: () => void;
}

/**
 * SidebarContent Component
 * Responsible for rendering sidebar content
 * Single Responsibility: Content rendering logic
 * 
 * Benefits:
 * - Reusable across different layout containers (desktop/mobile)
 * - Easy to test and maintain
 * - Clear separation of concerns
 */
const SidebarContent = memo(
  ({
    companyLogo,
    addButton,
    activeMenuId,
    onMenuClick,
    onTicketClick,
  }: SidebarContentProps) => (
    <div className="p-4 flex flex-col justify-center h-full">
      {/* Logo Section */}
      <SidebarLogo src={companyLogo} alt="Company Logo" />

      {/* Content Container */}
      <div className="pt-16 space-y-4 flex-1 flex flex-col">
        {/* Ticket Button */}
        <TicketButton
          label="Ouvrir un ticket"
          icon={addButton}
          onClick={onTicketClick}
          active={activeMenuId === 'ouvrir-un-ticket'}
        />

        {/* Menu Items */}
        <MenuSection>
          {SIDEBAR_MENU_ITEMS.map((item) => (
            <MenuItem
              key={item.id}
              id={item.id}
              label={item.label}
              icon={item.icon}
              isActive={activeMenuId === item.id}
              onClick={onMenuClick}
              path={item.path}
            />
          ))}
        </MenuSection>

        {/* Contact Section - Sticky Bottom */}
        <div className="mt-auto pt-4 border-t border-gray-200">
          <ContactSection
            title="Nos contacts"
            contacts={SIDEBAR_CONTACT_INFO}
          />
        </div>
      </div>
    </div>
  )
);

SidebarContent.displayName = 'SidebarContent';

export default SidebarContent;
