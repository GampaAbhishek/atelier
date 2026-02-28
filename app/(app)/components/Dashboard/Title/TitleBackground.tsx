'use client';

import { memo, ReactNode } from 'react';
import Image from 'next/image';
import { TITLE_IMAGES } from './titleConstants';
import styles from './TitleBackground.module.css';

interface TitleBackgroundProps {
  children: ReactNode;
  className?: string;
}

/**
 * TitleBackground Component
 * Single Responsibility: Render background image with relative positioning container
 */
const TitleBackground = memo(
  ({ children, className = '' }: TitleBackgroundProps) => (
    <div className={`relative w-full  md:overflow-visible ${className}`}>
      <Image
        src={TITLE_IMAGES.background}
        alt="Title Background"
        priority
        quality={85}
        className={` max-sm:h-[100px] md:h-[180px] lg:h-[150px] xl:h-[175px] 2xl:h-[220px] w-full object-cover`}
       
      />
      {/* Absolute positioned children container */}
      <div className="absolute inset-0">{children}</div>
    </div>
  )
);

TitleBackground.displayName = 'TitleBackground';

export default TitleBackground;
