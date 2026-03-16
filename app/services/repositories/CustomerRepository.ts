/**
 * CustomerRepository
 * Orchestrates customer operations with service coordination
 * Follows Repository and Dependency Injection patterns
 */

import { ICustomerService, CustomerDetails } from "../interfaces/ICustomerService";

export class CustomerRepository {
  constructor(private customerService: ICustomerService) {}

  async getCustomerDetails(customerId: number, token: string): Promise<CustomerDetails> {
    return await this.customerService.getCustomerDetails(customerId, token);
  }
}
