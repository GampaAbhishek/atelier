/**
 * useCustomer Hook
 * Custom React hook for customer operations in components
 * Follows React Hooks best practices and Dependency Injection
 */

"use client";

import { useState, useCallback } from "react";
import { getCustomerRepository } from "../services/factories/CustomerServiceFactory";
import { getAuthRepository } from "../services/factories/ServiceFactory";
import type { CustomerDetails } from "../services/interfaces/ICustomerService";

interface UseCustomerReturn {
  fetchCustomerDetails: () => Promise<CustomerDetails | null>;
  loading: boolean;
  error: string | null;
}

export function useCustomer(): UseCustomerReturn {
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const customerRepository = getCustomerRepository();
  const authRepository = getAuthRepository();

  const fetchCustomerDetails = useCallback(async (): Promise<CustomerDetails | null> => {
    setLoading(true);
    setError(null);
    try {
      const customerId = authRepository.getCustomerId();
      const token = authRepository.getAccessToken();
      if (!customerId || !token) {
        setError("Authentification requise");
        return null;
      }
      const details = await customerRepository.getCustomerDetails(customerId, token);
      return details;
    } catch (err) {
      const errorMessage = err instanceof Error ? err.message : "Erreur inconnue";
      setError(errorMessage);
      return null;
    } finally {
      setLoading(false);
    }
  }, [customerRepository, authRepository]);

  return {
    fetchCustomerDetails,
    loading,
    error,
  };
}
