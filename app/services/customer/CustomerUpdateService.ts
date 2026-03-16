/**
 * PATCH customer details
 * Follows SRP, OCP, DIP
 */

import { ICustomerService, CustomerDetails } from "../interfaces/ICustomerService";

export interface CustomerUpdatePayload {
  [key: string]: string | boolean;
}

export interface ICustomerUpdateService {
  updateCustomerDetails(customerId: number, token: string, payload: CustomerUpdatePayload): Promise<CustomerDetails>;
}

export class CustomerUpdateService implements ICustomerUpdateService {
  async updateCustomerDetails(customerId: number, token: string, payload: CustomerUpdatePayload): Promise<CustomerDetails> {
    const API_BASE_URL = process.env.NEXT_PUBLIC_API_URL || "http://localhost:3001";
    try {
      const response = await fetch(`${API_BASE_URL}/customers/${customerId}`, {
        method: "PATCH",
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${token}`,
        },
        body: JSON.stringify(payload),
      });
      if (!response.ok) {
        if (response.status === 401) {
          if (typeof window !== "undefined") {
            window.location.href = "/login";
          }
          throw new Error("Unauthorized. Redirecting to login.");
        }
        const error = await response.json().catch(() => ({}));
        throw new Error(error.message || `Failed to update customer details: ${response.statusText}`);
      }
      const data: CustomerDetails = await response.json();
      return data;
    } catch (error) {
      throw new Error(
        `Customer update error: ${error instanceof Error ? error.message : "Unknown error"}`
      );
    }
  }
}
