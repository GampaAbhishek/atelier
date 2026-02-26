import React from "react";
import Title from "../components/Dashboard/Title/Title";
import Statistics from "../components/Dashboard/Statistics/Statistics";
import Tickets from "../components/Dashboard/Tickets/Tickets";

function Dashboard() {
  return (
    <div className="flex flex-col w-full bg-[#F1FAFF]">
      <Title />
      <Statistics />
      <Tickets />
    </div>
  );
}

export default Dashboard;
