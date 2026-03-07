import React from "react";
import TicketInfo from "@/public/OuvrirUnTicket/ticketInfo.png";
import Image from "next/image";
import ouvirticket from "@/public/OuvrirUnTicket/Ouvrirticket.svg";

function Header() {
  return (
    <>
      <div className="hidden sm:flex md:flex sm:flex-col max-md:flex-row lg:flex-row sm:gap-5 md:gap-6 justify-between ">
        <div className="flex flex-col gap-5 md:pl-10  pt-10 max-sm:pl-3 w-full 2xl:w-[50%]">
          <h1 className="text-6xl font-bold text-[#024272] ">
            Ouvrir un ticket
          </h1>
          <span className="2xl:w-[80%] text-black">
            Merci de décrire votre demande afin que notre équipe puisse vous
            assister dans les meilleurs délais.
          </span>
          <span className="text-black">
            Pour un traitement plus rapide, nous vous invitons à préciser :
          </span>
          <span className="text-black pl-4">
            <ul>
              <li>le contexte de votre demande</li>
              <li>les actions réalisées avant le problème</li>
              <li>les messages d’erreur affichés</li>
              <li>des captures d’écran si possible</li>
            </ul>
          </span>
          <span className="text-black">
            Plus votre description est précise, plus notre équipe pourra diagnostiquer et résoudre votre demande rapidement.
          </span>
          <span className="text-black">
            Chaque ticket bénéficie d’un suivi personnalisé jusqu’à sa résolution complète.
          </span>
        </div>
        <div className="w-full">
          <Image
            src={ouvirticket}
            alt="Ticket Information"
            width={800}
            height={400}
            className="w-full 2xl:w-[40%] h-auto object-cover rounded-lg"
          />
        </div>
      </div>
      <div className="md:hidden sm:flex  sm:flex-col max-md:flex-row lg:flex-row sm:gap-5 md:gap-6 justify-between ">
        <div className="w-full">
          <Image
            src={ouvirticket}
            alt="Ticket Information"
            width={800}
            height={400}
            className="w-full 2xl:w-[40%] h-auto object-cover rounded-lg"
          />
        </div>
       <div className="flex flex-col gap-5 md:pl-10  pt-10 max-sm:pl-3 w-full 2xl:w-[50%]">
          <h1 className="text-6xl font-bold text-[#024272] ">
            Ouvrir un ticket
          </h1>
          <span className="2xl:w-[80%] text-black">
            Merci de décrire votre demande afin que notre équipe puisse vous
            assister dans les meilleurs délais.
          </span>
          <span className="text-black">
            Pour un traitement plus rapide, nous vous invitons à préciser :
          </span>
          <span className="text-black pl-4">
            <ul>
              <li>le contexte de votre demande</li>
              <li>les actions réalisées avant le problème</li>
              <li>les messages d’erreur affichés</li>
              <li>des captures d’écran si possible</li>
            </ul>
          </span>
          <span className="text-black">
            Plus votre description est précise, plus notre équipe pourra diagnostiquer et résoudre votre demande rapidement.
          </span>
          <span className="text-black">
            Chaque ticket bénéficie d’un suivi personnalisé jusqu’à sa résolution complète.
          </span>
        </div>
      </div>
    </>
  );
}

export default Header;
