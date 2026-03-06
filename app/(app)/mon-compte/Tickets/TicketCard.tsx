'use client';

import React from "react";
import { useRouter } from "next/navigation";
import type { TicketData } from "./ticketsConstants";
import { TICKET_STATUS_COLORS } from "./ticketsConstants";
import Image from "next/image";
import ticketImage from "@/public/Dashboard/Ticket/ticket.png";
import AddTicketIcon from "@/public/Dashboard/Ticket/ticketAddButton.png";

interface TicketCardProps {
  ticket: TicketData;
}

/**
 * TicketCard Component - Optimized for Mobile & Desktop
 * Displays ticket info in a responsive card layout
 * Mobile: Stacked vertical layout
 * Desktop: Side-by-side layout
 */
const TicketCard: React.FC<TicketCardProps> = ({ ticket }) => {
  const router = useRouter();

  const handleCardClick = () => {
    router.push(`/historique/${ticket.ticketNumber}`);
  }
  return (
    <div 
      onClick={handleCardClick}
      className="bg-blue-100 cursor-pointer rounded-xl shadow-md hover:shadow-xl transition-shadow duration-300 overflow-hidden"
    >
      {/* Main Container */}
      <div className="flex flex-col lg:flex-row gap-3 sm:gap-4 lg:gap-6 p-4 sm:p-5 md:p-6">
        {/* Image Section */}
        <div className="w-full lg:w-1/4 flex-shrink-0">
          <Image
            src={ticket.image}
            alt={`Ticket ${ticket.ticketNumber}`}
            width={200}
            height={150}
            className="w-full h-32 sm:h-40 md:h-48 object-cover rounded-lg"
          />
        </div>

        {/* Content Section */}
        <div className="flex-1 flex flex-col lg:flex-row lg:gap-6 lg:items-start gap-4">
          {/* Left Column - Description */}
          <div className="flex-1">
            {/* Header with Icon & Title */}
            <div className="flex items-center gap-2 mb-3">
              <Image
                src={ticketImage}
                alt="Ticket Icon"
                width={20}
                height={20}
              />
              <h3 className="text-lg sm:text-xl lg:text-2xl font-bold text-slate-700">
                Ticket {ticket.ticketNumber}
              </h3>
            </div>

            {/* Description */}
            <div className="mb-4">
              <div className="flex justify-between">
                <h4 className="text-sm sm:text-base font-semibold text-slate-700 mb-1.5">
                  Description
                </h4>
                {ticket?.image_url && (
                  <span className="text-xs font-bold sm:text-sm text-[#383E68] ">
                    {ticket.image_url}
                  </span>
                )}
              </div>
              <p className="text-xs sm:text-sm text-gray-600 leading-relaxed line-clamp-2 sm:line-clamp-3">
                {ticket.description}
              </p>
            </div>
          </div>

          {/* Right Column - Status & Comment */}
          <div className="flex flex-col lg:items-end justify-between h-full gap-4 lg:min-w-max">
            <div className="flex flex-col gap-5">
              {/* Status Section */}
              <div className="flex  gap-2 sm:items-center lg:items-end">
                <span className="text-xs sm:text-sm items-start font-semibold text-slate-700">
                  Etat du suivi:
                </span>
                <span
                  className={`px-3 py-1 rounded-full text-xs font-semibold ${TICKET_STATUS_COLORS[ticket.status]}`}
                >
                  {ticket.status}
                </span>
              </div>

              {/* Comment Section */}
              <div className="flex  gap-2">
                <span className="text-xs sm:text-sm font-semibold text-slate-700">
                  Commentaire
                </span>
                <p className="text-xs sm:text-sm text-gray-600 max-w-xs">
                  {ticket.comment}
                </p>
              </div>
            </div>
            {/* Action Button */}
            <Image
              src={AddTicketIcon}
              alt="Add Comment Icon"
              width={24}
              height={30}
              className="w-[35px] h-[30px] cursor-pointer hover:scale-110 transition-transform duration-200"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default TicketCard;
