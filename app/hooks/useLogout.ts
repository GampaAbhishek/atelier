/**
 * useLogout Hook
 * Provides logout functionality with token cleanup
 */

"use client";

import { useRouter } from "next/navigation";
import { getAuthRepository, resetAuthRepository } from "../services/factories/ServiceFactory";

export function useLogout() {
  const router = useRouter();
  const authRepository = getAuthRepository();

  const logout = async () => {
    try {
      // Clear tokens
      authRepository.logout();
      
      // Reset the service factory to create fresh instances
      resetAuthRepository();

      // Redirect to login
      router.push("/login");
    } catch (error) {
      console.error("Logout error:", error);
      // Still redirect even if logout fails
      router.push("/login");
    }
  };

  return { logout };
}
