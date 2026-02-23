'use client';

import { memo, useCallback } from 'react';
import Image from 'next/image';
import { HeaderActionItem } from './headerConstants';

interface HeaderActionsProps {
  actions: HeaderActionItem[];
  onActionClick?: (actionId: string) => void;
  className?: string;
}

/**
 * HeaderActions Component
 * Single Responsibility: Render header action icons with optional badges
 */
const HeaderActions = memo(
  ({ actions, onActionClick, className = '' }: HeaderActionsProps) => {
    const handleActionClick = useCallback(
      (actionId: string) => {
        onActionClick?.(actionId);
      },
      [onActionClick]
    );

    return (
      <div className={`flex items-center gap-4  ${className}`}>
        {actions.map((action) => (
          <div key={action.id} className="relative inline-block">
            <button
              onClick={() => handleActionClick(action.id)}
              className="hover:bg-gray-100  cursor-pointer p-2 rounded-lg transition-colors duration-200 relative group"
              aria-label={action.alt}
              title={action.alt}
            >
              <Image
                src={action.icon}
                alt={action.alt}
                width={24}
                height={24}
                className="w-6 h-6 sm:w-6 sm:h-6 max-sm:w-5 max-sm:h-3"
              />

              {/* Badge indicator */}
              {action.badge !== undefined && action.badge > 0 && (
                <span className="absolute top-1 right-1 bg-red-500 text-white text-xs font-bold rounded-full w-5 h-5 flex items-center justify-center">
                  {action.badge > 9 ? '9+' : action.badge}
                </span>
              )}
            </button>

            {/* Hover tooltip */}
            <div className="absolute bottom-full left-1/2 transform -translate-x-1/2 mb-2 px-2 py-1 bg-gray-800 text-white text-xs rounded opacity-0 group-hover:opacity-100 transition-opacity duration-200 pointer-events-none whitespace-nowrap z-50">
              {action.alt}
            </div>
          </div>
        ))}
      </div>
    );
  }
);

HeaderActions.displayName = 'HeaderActions';

export default HeaderActions;
