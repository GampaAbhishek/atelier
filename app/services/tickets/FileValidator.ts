/**
 * FileValidator Implementation
 * Validates files for security and size constraints
 * Follows Single Responsibility Principle
 */

import {
  IFileValidator,
  FileValidationResult,
} from "../interfaces/IFileValidator";

// Max file size in MB
const MAX_FILE_SIZE_MB = 10;

// Allowed MIME types
const ALLOWED_MIME_TYPES = [
  "image/jpeg",
  "image/png",
  "image/gif",
  "image/webp",
  "application/pdf",
  "application/msword",
  "application/vnd.openxmlformats-officedocument.wordprocessingml.document",
  "application/vnd.ms-excel",
  "application/vnd.openxmlformats-officedocument.spreadsheetml.sheet",
  "text/plain",
];

// Allowed file extensions
const ALLOWED_EXTENSIONS = [
  ".jpg",
  ".jpeg",
  ".png",
  ".gif",
  ".webp",
  ".pdf",
  ".doc",
  ".docx",
  ".xls",
  ".xlsx",
  ".txt",
];

export class FileValidator implements IFileValidator {
  /**
   * Validate file overall
   */
  validateFile(file: File): FileValidationResult {
    // Check file type
    const typeValidation = this.validateFileType(file, ALLOWED_MIME_TYPES);
    if (!typeValidation.isValid) {
      return typeValidation;
    }

    // Check file size
    const sizeValidation = this.validateFileSize(file, MAX_FILE_SIZE_MB);
    if (!sizeValidation.isValid) {
      return sizeValidation;
    }

    // Check extension
    const extension = this.getFileExtension(file.name);
    if (!ALLOWED_EXTENSIONS.includes(extension.toLowerCase())) {
      return {
        isValid: false,
        error: `Extension de fichier non autorisée: ${extension}. Utilisez: ${ALLOWED_EXTENSIONS.join(", ")}`,
      };
    }

    return { isValid: true };
  }

  /**
   * Validate file MIME type
   */
  validateFileType(
    file: File,
    allowedTypes: string[]
  ): FileValidationResult {
    if (!allowedTypes.includes(file.type)) {
      return {
        isValid: false,
        error: `Type de fichier non autorisé: ${file.type}. Types autorisés: ${allowedTypes.join(", ")}`,
      };
    }

    return { isValid: true };
  }

  /**
   * Validate file size
   */
  validateFileSize(file: File, maxSizeMB: number): FileValidationResult {
    const maxSizeBytes = maxSizeMB * 1024 * 1024;

    if (file.size > maxSizeBytes) {
      return {
        isValid: false,
        error: `La taille du fichier dépasse la limite de ${maxSizeMB}MB. Taille actuelle: ${(file.size / (1024 * 1024)).toFixed(2)}MB`,
      };
    }

    return { isValid: true };
  }

  /**
   * Get file extension
   */
  private getFileExtension(filename: string): string {
    const lastDot = filename.lastIndexOf(".");
    return lastDot === -1 ? "" : filename.substring(lastDot);
  }
}
