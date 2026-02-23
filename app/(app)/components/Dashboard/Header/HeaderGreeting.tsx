'use client';

import { memo, useEffect, useState } from 'react';

interface HeaderGreetingProps {
  firstName: string;
  lastName: string;
  currentDateTime?: string;
}

/**
 * HeaderGreeting Component
 * Single Responsibility: Display user greeting and current date/time
 */
const HeaderGreeting = memo(
  ({ firstName, lastName, currentDateTime }: HeaderGreetingProps) => {
    const [dateTime, setDateTime] = useState<string>('');

    console.log(lastName);
    useEffect(() => {
        
      if (currentDateTime) {
        // eslint-disable-next-line react-hooks/set-state-in-effect
        setDateTime(currentDateTime);
      } else {
        // Default date/time formatting
        setDateTime(
          new Date().toLocaleString('en-US', {
            weekday: 'short',
            year: 'numeric',
            month: 'short',
            day: 'numeric',
            hour: '2-digit',
            minute: '2-digit',
            second: '2-digit',
            timeZone: 'Europe/Paris',
          })
        );
      }
    }, [currentDateTime]);

    return (
      <div className="flex flex-col gap-1 md:items-start max-sm:items-center">
        <h1 className="text-3xl sm:text-4xl md:text-5xl font-medium text-gray-900">
          Bonjour, {firstName}
        </h1>
        <p className="text-xs sm:text-sm text-gray-600 font-light">
          {dateTime}
        </p>
      </div>
    );
  }
);

HeaderGreeting.displayName = 'HeaderGreeting';

export default HeaderGreeting;
