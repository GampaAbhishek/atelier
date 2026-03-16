/**
 * ITicketService Interface
 * Defines the contract for ticket operations
 * Follows Interface Segregation Principle
 */

export interface TicketFormData {
  poste: string;
  type: string;
  priorite: string;
  impact: string;
  sujet: string;
  description: string;
}

export interface TicketFile {
  file: File;
  name: string;
}

export interface TicketSubmitData extends TicketFormData {
  piece_jointe?: File;
}

export interface TicketResponse {
  id: number;
  poste: string;
  type: string;
  priorite: string;
  impact: string;
  sujet: string;
  description: string;
  statut: string;
  dateCreation: string;
  customerId: number;
}

export interface ValidationError {
  field: string;
  message: string;
}

export interface ITicketService {
  submitTicket(
    formData: TicketSubmitData,
    token: string,
    customerId: number
  ): Promise<TicketResponse>;
  validateTicketData(data: TicketFormData): ValidationError[];
}
