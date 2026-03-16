/**
 * TicketRepository
 * Orchestrates ticket operations with service coordination
 * Follows Repository and Dependency Injection patterns
 */

import { ITicketService, TicketFormData, TicketSubmitData, TicketResponse, ValidationError } from "../interfaces/ITicketService";
import { IFileValidator } from "../interfaces/IFileValidator";

export class TicketRepository {
  constructor(
    private ticketService: ITicketService,
    private fileValidator: IFileValidator
  ) {}

  /**
   * Submit ticket with full validation
   */
  async submitTicket(
    formData: TicketFormData,
    file: File | null,
    token: string,
    customerId: number
  ): Promise<{ success: boolean; data?: TicketResponse; errors?: ValidationError[] }> {
    // Validate form data
    const validationErrors = this.ticketService.validateTicketData(formData);

    if (validationErrors.length > 0) {
      return {
        success: false,
        errors: validationErrors,
      };
    }

    // Validate file if present
    if (file) {
      const fileValidation = this.fileValidator.validateFile(file);
      if (!fileValidation.isValid) {
        return {
          success: false,
          errors: [
            {
              field: "piece_jointe",
              message: fileValidation.error || "Invalid file",
            },
          ],
        };
      }
    }

    // Submit ticket
    try {
      const submitData: TicketSubmitData = {
        ...formData,
        piece_jointe: file || undefined,
      };

      const response = await this.ticketService.submitTicket(
        submitData,
        token,
        customerId
      );

      return {
        success: true,
        data: response,
      };
    } catch (error) {
      return {
        success: false,
        errors: [
          {
            field: "general",
            message:
              error instanceof Error ? error.message : "Une erreur s\'est produite",
          },
        ],
      };
    }
  }

  /**
   * Validate file before submission
   */
  validateFile(file: File): { isValid: boolean; error?: string } {
    return this.fileValidator.validateFile(file);
  }

  /**
   * Get validation errors for form data
   */
  getValidationErrors(data: TicketFormData): ValidationError[] {
    return this.ticketService.validateTicketData(data);
  }
}
