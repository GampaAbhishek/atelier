import React, { memo } from 'react';
import Image, { StaticImageData } from 'next/image';

interface SidebarLogoProps {
  src: StaticImageData;
  alt: string;
}

/**
 * SidebarLogo Component
 * Responsible for displaying the company logo
 * Single Responsibility: Logo rendering only
 */
const SidebarLogo = memo(({ src, alt }: SidebarLogoProps) => (
  <Image src={src} alt={alt} className="w-full h-16" />
));

SidebarLogo.displayName = 'SidebarLogo';

export default SidebarLogo;
