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

export interface TicketDetailResponse {
  id: number;
  poste: string;
  type: string;
  priorite: string;
  impact: string;
  sujet: string;
  description: string;
  piece_jointe: string;
  status: string;
  created_at: string;
  updated_at: string;
  customer_id: number | null;
}

export interface TimerStatusResponse {
  status?: string; // "running" or "ended"
  timerStatus?: string; // "ended" (alternative to status)
  timerStartedAt?: string;
  timerEndedAt?: string | null;
  elapsedSeconds?: number;
  canStart?: boolean;
  canStop?: boolean;
  durationGap?: string; // formatted time like "00:47:35"
  message?: string;
  isRunning?: boolean;
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
  getTicketDetails(ticketId: number, token: string): Promise<TicketDetailResponse>;
  toggleTimer(ticketId: number, token: string): Promise<TimerStatusResponse>;
  getTimerStatus(ticketId: number, token: string): Promise<TimerStatusResponse>;
}
