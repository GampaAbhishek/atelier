'use client';

import { memo, useState, useCallback } from 'react';
import companyLogo from '../../../../public/Logo.svg';
import addButton from '../../../../public/Sidebar/addButton.png';
import MobileMenuToggle from './MobileMenuToggle';
import ResponsiveMenuContainer from './ResponsiveMenuContainer';
import SidebarContent from './SidebarContent';
import { useRouter } from 'next/navigation';

/**
 * SideBar Component
 * Main orchestrator component with responsive mobile-first design
 * Follows composition and dependency injection patterns
 * 
 * SOLID Principles Applied:
 * - Single Responsibility: Orchestrates sub-components, manages mobile state
 * - Open/Closed: Menu items are extensible via constants, easy to add features
 * - Interface Segregation: Props are minimal and specific
 * - Dependency Inversion: Depends on abstractions (constants, sub-components)
 * - Liskov Substitution: All sub-components are replaceable
 */
const SideBar = memo(() => {
  const [activeMenuId, setActiveMenuId] = useState<string>('dashboard');
  const [isMobileOpen, setIsMobileOpen] = useState(false);

  const router = useRouter();

  const handleMenuClick = useCallback(
    (id: string) => {
      setActiveMenuId(id);
      // Close mobile menu after selection
      setIsMobileOpen(false);
    },
    []
  );

  // eslint-disable-next-line react-hooks/preserve-manual-memoization
  const handleTicketClick = useCallback(() => {
    console.log('Open ticket modal');
    router.push('/ouvrir-un-ticket');
    setActiveMenuId('ouvrir-un-ticket');
    setIsMobileOpen(false);
  }, []);

  const toggleMobileMenu = useCallback(() => {
    setIsMobileOpen((prev) => !prev);
  }, []);

  const sidebarContent = (
    <SidebarContent
      companyLogo={companyLogo}
      addButton={addButton}
      activeMenuId={activeMenuId}
      onMenuClick={handleMenuClick}
      onTicketClick={handleTicketClick}
    />
  );

  return (
    <>
      {/* Mobile: Hamburger Toggle */}
      <MobileMenuToggle isOpen={isMobileOpen} onClick={toggleMobileMenu} />

      {/* Responsive Container with Desktop and Mobile Layouts */}
      <ResponsiveMenuContainer isOpen={isMobileOpen}>
        {sidebarContent}
      </ResponsiveMenuContainer>
    </>
  );
});

SideBar.displayName = 'SideBar';

export default SideBar;