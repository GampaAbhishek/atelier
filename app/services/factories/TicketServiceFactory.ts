/**
 * TicketServiceFactory
 * Creates ticket service instances following Factory Pattern
 * Extends the existing ServiceFactory
 */

import { TicketService } from "../tickets/TicketService";
import { FileValidator } from "../tickets/FileValidator";
import { TicketRepository } from "../repositories/TicketRepository";

let ticketRepository: TicketRepository | null = null;

export function getTicketRepository(): TicketRepository {
  if (!ticketRepository) {
    const ticketService = new TicketService();
    const fileValidator = new FileValidator();
    ticketRepository = new TicketRepository(ticketService, fileValidator);
  }
  return ticketRepository;
}

// Reset repository (useful for testing)
export function resetTicketRepository(): void {
  ticketRepository = null;
}
