"use client";

import React from "react";
import Tickets from "../components/Dashboard/Tickets/Tickets";
import { ProtectedRoute } from "@/app/components/ProtectedRoute";

function HistoriquePage() {
  return (
    <ProtectedRoute>
      <div className="flex flex-col w-full bg-[#F1FAFF] pt-4">
        <Tickets />
      </div>
    </ProtectedRoute>
  );
}

export default HistoriquePage;
