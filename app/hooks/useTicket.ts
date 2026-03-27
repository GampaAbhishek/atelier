/**
 * useTicket Hook
 * Custom React hook for ticket operations in components
 * Follows React Hooks best practices and Dependency Injection
 */

"use client";

import { useState, useCallback } from "react";
import { getTicketRepository } from "../services/factories/TicketServiceFactory";
import { getAuthRepository } from "../services/factories/ServiceFactory";
import type {
  TicketFormData,
  TicketResponse,
  TicketDetailResponse,
  TimerStatusResponse,
  ValidationError,
} from "../services/interfaces/ITicketService";

interface UseTicketReturn {
  submitTicket: (
    formData: TicketFormData,
    file: File | null
  ) => Promise<{ success: boolean; data?: TicketResponse }>;
  getTicketDetails: (ticketId: number) => Promise<{ success: boolean; data?: TicketDetailResponse }>;
  toggleTimer: (ticketId: number) => Promise<{ success: boolean; data?: TimerStatusResponse }>;
  getTimerStatus: (ticketId: number) => Promise<{ success: boolean; data?: TimerStatusResponse }>;
  validateFile: (file: File) => { isValid: boolean; error?: string };
  getValidationErrors: (data: TicketFormData) => ValidationError[];
  loading: boolean;
  error: string | null;
  success: string | null;
}

export function useTicket(): UseTicketReturn {
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const [success, setSuccess] = useState<string | null>(null);

  const ticketRepository = getTicketRepository();
  const authRepository = getAuthRepository();

  const submitTicket = useCallback(
    async (
      formData: TicketFormData,
      file: File | null
    ): Promise<{ success: boolean; data?: TicketResponse }> => {
      setLoading(true);
      setError(null);
      setSuccess(null);

      try {
        // Get authentication info
        const token = authRepository.getAccessToken();
        const customerId = authRepository.getCustomerId();

        if (!token) {
          throw new Error("Authentification requise");
        }

        if (!customerId) {
          throw new Error("Informations client manquantes");
        }

        // Submit ticket
        const result = await ticketRepository.submitTicket(
          formData,
          file,
          token,
          customerId
        );

        if (!result.success) {
          const errorMessage =
            result.errors
              ?.map((e) => e.message)
              .join(", ") || "Erreur lors de la soumission";
          setError(errorMessage);
          return { success: false };
        }

        setSuccess("Ticket créé avec succès!");
        return { success: true, data: result.data };
      } catch (err) {
        const errorMessage =
          err instanceof Error ? err.message : "Erreur inconnue";
        setError(errorMessage);
        return { success: false };
      } finally {
        setLoading(false);
      }
    },
    [ticketRepository, authRepository]
  );

  const validateFile = useCallback(
    (file: File) => {
      return ticketRepository.validateFile(file);
    },
    [ticketRepository]
  );

  const getValidationErrors = useCallback(
    (data: TicketFormData) => {
      return ticketRepository.getValidationErrors(data);
    },
    [ticketRepository]
  );

  const getTicketDetails = useCallback(
    async (ticketId: number): Promise<{ success: boolean; data?: TicketDetailResponse }> => {
      setLoading(true);
      setError(null);
      setSuccess(null);

      try {
        const token = authRepository.getAccessToken();
        if (!token) {
          throw new Error("Authentification requise");
        }

        const result = await ticketRepository.getTicketDetails(ticketId, token);

        if (!result.success) {
          setError(result.error || "Erreur lors de la récupération du ticket");
          return { success: false };
        }

        return { success: true, data: result.data };
      } catch (err) {
        const errorMessage =
          err instanceof Error ? err.message : "Erreur inconnue";
        setError(errorMessage);
        return { success: false };
      } finally {
        setLoading(false);
      }
    },
    [ticketRepository, authRepository]
  );

  const toggleTimer = useCallback(
    async (ticketId: number): Promise<{ success: boolean; data?: TimerStatusResponse }> => {
      setLoading(true);
      setError(null);
      setSuccess(null);

      try {
        const token = authRepository.getAccessToken();
        if (!token) {
          throw new Error("Authentification requise");
        }

        const result = await ticketRepository.toggleTimer(ticketId, token);

        if (!result.success) {
          setError(result.error || "Erreur lors du changement du timer");
          return { success: false };
        }

        return { success: true, data: result.data };
      } catch (err) {
        const errorMessage =
          err instanceof Error ? err.message : "Erreur inconnue";
        setError(errorMessage);
        return { success: false };
      } finally {
        setLoading(false);
      }
    },
    [ticketRepository, authRepository]
  );

  const getTimerStatus = useCallback(
    async (ticketId: number): Promise<{ success: boolean; data?: TimerStatusResponse }> => {
      setLoading(true);
      setError(null);
      setSuccess(null);

      try {
        const token = authRepository.getAccessToken();
        if (!token) {
          throw new Error("Authentification requise");
        }

        const result = await ticketRepository.getTimerStatus(ticketId, token);

        if (!result.success) {
          setError(result.error || "Erreur lors de la récupération du statut du timer");
          return { success: false };
        }

        return { success: true, data: result.data };
      } catch (err) {
        const errorMessage =
          err instanceof Error ? err.message : "Erreur inconnue";
        setError(errorMessage);
        return { success: false };
      } finally {
        setLoading(false);
      }
    },
    [ticketRepository, authRepository]
  );

  return {
    submitTicket,
    getTicketDetails,
    toggleTimer,
    getTimerStatus,
    validateFile,
    getValidationErrors,
    loading,
    error,
    success,
  };
}
