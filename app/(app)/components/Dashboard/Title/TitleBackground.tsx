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
        className={`${styles.imageWrapper} max-sm:h-[200px] md:h-auto w-full object-cover`}
       
      />
      {/* Absolute positioned children container */}
      <div className="absolute inset-0">{children}</div>
    </div>
  )
);

TitleBackground.displayName = 'TitleBackground';

export default TitleBackground;
