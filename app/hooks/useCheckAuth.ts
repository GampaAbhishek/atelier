/**
 * useCheckAuth Hook
 * Checks authentication status and validates token on mount
 * Useful for protected pages and components
 */

"use client";

import { useEffect, useState } from "react";
import { useRouter } from "next/navigation";
import { getAuthRepository } from "../services/factories/ServiceFactory";

interface UseCheckAuthReturn {
  isAuthenticated: boolean;
  isLoading: boolean;
  customerId: number | null;
}

export function useCheckAuth(): UseCheckAuthReturn {
  const router = useRouter();
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const [isLoading, setIsLoading] = useState(true);
  const authRepository = getAuthRepository();

  useEffect(() => {
    const checkAuth = async () => {
      try {
        const isValid = await authRepository.validateToken();

        if (isValid) {
          setIsAuthenticated(true);
        } else {
          setIsAuthenticated(false);
          // Redirect to login if token is invalid
          router.push("/login");
        }
      } catch (error) {
        console.error("Auth check error:", error);
        setIsAuthenticated(false);
        router.push("/login");
      } finally {
        setIsLoading(false);
      }
    };

    checkAuth();
  }, [authRepository, router]);

  const customerId = authRepository.getCustomerId();

  return {
    isAuthenticated,
    isLoading,
    customerId,
  };
}
