/**
 * IStatsService Interface
 * Defines the contract for statistics operations
 */


export interface StatsResponse {
  averageResponseTime: string;
  openTickets: number;
  resolvedTickets: number;
  message?: string;
}

export interface IStatsService {
  getDashboardStats(token: string): Promise<StatsResponse>;
}
