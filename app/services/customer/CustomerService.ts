/**
 * CustomerService Implementation
 * Handles customer API calls
 * Follows Single Responsibility and Dependency Injection Principles
 */

import { ICustomerService, CustomerDetails } from "../interfaces/ICustomerService";

const API_BASE_URL = process.env.NEXT_PUBLIC_API_URL || "http://localhost:3001";

export class CustomerService implements ICustomerService {
  async getCustomerDetails(customerId: number, token: string): Promise<CustomerDetails> {
    try {
      const response = await fetch(`${API_BASE_URL}/customers/${customerId}`, {
        method: "GET",
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${token}`,
        },
      });

      if (!response.ok) {
        if (response.status === 401) {
          if (typeof window !== "undefined") {
            window.location.href = "/login";
          }
          throw new Error("Unauthorized. Redirecting to login.");
        }
        const error = await response.json().catch(() => ({}));
        throw new Error(error.message || `Failed to fetch customer details: ${response.statusText}`);
      }

      const data: CustomerDetails = await response.json();
      return data;
    } catch (error) {
      throw new Error(
        `Customer details error: ${error instanceof Error ? error.message : "Unknown error"}`
      );
    }
  }
}
