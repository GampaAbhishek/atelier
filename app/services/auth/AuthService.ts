/**
 * AuthService Implementation
 * Handles authentication API calls
 * Follows Dependency Injection and Single Responsibility Principle
 */

import {
  IAuthService,
  LoginCredentials,
  TokenResponse,
  TokenInfo,
} from "../interfaces/IAuthService";

const API_BASE_URL = process.env.NEXT_PUBLIC_API_URL || "http://localhost:3001";

export class AuthService implements IAuthService {
  async login(credentials: LoginCredentials): Promise<TokenResponse> {
    try {
      const response = await fetch(`${API_BASE_URL}/auth/login`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(credentials),
      });

      if (!response.ok) {
        const error = await response.json();
        console.log("Login error response:", error);
        throw new Error(error.message || "Login failed");
      }

      const data: TokenResponse = await response.json();
      return data;
    } catch (error) {
      throw new Error(
        `Authentication error: ${error instanceof Error ? error.message : "Unknown error"}`
      );
    }
  }

  async validateToken(token: string): Promise<TokenInfo> {
    try {
      const response = await fetch(`${API_BASE_URL}/auth/token-info`, {
        method: "GET",
        headers: {
          Authorization: `Bearer ${token}`,
          "Content-Type": "application/json",
        },
      });

      if (!response.ok) {
        throw new Error("Token validation failed");
      }

      const data: TokenInfo = await response.json();
      return data;
    } catch (error) {
      throw new Error(
        `Token validation error: ${error instanceof Error ? error.message : "Unknown error"}`
      );
    }
  }

  async logout(): Promise<void> {
    try {
      await fetch(`${API_BASE_URL}/auth/logout`, {
        method: "POST",
      });
    } catch (error) {
      console.error("Logout error:", error);
    }
  }
}
