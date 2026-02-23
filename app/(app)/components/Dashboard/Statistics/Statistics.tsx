import React from 'react';
import StatisticsCard from './StatisticsCard';
import { STATISTICS_DATA } from './statisticsConstants';

/**
 * Statistics Component
 * Displays a collection of statistics cards in a responsive grid layout
 * Follows SOLID Principles:
 * - Single Responsibility: Only manages layout and renders cards
 * - Open/Closed: Can be extended with new statistics without modification
 * - Dependency Inversion: Depends on data structure abstraction
 */
const Statistics: React.FC = () => {
  return (
    <section className="flex flex-col pt-6 sm:pt-7 md:pt-8 px-4 sm:px-5 md:px-0">
      {/* Section Title */}
      <h2 className="pl-5 text-2xl sm:text-3xl md:text-2xl font-semibold text-gray-900 dark:text-white mb-4 sm:mb-5 md:mb-4">
        Statistiques
      </h2>

      {/* Statistics Grid */}
      <div className="pl-5 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-4 gap-3 sm:gap-4 md:gap-5">
        {STATISTICS_DATA.map((statistic) => (
          <StatisticsCard key={statistic.id} data={statistic} />
        ))}
      </div>
    </section>
  );
};

export default Statistics;
