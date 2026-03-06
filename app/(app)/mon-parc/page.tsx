import React from 'react';
import MonParc from '../components/MonParc/MonParc';

/**
 * Mon Parc Informatique Page
 * Displays comprehensive IT infrastructure information
 * Follows SOLID Principles:
 * - Single Responsibility: Only manages page layout and routing
 * - Open/Closed: Can be extended with new features without modification
 * - Dependency Inversion: Depends on MonParc component abstraction
 */
function MonParcPage() {
  return (
    <div className="flex flex-col gap-2 w-full bg-[#F1FAFF] p-8 pt-12 mb-6">
      {/* Page Header */}
      <div className="flex items-center gap-6 mb-8 pl-2">
        <h1 className="text-4xl font-bold text-[#024272]">Mon parc informatique</h1>
      </div>

      {/* Main Content */}
      <div className="pl-2">
        <MonParc />
      </div>
    </div>
  );
}

export default MonParcPage;
