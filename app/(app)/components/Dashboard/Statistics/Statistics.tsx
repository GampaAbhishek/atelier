"use client";

import React, { useEffect } from 'react';
import StatisticsCard from './StatisticsCard';
import { STATISTICS_DATA } from './statisticsConstants';
import type { StatisticCardData } from './statisticsConstants';
import { useStats } from '@/app/hooks/useStats';

/**
 * Statistics Component
 * Displays a collection of statistics cards in a responsive grid layout
 * Fetches data from API and displays dashboard statistics
 * Follows SOLID Principles:
 * - Single Responsibility: Only manages layout and renders cards
 * - Open/Closed: Can be extended with new statistics without modification
 * - Dependency Inversion: Depends on data structure abstraction
 */
const Statistics: React.FC = () => {
  const { getDashboardStats, loading, error, stats } = useStats();
  const [displayStats, setDisplayStats] = React.useState<StatisticCardData[]>(STATISTICS_DATA);

  useEffect(() => {
    const fetchStats = async () => {
      const result = await getDashboardStats();
      console.log("result",result.data);
      
      if ( result.data) {
        const apiData = result;
        console.log("apiData",apiData);
        
        
        // Map API data to card format
        const mappedStats: StatisticCardData[] = [
          {
            id: 'response-4h',
            label:  'Temps moyen de réponse',
            backgroundColor: 'bg-[#55B6E5]',
            tailwindColor: 'bg-blue-400',
            time: apiData.data?.averageResponseTime ?? '4h',
          },
          {
            id: 'response-dark',
            label:  'Horaire d\'ouverture aujourd\'hui',
            backgroundColor: 'bg-[#024272]',
            tailwindColor: 'bg-blue-900',
            time:  '9h - 19h',
          },
          {
            id: 'response-light',
            label:  'Nombre de tickets ouverts',
            backgroundColor: 'bg-[#3C77AE]',
            tailwindColor: 'bg-blue-200',
            time: String(apiData.data?.openTickets ?? '5'),
          },
          {
            id: 'response-medium',
            label:  'Nombre de tickets résolus',
            backgroundColor: 'bg-[#309DD7]',
            tailwindColor: 'bg-blue-500',
            time: String(apiData.data?.resolvedTickets ?? '10'),
          },
        ];
        
        setDisplayStats(mappedStats);
      }
    };
    
    fetchStats();
  }, [getDashboardStats]);

  return (
    <section className="flex flex-col pt-6 sm:pt-7 md:pt-8 px-4 sm:px-5 md:px-0">
      {/* Section Title */}
      <h2 className="pl-5 text-2xl sm:text-3xl md:text-2xl font-semibold text-black  mb-4 sm:mb-5 md:mb-4">
        Statistiques
      </h2>

      {/* Loading or Error State */}
      {error && (
        <div className="pl-5 text-red-500 text-sm">
          Erreur: {error}
        </div>
      )}
      
      {/* Statistics Grid */}
      <div className="pl-5 pr-2 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-4 gap-3 sm:gap-4 md:gap-5">
        {displayStats.map((statistic) => (
          <StatisticsCard key={statistic.id} data={statistic} />
        ))}
      </div>
    </section>
  );
};

export default Statistics;
