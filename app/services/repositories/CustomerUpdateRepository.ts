/**
 * CustomerUpdateRepository
 * Orchestrates customer update operations
 * Follows Repository and Dependency Injection patterns
 */

import { ICustomerUpdateService, CustomerUpdatePayload } from "../customer/CustomerUpdateService";
import { CustomerDetails } from "../interfaces/ICustomerService";

export class CustomerUpdateRepository {
  constructor(private updateService: ICustomerUpdateService) {}

  async updateCustomerDetails(customerId: number, token: string, payload: CustomerUpdatePayload): Promise<CustomerDetails> {
    return await this.updateService.updateCustomerDetails(customerId, token, payload);
  }
}
