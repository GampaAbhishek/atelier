/**
 * TokenManager Implementation
 * Manages token storage using localStorage and cookies
 * Follows Single Responsibility Principle
 */

import { ITokenManager } from "../interfaces/ITokenManager";
import { CookieManager } from "../../utils/CookieManager";

const ACCESS_TOKEN_KEY = "atelier_access_token";
const REFRESH_TOKEN_KEY = "atelier_refresh_token";
const CUSTOMER_ID_KEY = "atelier_customer_id";

export class TokenManager implements ITokenManager {
  private isClient = typeof window !== "undefined";

  setAccessToken(token: string): void {
    if (this.isClient) {
      localStorage.setItem(ACCESS_TOKEN_KEY, token);
      CookieManager.setCookie(ACCESS_TOKEN_KEY, token, 7);
    }
  }

  getAccessToken(): string | null {
    if (this.isClient) {
      // Try to get from localStorage first, then from cookies
      const token = localStorage.getItem(ACCESS_TOKEN_KEY);
      if (token) return token;

      const cookieToken = CookieManager.getCookie(ACCESS_TOKEN_KEY);
      if (cookieToken) {
        localStorage.setItem(ACCESS_TOKEN_KEY, cookieToken);
        return cookieToken;
      }
    }
    return null;
  }

  setRefreshToken(token: string): void {
    if (this.isClient) {
      localStorage.setItem(REFRESH_TOKEN_KEY, token);
      CookieManager.setCookie(REFRESH_TOKEN_KEY, token, 30);
    }
  }

  getRefreshToken(): string | null {
    if (this.isClient) {
      const token = localStorage.getItem(REFRESH_TOKEN_KEY);
      if (token) return token;

      const cookieToken = CookieManager.getCookie(REFRESH_TOKEN_KEY);
      if (cookieToken) {
        localStorage.setItem(REFRESH_TOKEN_KEY, cookieToken);
        return cookieToken;
      }
    }
    return null;
  }

  setCustomerId(id: number): void {
    if (this.isClient) {
      const idString = id.toString();
      localStorage.setItem(CUSTOMER_ID_KEY, idString);
      CookieManager.setCookie(CUSTOMER_ID_KEY, idString, 7);
    }
  }

  getCustomerId(): number | null {
    if (this.isClient) {
      const id = localStorage.getItem(CUSTOMER_ID_KEY);
      if (id) return parseInt(id, 10);

      const cookieId = CookieManager.getCookie(CUSTOMER_ID_KEY);
      if (cookieId) {
        localStorage.setItem(CUSTOMER_ID_KEY, cookieId);
        return parseInt(cookieId, 10);
      }
    }
    return null;
  }

  clearTokens(): void {
    if (this.isClient) {
      localStorage.removeItem(ACCESS_TOKEN_KEY);
      localStorage.removeItem(REFRESH_TOKEN_KEY);
      localStorage.removeItem(CUSTOMER_ID_KEY);

      CookieManager.deleteCookie(ACCESS_TOKEN_KEY);
      CookieManager.deleteCookie(REFRESH_TOKEN_KEY);
      CookieManager.deleteCookie(CUSTOMER_ID_KEY);
    }
  }

  isTokenAvailable(): boolean {
    return this.getAccessToken() !== null;
  }
}
