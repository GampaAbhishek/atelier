import React from "react";
import { SuiviDesNiveauxConstants } from "./SuiviDesNiveauxContant";
import SuiviDesNiveauxConstantInterface from "./SuiviDesNiveauxContant";

function SuiviDesNiveaux() {
  return (
    <div className="max-sm:flex max-sm:flex-col md:grid md:grid-cols-1 lg:grid lg:grid-cols-2 2xl:grid 2xl:grid-cols-5 gap-4">
      {SuiviDesNiveauxConstants.map(
        (level: SuiviDesNiveauxConstantInterface) => (
          <div
            key={level.id}
            className={` ${level.classname} flex flex-col justify-center items-center gap-6 px-7 py-4 rounded-lg`}
          >
            <h3 className="font-bold text-2xl">{level.title}</h3>
            <p className="text-[15px]">{level.description}</p>
            <div className="flex justify-between w-full">
             <div className="flex flex-col justify-center items-center">
                <h4 className="text-sm max-sm:text-[10px] 2xl:text-[12px] font-semibold text-white mb-1.5">
                    Temps de réponse
                </h4>
                <p className="text-lg max-sm:text-[10px] 2xl:text-[13px] font-bold text-white leading-relaxed">
                    {level.times.responseTime}
                </p>
             </div>
             <div className="flex flex-col justify-center items-center">
                <h4 className="text-sm max-sm:text-[10px] 2xl:text-[12px] font-semibold text-white mb-1.5">
                    Temps de résolution
                </h4>
                <p className="text-lg max-sm:text-[10px] 2xl:text-[13px] font-bold text-white leading-relaxed">
                    {level.times.resolutionTime}
                </p>
             </div>
            </div>
          </div>
        ),
      )}
    </div>
  );
}

export default SuiviDesNiveaux;
