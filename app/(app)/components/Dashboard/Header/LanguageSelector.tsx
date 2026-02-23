'use client';

import { memo, useCallback } from 'react';
import Image from 'next/image';
import { StaticImageData } from 'next/image';

interface LanguageSelectorProps {
  currentLanguageIcon: StaticImageData;
  onLanguageChange?: (languageCode: string) => void;
  className?: string;
}

/**
 * LanguageSelector Component
 * Single Responsibility: Language selection UI
 */
const LanguageSelector = memo(
  ({
    currentLanguageIcon,
    onLanguageChange,
    className = '',
  }: LanguageSelectorProps) => {
    const handleLanguageSelect = useCallback(() => {
      // Toggle between FR and EN for simplicity
      onLanguageChange?.('en'); // or implement dropdown if needed
    }, [onLanguageChange]);

    return (
      <button
        onClick={handleLanguageSelect}
        className={`hover:opacity-70  cursor-pointer transition-opacity p-1 rounded-lg hover:bg-gray-100 ${className}`}
        aria-label="Change language"
        title="Changer la langue"
      >
        <Image
          src={currentLanguageIcon}
          alt="Language"
          width={24}
          height={24}
          className="w-6 h-6 max-sm:w-5 max-sm:h-3"
        />
      </button>
    );
  }
);

LanguageSelector.displayName = 'LanguageSelector';

export default LanguageSelector;
