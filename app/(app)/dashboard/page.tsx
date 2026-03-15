"use client";

import React from "react";
import Title from "../components/Dashboard/Title/Title";
import Statistics from "../components/Dashboard/Statistics/Statistics";
import Tickets from "../components/Dashboard/Tickets/Tickets";
import { ProtectedRoute } from "@/app/components/ProtectedRoute";

function Dashboard() {
  return (
    <ProtectedRoute>
      <div className="flex flex-col w-full bg-[#F1FAFF]">
        <Title />
        <Statistics />
        <Tickets />
      </div>
    </ProtectedRoute>
  );
}

export default Dashboard;
