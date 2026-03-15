/**
 * Service Factory
 * Creates service instances following Factory Pattern
 * Simplifies dependency injection and service initialization
 */

import { AuthService } from "../auth/AuthService";
import { TokenManager } from "../auth/TokenManager";
import { AuthRepository } from "../repositories/AuthRepository";

let authRepository: AuthRepository | null = null;

export function getAuthRepository(): AuthRepository {
  if (!authRepository) {
    const authService = new AuthService();
    const tokenManager = new TokenManager();
    authRepository = new AuthRepository(authService, tokenManager);
  }
  return authRepository;
}

// Reset repository (useful for testing or logout scenarios)
export function resetAuthRepository(): void {
  authRepository = null;
}
