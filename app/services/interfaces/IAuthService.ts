/**
 * IAuthService Interface
 * Defines the contract for authentication operations
 * Follows Interface Segregation Principle
 */

export interface LoginCredentials {
  email: string;
  password: string;
}

export interface TokenResponse {
  accessToken: string;
  refreshToken: string;
  customer: CustomerInfo;
}

export interface CustomerInfo {
  id: number;
  email: string;
  nom: string;
  prenom: string;
  civilite: string;
  telephone: string;
  ville: string;
  societe: string;
}

export interface TokenInfo {
  id: number;
  email: string;
  nom: string;
  prenom: string;
  iat: number;
  exp: number;
}

export interface IAuthService {
  login(credentials: LoginCredentials): Promise<TokenResponse>;
  validateToken(token: string): Promise<TokenInfo>;
  logout(): Promise<void>;
}
