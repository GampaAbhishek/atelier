/**
 * ICustomerService Interface
 * Defines contract for customer operations
 * Follows Interface Segregation Principle
 */

export interface CustomerDetails {
  id: number;
  civilite: string;
  nom: string;
  prenom: string;
  telephone: string;
  email: string;
  adresse: string;
  code_postal: string;
  ville: string;
  departement: string;
  societe: string;
  site_web: string;
  created_at: string;
  updated_at: string;
}

export interface ICustomerService {
  getCustomerDetails(customerId: number, token: string): Promise<CustomerDetails>;
}
