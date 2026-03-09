import React from "react";
import Channel from "../components/IndicateursSla/Channel";
import SuiviDesNiveaux from "../components/IndicateursSla/SuiviDesNiveaux";
import Contract from "../components/IndicateursSla/Contract";

function page() {
  return (
    <div className="flex flex-col gap-2 w-full bg-[#F1FAFF] p-8 pt-12 mb-6">
      <div className="flex items-center gap-6 mb-8 pl-2">
        <h1 className="text-4xl font-bold text-[#024272]">Indicateurs SLA</h1>
      </div>
      <div className="flex flex-col gap-4 ">
        <h1 className="text-2xl font-bold pl-2 text-[#024272]">Canaux de support</h1>
        <Channel/>
      </div>
      <div className="flex flex-col gap-4 mt-8">
        <h1 className="text-3xl font-bold pl-2 text-[#024272]">Suivi des niveaux</h1>
        <SuiviDesNiveaux/>
      </div>
      <div className="flex flex-col gap-4 mt-8 2xl:w-[106.5%]">
        <h1 className="text-3xl font-bold pl-2 text-[#024272]">Contrat MSP</h1>
        <Contract/>
      </div>
    </div>
  );
}

export default page;
