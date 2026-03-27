/**
 * StatsService Implementation
 * Handles statistics API calls
 */

import {
  IStatsService,
  StatsResponse,
} from "../interfaces/IStatsService";

const API_BASE_URL = process.env.NEXT_PUBLIC_API_URL || "http://localhost:3001";

export class StatsService implements IStatsService {
  /**
   * Get dashboard statistics
   */
  async getDashboardStats(token: string): Promise<StatsResponse> {
    try {
      const response = await fetch(`${API_BASE_URL}/tickets/stats/dashboard`, {
        method: "GET",
        headers: {
          Authorization: `Bearer ${token}`,
          "Content-Type": "application/json",
        },
      });

      if (!response.ok) {
        if (response.status === 401) {
          if (typeof window !== "undefined") {
            window.location.href = "/login";
          }
          throw new Error("Unauthorized. Redirecting to login.");
        }
        const error = await response.json().catch(() => ({}));
        throw new Error(
          error.message || `Failed to get dashboard stats: ${response.statusText}`
        );
      }

      const data: StatsResponse = await response.json();
      return data;
    } catch (error) {
      throw new Error(
        `Dashboard stats error: ${error instanceof Error ? error.message : "Unknown error"}`
      );
    }
  }
}
