/**
 * CustomerServiceFactory
 * Creates customer service instances following Factory Pattern
 */

import { CustomerService } from "../customer/CustomerService";
import { CustomerRepository } from "../repositories/CustomerRepository";

let customerRepository: CustomerRepository | null = null;

export function getCustomerRepository(): CustomerRepository {
  if (!customerRepository) {
    const customerService = new CustomerService();
    customerRepository = new CustomerRepository(customerService);
  }
  return customerRepository;
}

export function resetCustomerRepository(): void {
  customerRepository = null;
}
