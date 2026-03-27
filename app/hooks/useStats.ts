/**
 * useStats Hook
 * Custom React hook for statistics operations in components
 * Follows React Hooks best practices and Dependency Injection
 */

"use client";

import { useState, useCallback, useEffect } from "react";
import { getStatsRepository } from "../services/factories/StatsServiceFactory";
import { getAuthRepository } from "../services/factories/ServiceFactory";
import type { StatsResponse } from "../services/interfaces/IStatsService";

interface UseStatsReturn {
  getDashboardStats: () => Promise<{ success: boolean; data?: StatsResponse }>;
  loading: boolean;
  error: string | null;
  stats: StatsResponse | null;
}

export function useStats(): UseStatsReturn {
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const [stats, setStats] = useState<StatsResponse | null>(null);

  const statsRepository = getStatsRepository();
  const authRepository = getAuthRepository();

  const getDashboardStats = useCallback(
    async (): Promise<{ success: boolean; data?: StatsResponse }> => {
      setLoading(true);
      setError(null);

      try {
        const token = authRepository.getAccessToken();
        if (!token) {
          throw new Error("Authentification requise");
        }

        const result = await statsRepository.getDashboardStats(token);

        if (!result.success) {
          setError(result.error || "Erreur lors de la récupération des statistiques");
          return { success: false };
        }

        setStats(result.data || null);
        return { success: true, data: result.data };
      } catch (err) {
        const errorMessage =
          err instanceof Error ? err.message : "Erreur inconnue";
        setError(errorMessage);
        return { success: false };
      } finally {
        setLoading(false);
      }
    },
    [statsRepository, authRepository]
  );

  return {
    getDashboardStats,
    loading,
    error,
    stats,
  };
}
