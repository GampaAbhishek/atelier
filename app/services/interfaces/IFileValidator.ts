/**
 * IFileValidator Interface
 * Defines the contract for file validation
 * Follows Single Responsibility Principle
 */

export interface FileValidationResult {
  isValid: boolean;
  error?: string;
}

export interface IFileValidator {
  validateFile(file: File): FileValidationResult;
  validateFileType(file: File, allowedTypes: string[]): FileValidationResult;
  validateFileSize(file: File, maxSizeMB: number): FileValidationResult;
}
