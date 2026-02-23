import React, { memo, ReactNode } from 'react';

interface MenuSectionProps {
  children: ReactNode;
}

/**
 * MenuSection Component
 * Container for menu items
 * Single Responsibility: Menu section layout
 */
const MenuSection = memo(({ children }: MenuSectionProps) => (
  <div className="flex gap-2.5 flex-col pt-5 items-center justify-center w-full">
    {children}
  </div>
));

MenuSection.displayName = 'MenuSection';

export default MenuSection;
