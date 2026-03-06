import React from 'react';
import { ITab } from './monParcConstants';

/**
 * TabBar Component
 * Displays navigation tabs for switching between different views
 * Follows SOLID Principles:
 * - Single Responsibility: Only handles tab UI and selection
 * - Open/Closed: Can be extended with new tabs without modification
 */
interface TabBarProps {
  tabs: ITab[];
  activeTab: string;
  onTabChange: (tabId: string) => void;
}

const TabBar: React.FC<TabBarProps> = ({ tabs, activeTab, onTabChange }) => {
  return (
    <div className="flex gap-2 mb-6">
      {tabs.map((tab) => (
        <button
          key={tab.id}
          onClick={() => onTabChange(tab.id)}
          className={`px-4 py-2 font-semibold text-lg transition-all duration-200 ${
            activeTab === tab.id
              ? 'text-[#024272] border-2 border-[#309DD7] rounded-lg'
              : 'text-[#8BABC4] hover:text-[#024272]'
          }`}
        >
          {tab.label}
        </button>
      ))}
    </div>
  );
};

export default TabBar;