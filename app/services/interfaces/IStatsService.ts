/**
 * IStatsService Interface
 * Defines the contract for statistics operations
 */


export interface StatsResponse {
  tempsMonReponse: {
    label: string;
    value: string;
  };
  horaireOuverture: {
    label: string;
    value: string;
  };
  ticketsOuverts: {
    label: string;
    value: number | string;
  };
  ticketsResolus: {
    label: string;
    value: number | string;
  };
  averageResponseTime : string;
    openTickets : number;   
    resolvedTickets : number;
  message?: string;
}

export interface IStatsService {
  getDashboardStats(token: string): Promise<StatsResponse>;
}
