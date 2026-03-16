/**
 * CustomerUpdateServiceFactory
 * Creates customer update service instances following Factory Pattern
 */

import { CustomerUpdateService } from "../customer/CustomerUpdateService";
import { CustomerUpdateRepository } from "../repositories/CustomerUpdateRepository";

let customerUpdateRepository: CustomerUpdateRepository | null = null;

export function getCustomerUpdateRepository(): CustomerUpdateRepository {
  if (!customerUpdateRepository) {
    const updateService = new CustomerUpdateService();
    customerUpdateRepository = new CustomerUpdateRepository(updateService);
  }
  return customerUpdateRepository;
}

export function resetCustomerUpdateRepository(): void {
  customerUpdateRepository = null;
}
