import React from "react";
import TicketInfo from "@/public/OuvrirUnTicket/ticketInfo.png";
import Image from "next/image";

function Header() {
  return (
    <div className="flex gap-5 justify-between ">
      <div className="flex flex-col gap-5 pl-10 pt-10 w-full">
        <h1 className="text-6xl font-bold text-[#024272]">Ouvrir un ticket</h1>
        <span >
          Nous mettons tout en œuvre pour vous accompagner rapidement et
          efficacement Décrivez votre demande en quelques mots afin que notre
          équipe puisse vous assister efficacement. Plus votre description est
          précise (contexte, message d’erreur, captures d’écran).
        </span>
        <span >
          Notre support technique traite chaque ticket avec attention afin de
          garantir un suivi personnalisé.
        </span>
        <span className="text-[#309DD7]" >
          Ouvert de 9h à 19h - Délais de réponse 4h
        </span>
      </div>
      <div className="w-full">
        <Image
          src={TicketInfo}
          alt="Ticket Information"
          width={800}
          height={400}
          className="w-full h-auto object-cover rounded-lg"
        />
      </div>
    </div>
  );
}

export default Header;
