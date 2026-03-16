/**
 * useCustomerUpdate Hook
 * Custom React hook for updating customer details
 * Follows React Hooks best practices and Dependency Injection
 */

"use client";

import { useState, useCallback } from "react";
import { getCustomerUpdateRepository } from "../services/factories/CustomerUpdateServiceFactory";
import { getAuthRepository } from "../services/factories/ServiceFactory";
import type { CustomerDetails } from "../services/interfaces/ICustomerService";
import type { CustomerUpdatePayload } from "../services/customer/CustomerUpdateService";

interface UseCustomerUpdateReturn {
  updateCustomerDetails: (payload: CustomerUpdatePayload) => Promise<CustomerDetails | null>;
  loading: boolean;
  error: string | null;
}

export function useCustomerUpdate(): UseCustomerUpdateReturn {
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const customerUpdateRepository = getCustomerUpdateRepository();
  const authRepository = getAuthRepository();

  const updateCustomerDetails = useCallback(async (payload: CustomerUpdatePayload): Promise<CustomerDetails | null> => {
    setLoading(true);
    setError(null);
    try {
      const customerId = authRepository.getCustomerId();
      const token = authRepository.getAccessToken();
      if (!customerId || !token) {
        setError("Authentification requise");
        return null;
      }
      const updated = await customerUpdateRepository.updateCustomerDetails(customerId, token, payload);
      return updated;
    } catch (err) {
      const errorMessage = err instanceof Error ? err.message : "Erreur inconnue";
      setError(errorMessage);
      return null;
    } finally {
      setLoading(false);
    }
  }, [customerUpdateRepository, authRepository]);

  return {
    updateCustomerDetails,
    loading,
    error,
  };
}
