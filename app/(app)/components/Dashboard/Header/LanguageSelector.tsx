"use client";

import { memo, useCallback, useState } from "react";
import Image from "next/image";
import { StaticImageData } from "next/image";
import { LANGUAGE_OPTIONS } from "./headerConstants";

interface LanguageSelectorProps {
  currentLanguageIcon: StaticImageData;
  currentLanguageCode?: string;
  onLanguageChange?: (languageCode: string) => void;
  className?: string;
}

/**
 * LanguageSelector Component
 * Single Responsibility: Language selection dropdown UI
 */
const LanguageSelector = memo(
  ({
    currentLanguageIcon,
    currentLanguageCode = "fr",
    onLanguageChange,
    className = "",
  }: LanguageSelectorProps) => {
    const [isOpen, setIsOpen] = useState(false);

    const handleLanguageSelect = useCallback(
      (languageCode: string) => {

        onLanguageChange?.(languageCode);
        setIsOpen(false);
      },
      [onLanguageChange],
    );

    return (
      <div className={`relative ${className}`}>
        <button
          onClick={() => setIsOpen(!isOpen)}
          className="hover:opacity-70 cursor-pointer transition-opacity p-1 rounded-lg hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-[#1BACE1]"
          aria-label="Change language"
          aria-expanded={isOpen}
          title="Changer la langue"
        >
          <Image
            src={currentLanguageIcon}
            alt="Language"
            width={24}
            height={24}
            className="w-6 h-6 max-sm:w-5 max-sm:h-5 md:w-4 md:h-4 lg:w-6 lg:h-6"
          />
        </button>

        {isOpen && (
          <div className="absolute right-[-40%] mt-2 w-max bg-white border border-gray-200 rounded-lg shadow-lg z-50">
            {LANGUAGE_OPTIONS.map((language) => (
              <button
                key={language.id}
                onClick={() => handleLanguageSelect(language.code)}
                className={`w-full flex items-center gap-3 px-4 py-3 hover:bg-gray-50 transition-colors ${
                  currentLanguageCode === language.code ? "bg-blue-50" : ""
                } ${language.id === "fr" ? "border-b border-gray-100" : ""}`}
              >
                <Image
                  src={language.icon}
                  alt={language.name}
                  width={24}
                  height={24}
                  className="w-6 h-6"
                />
              </button>
            ))}
          </div>
        )}
      </div>
    );
  },
);

LanguageSelector.displayName = "LanguageSelector";

export default LanguageSelector;
