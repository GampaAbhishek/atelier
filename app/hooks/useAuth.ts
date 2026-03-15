/**
 * useAuth Hook
 * Custom React hook for authentication operations in components
 * Follows React Hooks best practices
 */

"use client";

import { useState, useCallback } from "react";
import { getAuthRepository } from "../services/factories/ServiceFactory";
import { LoginCredentials, TokenResponse } from "../services/interfaces/IAuthService";

interface UseAuthReturn {
  login: (credentials: LoginCredentials) => Promise<TokenResponse>;
  validateToken: () => Promise<boolean>;
  logout: () => void;
  isAuthenticated: () => boolean;
  loading: boolean;
  error: string | null;
}

export function useAuth(): UseAuthReturn {
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const authRepository = getAuthRepository();

  const login = useCallback(
    async (credentials: LoginCredentials): Promise<TokenResponse> => {
      setLoading(true);
      setError(null);

      try {
        const response = await authRepository.login(credentials);
        return response;
      } catch (err) {
        const errorMessage =
          err instanceof Error ? err.message : "Login failed";
        setError(errorMessage);
        throw err;
      } finally {
        setLoading(false);
      }
    },
    [authRepository]
  );

  const validateToken = useCallback(async (): Promise<boolean> => {
    try {
      return await authRepository.validateToken();
    } catch (err) {
      console.error("Token validation error:", err);
      return false;
    }
  }, [authRepository]);

  const logout = useCallback(() => {
    authRepository.logout();
  }, [authRepository]);

  const isAuthenticated = useCallback(() => {
    return authRepository.isAuthenticated();
  }, [authRepository]);

  return {
    login,
    validateToken,
    logout,
    isAuthenticated,
    loading,
    error,
  };
}
