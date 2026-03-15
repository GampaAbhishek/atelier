/**
 * Cookie Manager Utility
 * Safely manages cookies for token storage
 * Used by TokenManager for persistent secure storage
 */

export class CookieManager {
  private static isClient = typeof window !== "undefined";

  static setCookie(name: string, value: string, days = 7): void {
    if (!this.isClient) return;

    const expirationDate = new Date();
    expirationDate.setTime(expirationDate.getTime() + days * 24 * 60 * 60 * 1000);
    const expires = `expires=${expirationDate.toUTCString()}`;

    // Set cookie as HttpOnly for security (client-side cannot truly make it HttpOnly)
    // In production, set cookies from server-side during login
    document.cookie = `${name}=${encodeURIComponent(value)};${expires};path=/;SameSite=Strict`;
  }

  static getCookie(name: string): string | null {
    if (!this.isClient) return null;

    const nameEQ = name + "=";
    const cookies = document.cookie.split(";");

    for (let cookie of cookies) {
      cookie = cookie.trim();
      if (cookie.indexOf(nameEQ) === 0) {
        return decodeURIComponent(cookie.substring(nameEQ.length));
      }
    }

    return null;
  }

  static deleteCookie(name: string): void {
    if (!this.isClient) return;

    document.cookie = `${name}=;expires=Thu, 01 Jan 1970 00:00:00 UTC;path=/;`;
  }
}
