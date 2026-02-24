'use client';

import React, { useCallback } from 'react';
import InfoImage from './InfoImage';
import NoAnswerCard from './NoAnswerCard';

function Info() {
  const handleOpenTicket = useCallback(() => {
    // Navigate to ticket creation page
    window.location.href = '/tickets/new';
  }, []);

  return (
    <div className="w-full flex flex-col gap-4 sm:gap-5 lg:gap-6">
      <InfoImage />
      <NoAnswerCard onOpenTicket={handleOpenTicket} />
    </div>
  );
}

export default Info;
