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
    <div className={`absolute md:block max-sm:top-[-14%]  max-sm:h-[100%] max-sm:right-[5%]  md:top-[-10%] md:right-[10%] lg:top-[-32%] xl:top-[-13%] 2xl:top-[-25%] 2xl:w-[12vw] 2xl:h-[10vh] w-32 sm:w-44 md:w-56 z-10 ${className}`}>
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
