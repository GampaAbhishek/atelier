import React from 'react';
import type { StatisticCardData } from './statisticsConstants';

interface StatisticsCardProps {
  data: StatisticCardData;
}

/**
 * StatisticsCard Component
 * Responsible for rendering a single statistic card
 * Follows Single Responsibility Principle
 */
const StatisticsCard: React.FC<StatisticsCardProps> = ({ data }) => {
  return (
    <div
      className={`${data.tailwindColor} rounded-lg px-4 py-5 sm:px-5 sm:py-6 md:px-6 md:py-5 flex items-center justify-center text-center transition-transform duration-300 hover:shadow-lg hover:scale-105`}
      aria-label={data.label}
    >
      <p className="text-white text-sm sm:text-base md:text-sm font-medium">
        {data.label}
      </p>
    </div>
  );
};

export default StatisticsCard;
