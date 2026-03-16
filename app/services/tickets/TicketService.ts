/**
 * TicketService Implementation
 * Handles ticket API calls
 * Follows Single Responsibility and Dependency Injection Principles
 */

import {
  ITicketService,
  TicketFormData,
  TicketSubmitData,
  TicketResponse,
  ValidationError,
} from "../interfaces/ITicketService";

const API_BASE_URL = process.env.NEXT_PUBLIC_API_URL || "http://localhost:3001";

export class TicketService implements ITicketService {
  /**
   * Submit a ticket to the backend
   */
  async submitTicket(
    formData: TicketSubmitData,
    token: string,
    customerId: number
  ): Promise<TicketResponse> {
    try {
      const formDataObj = new FormData();

      // Add form fields
      formDataObj.append("poste", formData.poste);
      formDataObj.append("type", formData.type);
      formDataObj.append("priorite", formData.priorite);
      formDataObj.append("impact", formData.impact);
      formDataObj.append("sujet", formData.sujet);
      formDataObj.append("description", formData.description);
      formDataObj.append("customerId", customerId.toString());

      // Add file if present
      if (formData.piece_jointe) {
        formDataObj.append("piece_jointe", formData.piece_jointe);
      }

      const response = await fetch(`${API_BASE_URL}/tickets`, {
        method: "POST",
        headers: {
          Authorization: `Bearer ${token}`,
        },
        body: formDataObj,
      });

      if (!response.ok) {
        if (response.status === 401) {
          if (typeof window !== "undefined") {
            window.location.href = "/login";
          }
          throw new Error("Unauthorized. Redirecting to login.");
        }
        const error = await response.json().catch(() => ({}));
        throw new Error(
          error.message || `Failed to submit ticket: ${response.statusText}`
        );
      }

      const data: TicketResponse = await response.json();
      return data;
    } catch (error) {
      throw new Error(
        `Ticket submission error: ${error instanceof Error ? error.message : "Unknown error"}`
      );
    }
  }

  /**
   * Validate ticket form data
   */
  validateTicketData(data: TicketFormData): ValidationError[] {
    const errors: ValidationError[] = [];

    // Validate poste
    if (!data.poste.trim()) {
      errors.push({
        field: "poste",
        message: "Le poste est requis",
      });
    }

    // Validate type
    if (!data.type.trim()) {
      errors.push({
        field: "type",
        message: "Le type de ticket est requis",
      });
    }

    // Validate priorite
    if (!data.priorite.trim()) {
      errors.push({
        field: "priorite",
        message: "La priorité est requise",
      });
    }

    // Validate impact
    if (!data.impact.trim()) {
      errors.push({
        field: "impact",
        message: "L'impact est requis",
      });
    }

    // Validate sujet
    if (!data.sujet.trim()) {
      errors.push({
        field: "sujet",
        message: "Le sujet est requis",
      });
    }

    if (data.sujet.trim().length < 5) {
      errors.push({
        field: "sujet",
        message: "Le sujet doit contenir au moins 5 caractères",
      });
    }

    // Validate description
    if (!data.description.trim()) {
      errors.push({
        field: "description",
        message: "La description est requise",
      });
    }

    if (data.description.trim().length < 20) {
      errors.push({
        field: "description",
        message: "La description doit contenir au moins 20 caractères",
      });
    }

    return errors;
  }
}
