'use client';

import { memo, useMemo } from 'react';
import Image from 'next/image';
import { TITLE_IMAGES, ROBOT_SIZES, LAYOUT_POSITIONS } from './titleConstants';

interface TitleRobotProps {
  className?: string;
}

/**
 * TitleRobot Component
 * Single Responsibility: Display robot character with responsive sizing
 */
const TitleRobot = memo(({ className = '' }: TitleRobotProps) => {
  const robotSize = useMemo(() => {
    // Return desktop size as default, Tailwind will handle responsive
    return ROBOT_SIZES.desktop;
  }, []);

  return (
    <div className={`absolute hidden md:block ${LAYOUT_POSITIONS.robotPosition.mobile} md:${LAYOUT_POSITIONS.robotPosition.desktop} w-32 sm:w-44 md:w-56 z-10 ${className}`}>
      <Image
        src={TITLE_IMAGES.robot}
        alt="Title Robot Character"
        width={robotSize.width}
        height={robotSize.height}
        priority
        className="w-full h-auto object-contain drop-shadow-lg"
      />
    </div>
  );
});

TitleRobot.displayName = 'TitleRobot';

export default TitleRobot;
