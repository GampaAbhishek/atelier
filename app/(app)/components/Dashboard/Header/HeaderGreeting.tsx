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
        // Format: Wed Aug 27 2059 01:09:07 GMT+0200
        const now = new Date();
        const days = ['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat'];
        const months = ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'];
        
        const dayName = days[now.getDay()];
        const monthName = months[now.getMonth()];
        const date = String(now.getDate()).padStart(2, '0');
        const year = now.getFullYear();
        const hours = String(now.getHours()).padStart(2, '0');
        const minutes = String(now.getMinutes()).padStart(2, '0');
        const seconds = String(now.getSeconds()).padStart(2, '0');
        const offset = now.getTimezoneOffset();
        const offsetHours = String(Math.abs(offset / 60)).padStart(2, '0');
        const offsetMinutes = String(Math.abs(offset % 60)).padStart(2, '0');
        const offsetSign = offset <= 0 ? '+' : '-';

        setDateTime(
          `${dayName} ${monthName} ${date} ${year} ${hours}:${minutes}:${seconds} GMT${offsetSign}${offsetHours}${offsetMinutes}`
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
