import React, { memo, useCallback } from 'react';
import Image, { StaticImageData } from 'next/image';
import { useRouter } from 'next/navigation';

interface SidebarLogoProps {
  src: StaticImageData;
  alt: string;
}

/**
 * SidebarLogo Component
 * Responsible for displaying the company logo
 * Single Responsibility: Logo rendering only
 */
const SidebarLogo = memo(({ src, alt }: SidebarLogoProps) => {
  const router = useRouter();

  const handleClick = useCallback(() => {
    router.push('/dashboard');
  }, [router]);

  return (
    <button
      onClick={handleClick}
      className="w-full cursor-pointer"
      aria-label="Go to dashboard"
    >
      <Image src={src} alt={alt} className="w-full h-16" />
    </button>
  );
});

SidebarLogo.displayName = 'SidebarLogo';

export default SidebarLogo;
