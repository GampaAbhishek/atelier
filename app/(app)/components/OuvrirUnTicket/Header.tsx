import React from "react";
import TicketInfo from "@/public/OuvrirUnTicket/ticketInfo.png";
import Image from "next/image";
import ouvirticket from "@/public/OuvrirUnTicket/Ouvrirticket.svg";

function Header() {
  return (
    <>
    <div className="hidden sm:flex md:flex sm:flex-col max-md:flex-row lg:flex-row sm:gap-5 md:gap-6 justify-between ">
      <div className="flex flex-col gap-5 md:pl-10  pt-10 max-sm:pl-3 w-full 2xl:w-[50%]">
        <h1 className="text-6xl font-bold text-[#024272] ">Ouvrir un ticket</h1>
        <span className="2xl:w-[80%] text-black">
          Nous mettons tout en œuvre pour vous accompagner rapidement et
          efficacement Décrivez votre demande en quelques mots afin que notre
          équipe puisse vous assister efficacement. Plus votre description est
          précise (contexte, message d’erreur, captures d’écran).
        </span>
        <span className="text-black" >
          Notre support technique traite chaque ticket avec attention afin de
          garantir un suivi personnalisé.
        </span>
        <span className="text-[#309DD7]" >
          Ouvert de 9h à 19h - Délais de réponse 4h
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
        <h1 className="text-6xl font-bold text-[#024272] ">Ouvrir un ticket</h1>
        <span className="2xl:w-[80%] text-black">
          Nous mettons tout en œuvre pour vous accompagner rapidement et
          efficacement Décrivez votre demande en quelques mots afin que notre
          équipe puisse vous assister efficacement. Plus votre description est
          précise (contexte, message d’erreur, captures d’écran).
        </span>
        <span className="text-black" >
          Notre support technique traite chaque ticket avec attention afin de
          garantir un suivi personnalisé.
        </span>
        <span className="text-[#309DD7]" >
          Ouvert de 9h à 19h - Délais de réponse 4h
        </span>
      </div>
     
    </div>
    </>
  );
}

export default Header;
