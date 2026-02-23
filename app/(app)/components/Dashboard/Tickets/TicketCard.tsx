import React from "react";
import type { TicketData } from "./ticketsConstants";
import { TICKET_STATUS_COLORS } from "./ticketsConstants";
import Image from "next/image";
import ticketImage from "../../../../../public/Dashboard/Ticket/ticket.png";

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
  return (
    <div className="bg-blue-100 rounded-xl shadow-md hover:shadow-xl transition-shadow duration-300 overflow-hidden">
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
              <h4 className="text-sm sm:text-base font-semibold text-slate-700 mb-1.5">
                Description
              </h4>
              <p className="text-xs sm:text-sm text-gray-600 leading-relaxed line-clamp-2 sm:line-clamp-3">
                {ticket.description}
              </p>
            </div>
          </div>

          {/* Right Column - Status & Comment */}
          <div className="flex flex-col lg:items-end gap-4 lg:min-w-max">
            
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

            {/* Action Button */}
            <button className="bg-blue-500 hover:bg-blue-600 text-white text-xs sm:text-sm font-semibold px-4 py-2 rounded-lg transition-colors duration-200 mt-2 w-full sm:w-auto lg:mt-4">
              En voir plus
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default TicketCard;
