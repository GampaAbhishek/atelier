import React from "react";
import { ContractMspConstants } from "./ContractConstant";
import ContractMspConstantInterface from "./ContractConstant";
import Image from "next/image";
import AddIcon from "@/public/IndicateursSla/addIcon.png";

function Contract() {
  return (
    <div className="grid max-sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 2xl:grid-cols-4 gap-4">
      {ContractMspConstants.map((contract: ContractMspConstantInterface) => (
        <div
          key={contract.id}
          className="flex flex-col gap-2 p-4 bg-white rounded-lg shadow-md"
        >
          <div className="flex items-center justify-center gap-2">
            <Image
              src={contract.image}
              alt={contract.title}
              width={50}
              height={50}
              className="w-12 h-15"
            />
          </div>
          <div className="flex flex-col gap-2 items-center justify-center">
            <h2 className="text-xl font-bold text-[#024272]">
              {contract.title}
            </h2>
            {contract.description ? (
              <p className="text-sm text-[#024272] font-bold">
                {contract.description}
              </p>
            ) : <p className="text-sm text-[#024272] font-bold">
               
              </p>}
          </div>
          {contract.addSymbol ? (
            <div className="flex items-center justify-center">
              <Image src={AddIcon} alt="Add Icon" width={15} height={15} />
            </div>
          ) : 
          <div className="pt-8"></div>
          }

          <div className="flex flex-col items-center gap-2">
            <ul className="text-sm text-[#024272] list-disc font-normal list-inside">
              {contract.points.map((point, index) => (
                <li key={index}>{point}</li>
              ))}
            </ul>
          </div>
          <div className="flex flex-col items-center gap-2">
            <h3 className="text-sm font-semibold text-[#024272]">
              Temps réponse
            </h3>
             <ul className="text-sm text-[#024272] list-disc list-inside">
           <div className="grid grid-cols-2 gap-2">
              {contract.response.map((resp, index) => (
                <li className="max-sm:text-xs md:text-xs lg:text-[11px] xl:text-sm" key={index}>{resp}</li>
              ))}
           </div>
            </ul>
          </div>
        </div>
      ))}
    </div>
  );
}

export default Contract;
