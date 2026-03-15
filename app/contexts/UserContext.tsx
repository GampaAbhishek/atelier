/**
 * User Context
 * Provides user data across the application
 * Follows React Context API best practices
 */

"use client";

import React, { createContext, useContext, useState, useEffect, ReactNode } from "react";
import { getAuthRepository } from "../services/factories/ServiceFactory";
import type { CustomerInfo } from "../services/interfaces/IAuthService";

interface UserContextType {
  user: CustomerInfo | null;
  customerId: number | null;
  isLoading: boolean;
  logout: () => void;
  refreshUser: () => Promise<void>;
}

const UserContext = createContext<UserContextType | undefined>(undefined);

export function UserProvider({ children }: { children: ReactNode }) {
  const [user, setUser] = useState<CustomerInfo | null>(null);
  const [customerId, setCustomerId] = useState<number | null>(null);
  const [isLoading, setIsLoading] = useState(true);
  const authRepository = getAuthRepository();

  // Load user data on mount
  useEffect(() => {
    const loadUser = async () => {
      try {
        const id = authRepository.getCustomerId();
        if (id) {
          setCustomerId(id);
          // In a real app, fetch full user data from API here
          // const userData = await fetchUserData(id);
          // setUser(userData);
        }
      } catch (error) {
        console.error("Failed to load user:", error);
      } finally {
        setIsLoading(false);
      }
    };

    loadUser();
  }, [authRepository]);

  const logout = () => {
    authRepository.logout();
    setUser(null);
    setCustomerId(null);
  };

  const refreshUser = async () => {
    try {
      const id = authRepository.getCustomerId();
      if (id) {
        setCustomerId(id);
        // Refresh user data from API
      }
    } catch (error) {
      console.error("Failed to refresh user:", error);
    }
  };

  return (
    <UserContext.Provider value={{ user, customerId, isLoading, logout, refreshUser }}>
      {children}
    </UserContext.Provider>
  );
}

export function useUser() {
  const context = useContext(UserContext);
  if (!context) {
    throw new Error("useUser must be used within UserProvider");
  }
  return context;
}
