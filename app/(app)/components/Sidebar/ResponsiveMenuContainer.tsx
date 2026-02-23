'use client';

import { memo, ReactNode } from 'react';

interface ResponsiveMenuContainerProps {
  isOpen: boolean;
  children: ReactNode;
}

/**
 * ResponsiveMenuContainer Component
 * Handles responsive layout and mobile drawer behavior
 * Single Responsibility: Responsive layout management
 */
const ResponsiveMenuContainer = memo(
  ({ isOpen, children }: ResponsiveMenuContainerProps) => (
    <>
      {/* Desktop Sidebar */}
      <aside className="hidden md:flex md:w-79 md:h-full md:flex-col md:bg-white md:shadow-lg md:overflow-y-auto">
        {children}
      </aside>

      {/* Mobile Drawer */}
      {isOpen && (
        <>
          {/* Overlay */}
          <div className="md:hidden fixed inset-0 bg-black bg-opacity-50 z-40" />

          {/* Mobile Sidebar */}
          <aside className="md:hidden fixed left-0 top-0 w-64 h-full bg-white shadow-lg overflow-y-auto z-40 pt-16">
            {children}
          </aside>
        </>
      )}
    </>
  )
);

ResponsiveMenuContainer.displayName = 'ResponsiveMenuContainer';

export default ResponsiveMenuContainer;
