/**
 * StatsRepository
 * Orchestrates stats operations with service coordination
 * Follows Repository and Dependency Injection patterns
 */

import { IStatsService, StatsResponse } from "../interfaces/IStatsService";

export class StatsRepository {
  constructor(private statsService: IStatsService) {}

  /**
   * Get dashboard statistics
   */
  async getDashboardStats(token: string): Promise<{ success: boolean; data?: StatsResponse; error?: string }> {
    try {
      const response = await this.statsService.getDashboardStats(token);
      return {
        success: true,
        data: response,
      };
    } catch (error) {
      return {
        success: false,
        error: error instanceof Error ? error.message : "Une erreur s'est produite",
      };
    }
  }
}
