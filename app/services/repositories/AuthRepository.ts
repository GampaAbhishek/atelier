/**
 * AuthRepository
 * Acts as a facade/orchestrator for authentication operations
 * Follows Repository and Dependency Injection patterns
 */

import { IAuthService, LoginCredentials, TokenResponse, TokenInfo } from "../interfaces/IAuthService";
import { ITokenManager } from "../interfaces/ITokenManager";

export class AuthRepository {
  constructor(
    private authService: IAuthService,
    private tokenManager: ITokenManager
  ) {}

  async login(credentials: LoginCredentials): Promise<TokenResponse> {
    const response = await this.authService.login(credentials);

    // Store tokens and customer info
    this.tokenManager.setAccessToken(response.accessToken);
    this.tokenManager.setRefreshToken(response.refreshToken);
    this.tokenManager.setCustomerId(response.customer.id);

    return response;
  }

  async validateToken(): Promise<boolean> {
    const token = this.tokenManager.getAccessToken();

    if (!token) {
      return false;
    }

    try {
      await this.authService.validateToken(token);
      return true;
    } catch {
      // Token is invalid, clear it
      this.tokenManager.clearTokens();
      return false;
    }
  }

  getAccessToken(): string | null {
    return this.tokenManager.getAccessToken();
  }

  getCustomerId(): number | null {
    return this.tokenManager.getCustomerId();
  }

  isAuthenticated(): boolean {
    return this.tokenManager.isTokenAvailable();
  }

  logout(): void {
    this.tokenManager.clearTokens();
  }
}
