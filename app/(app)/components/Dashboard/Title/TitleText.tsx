'use client';

import { memo } from 'react';
import { TitleContent, TEXT_STYLES } from './titleConstants';

interface TitleTextProps {
  content: TitleContent;
  className?: string;
}

/**
 * TitleText Component
 * Single Responsibility: Display greeting and help question text
 */
const TitleText = memo(({ content, className = '' }: TitleTextProps) => (
  <div  className={ `flex flex-col absolute top-[15%] max-sm:top-[15%] max-sm:right-[50%] lg:ml-[80px] md:top-[30%] md:ml-[10px] max-sm:ml-[10px]  lg:top-[17%]  max-w-xs sm:max-w-sm md:max-w-md ${className}`}>
    <h1
      className={`${TEXT_STYLES.greeting.mobile} md:text-[30px] 2xl:text-6xl ${TEXT_STYLES.greeting.color} ${TEXT_STYLES.greeting.weight} leading-tight`}
    >
      {content.greeting}
    </h1>
    <p
      className={`${TEXT_STYLES.question.mobile} max-sm:text-[7px] md:text-[15px] 2xl:text-2xl ${TEXT_STYLES.question.color} ${TEXT_STYLES.question.weight} mt-2 sm:mt-3 md:mt-4 line-clamp-2`}
    >
      {content.question}
    </p>
  </div>
));

TitleText.displayName = 'TitleText';

export default TitleText;
