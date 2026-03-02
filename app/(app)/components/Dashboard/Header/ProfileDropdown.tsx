"use client";

import { memo, useState, useRef, useEffect, useCallback } from "react";
import Image from "next/image";
import { DOWN_ARROW_ICON, DropdownOption } from "./headerConstants";
import { StaticImageData } from "next/image";

interface ProfileDropdownProps {
  profileImage: StaticImageData;
  userName: string;
  profileOptions: DropdownOption[];
  onOptionSelect?: (optionId: string) => void;
  className?: string;
}

/**
 * ProfileDropdown Component
 * Single Responsibility: User profile menu dropdown
 */
const ProfileDropdown = memo(
  ({
    profileImage,
    userName,
    profileOptions,
    onOptionSelect,
    className = "",
  }: ProfileDropdownProps) => {
    const [isOpen, setIsOpen] = useState(false);
    const dropdownRef = useRef<HTMLDivElement>(null);

    // Close dropdown when clicking outside
    useEffect(() => {
      const handleClickOutside = (event: MouseEvent) => {
        if (
          dropdownRef.current &&
          !dropdownRef.current.contains(event.target as Node)
        ) {
          setIsOpen(false);
        }
      };

      if (isOpen) {
        document.addEventListener("mousedown", handleClickOutside);
        return () => {
          document.removeEventListener("mousedown", handleClickOutside);
        };
      }
    }, [isOpen]);

    const handleOptionClick = useCallback(
      (optionId: string) => {
        onOptionSelect?.(optionId);
        setIsOpen(false);
      },
      [onOptionSelect],
    );

    const toggleDropdown = useCallback(() => {
      setIsOpen((prev) => !prev);
    }, []);

    return (
      <div className={`relative  ${className}`} ref={dropdownRef}>
        {/* Profile Button */}
        <button
          onClick={toggleDropdown}
          className="flex items-center cursor-pointer gap-2 hover:bg-gray-100 px-3 py-1 rounded-lg transition-colors duration-200"
          aria-haspopup="menu"
          aria-expanded={isOpen}
        >
          <Image
            src={profileImage}
            alt={userName}
            width={32}
            height={32}
            className="w-6 h-6 max-sm:w-5 max-sm:h-5 md:w-4 md:h-4 lg:w-6 lg:h-6"
          />
          <span className="hidden sm:inline text-black text-sm font-medium max-w-32 truncate">
            {userName}
          </span>
          <Image
            src={DOWN_ARROW_ICON}
            alt="Toggle Dropdown"
            width={32}
            height={32}
            className="w-4 h-4  max-sm:w-5 max-sm:h-3 md:w-2 md:h-2 lg:w-4 lg:h-4"
          />
        </button>

        {/* Dropdown Menu */}
        {isOpen && (
          <div className="absolute right-0 mt-2 w-48 bg-white rounded-lg shadow-lg border border-gray-200 z-50">
            {/* Profile Header */}
            <div className="px-4 py-3 border-b border-gray-200">
              <div className="flex items-center gap-2">
                <Image
                  src={profileImage}
                  alt={userName}
                  width={40}
                  height={40}
                  className="w-10 h-10 rounded-full "
                />
                <div className="flex-1 min-w-0">
                  <p className="text-sm font-semibold text-black truncate">{userName}</p>
                  <p className="text-xs text-gray-500">Admin Account</p>
                </div>
              </div>
            </div>

            {/* Menu Options */}
            <div className="py-1">
              {profileOptions.map((option) => (
                <button
                  key={option.id}
                  onClick={() => handleOptionClick(option.id)}
                  className="w-full cursor-pointer text-black text-left px-4 py-2 text-sm hover:bg-gray-50 transition-colors duration-150"
                >
                  {option.label}
                </button>
              ))}
            </div>
          </div>
        )}
      </div>
    );
  },
);

ProfileDropdown.displayName = "ProfileDropdown";

export default ProfileDropdown;
