import React from 'react';
import TicketCard from './TicketCard';
import { SAMPLE_TICKETS } from './ticketsConstants';

/**
 * Tickets Component
 * Displays a list of tickets in a responsive grid layout
 * Follows SOLID principles for maintainability and scalability
 */
const Tickets: React.FC = () => {
  return (
    <section className="flex flex-col pt-6 sm:pt-7 md:pt-8 px-4 sm:px-5 md:px-0">
      {/* Section Title */}
      <h2 className="text-2xl pl-5 sm:text-3xl font-semibold text-gray-900  mb-6 sm:mb-7 md:mb-8">
        Historiques des tickets
      </h2>

      {/* Tickets List */}
      <div className="space-y-4 sm:space-y-5 md:space-y-6 h-[50vh] mb-5 overflow-scroll overflow-x-hidden pl-5">
        {SAMPLE_TICKETS.length > 0 ? (
          SAMPLE_TICKETS.map((ticket) => (
            <TicketCard key={ticket.id} ticket={ticket} />
          ))
        ) : (
          <div className="text-center py-12 bg-gray-50 rounded-lg">
            <p className="text-gray-500">Aucun ticket disponible</p>
          </div>
        )}
      </div>
    </section>
  );
};

export default Tickets;