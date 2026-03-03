import React from "react";
import type { StatisticCardData } from "./statisticsConstants";

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
      className={`${data.backgroundColor} rounded-lg px-6 py-8 sm:px-7 sm:py-10 md:px-8 md:py-12 lg:px-8 lg:py-12 min-h-[150px] sm:min-h-[160px] md:min-h-[180px] lg:min-h-[160px] flex items-center justify-center text-center transition-transform duration-300 hover:shadow-lg hover:scale-105`}
      aria-label={data.label}
    >
      <div className="flex flex-col gap-6 sm:gap-7">
        <p className="text-white text-base sm:text-lg md:text-base lg:text-lg xl:text-xl 2xl:text-2xl font-medium">
          {data.label}
        </p>
        <span className="text-white text-xl sm:text-2xl md:text-2xl lg:text-3xl xl:text-4xl 2xl:text-5xl font-semibold">
          {data?.time}
        </span>
      </div>
    </div>
  );
};

export default StatisticsCard;
