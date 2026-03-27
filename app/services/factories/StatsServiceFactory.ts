/**
 * StatsServiceFactory
 * Creates stats service instances following Factory Pattern
 */

import { StatsService } from "../stats/StatsService";
import { StatsRepository } from "../repositories/StatsRepository";

let statsRepository: StatsRepository | null = null;

export function getStatsRepository(): StatsRepository {
  if (!statsRepository) {
    const statsService = new StatsService();
    statsRepository = new StatsRepository(statsService);
  }
  return statsRepository;
}

// Reset repository (useful for testing)
export function resetStatsRepository(): void {
  statsRepository = null;
}
