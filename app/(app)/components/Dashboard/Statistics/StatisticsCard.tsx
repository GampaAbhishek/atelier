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
      className={`${data.backgroundColor} rounded-lg px-4 py-5 sm:px-5 sm:py-6 md:px-6 md:py-5 flex items-center justify-center text-center transition-transform duration-300 hover:shadow-lg hover:scale-105`}
      aria-label={data.label}
    >
      <div className="flex flex-col gap-5">
        <p className="text-white text-sm sm:text-base md:text-sm lg:text-sm xl:text-lg 2xl:text-2xl 3xl:text-3xl 4xl:text-4xl">
          {data.label}
        </p>
        <span className="text-white text-sm sm:text-base md:text-sm lg:text-sm xl:text-lg 2xl:text-2xl 3xl:text-3xl 4xl:text-4xl">
          {data?.time}
        </span>
      </div>
    </div>
  );
};

export default StatisticsCard;
