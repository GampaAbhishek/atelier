'use client';

import { memo } from 'react';

interface MobileMenuToggleProps {
  isOpen: boolean;
  onClick: () => void;
}

/**
 * MobileMenuToggle Component
 * Responsible for mobile hamburger menu toggle button
 * Single Responsibility: Toggle button rendering
 */
const MobileMenuToggle = memo(({ isOpen, onClick }: MobileMenuToggleProps) => (
  <button
    onClick={onClick}
    className="md:hidden fixed top-4 left-4 z-50 p-2 bg-white rounded-lg shadow-md hover:shadow-lg transition-shadow"
    aria-label="Toggle sidebar"
    aria-expanded={isOpen}
  >
    <div className="flex flex-col gap-1.5">
      <span
        className={`h-0.5 w-6 bg-black transition-transform duration-300 ${
          isOpen ? 'rotate-45 translate-y-2' : ''
        }`}
      />
      <span
        className={`h-0.5 w-6 bg-black transition-opacity duration-300 ${
          isOpen ? 'opacity-0' : ''
        }`}
      />
      <span
        className={`h-0.5 w-6 bg-black transition-transform duration-300 ${
          isOpen ? '-rotate-45 -translate-y-2' : ''
        }`}
      />
    </div>
  </button>
));

MobileMenuToggle.displayName = 'MobileMenuToggle';

export default MobileMenuToggle;
