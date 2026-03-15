/**
 * ProtectedRoute Component
 * Wraps pages/components and ensures user is authenticated
 * Shows loading state while validating token
 */

"use client";

import { ReactNode } from "react";
import { useCheckAuth } from "../hooks/useCheckAuth";

interface ProtectedRouteProps {
  children: ReactNode;
}

export function ProtectedRoute({ children }: ProtectedRouteProps) {
  const { isLoading } = useCheckAuth();

  if (isLoading) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-[#DCF1F9]">
        <div className="text-center">
          <div className="inline-block animate-spin rounded-full h-12 w-12 border-b-2 border-[#1BACE1]"></div>
          <p className="mt-4 text-[#1BACE1] font-medium">Vérification de votre session...</p>
        </div>
      </div>
    );
  }

  return <>{children}</>;
}
