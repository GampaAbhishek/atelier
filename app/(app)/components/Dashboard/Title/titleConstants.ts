import titleBg from '../../../../../public/Dashboard/Title/titleBg.png';
import titleRobo from '../../../../../public/Dashboard/Title/titleRobo.png';
import { StaticImageData } from 'next/image';

// Title content interface
export interface TitleContent {
  greeting: string;
  question: string;
}

// Title image interface
export interface TitleImages {
  background: StaticImageData;
  robot: StaticImageData;
}

// Default title content
export const DEFAULT_TITLE_CONTENT: TitleContent = {
  greeting: 'Bienvenue',
  question: 'En quoi pouvons nous vous aider ?',
};

// Title images
export const TITLE_IMAGES: TitleImages = {
  background: titleBg,
  robot: titleRobo,
};

// Responsive sizing for robot
export const ROBOT_SIZES = {
  mobile: {
    width: 120,
    height: 120,
  },
  tablet: {
    width: 180,
    height: 180,
  },
  desktop: {
    width: 224,
    height: 224,
  },
};

// Text styling constants
export const TEXT_STYLES = {
  greeting: {
    mobile: 'text-2xl max-sm:text-[20px] md:text-5xl',
    color: 'text-[#383E68]',
    weight: 'font-semibold',
  },
  question: {
    mobile: 'text-sm max-sm:text-[10px] md:text-lg',
    color: 'text-[#383E68]',
    weight: 'font-normal',
  },
};

// Layout positioning (responsive)
export const LAYOUT_POSITIONS = {
  padding: ' md:pl-[10px] max-sm:pl-[10px] ',
  robotPosition: {
    mobile: 'top-[-15%] right-[5%]',
    desktop: 'top-[-12%] right-[8%]',
  },
  textPosition: {
    mobile: 'top-[15%] right-[2%]',
    tablet: 'top-[15%] right-[15%]',
    desktop: 'top-[17%] right-[52%]',
  },
};
