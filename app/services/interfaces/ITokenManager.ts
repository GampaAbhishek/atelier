/**
 * ITokenManager Interface
 * Defines the contract for token storage and retrieval
 * Follows Single Responsibility Principle
 */

export interface ITokenManager {
  setAccessToken(token: string): void;
  getAccessToken(): string | null;
  setRefreshToken(token: string): void;
  getRefreshToken(): string | null;
  setCustomerId(id: number): void;
  getCustomerId(): number | null;
  clearTokens(): void;
  isTokenAvailable(): boolean;
}
