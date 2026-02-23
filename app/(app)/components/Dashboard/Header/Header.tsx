"use client";

import { memo, useCallback } from "react";
import HeaderGreeting from "./HeaderGreeting";
import HeaderActions from "./HeaderActions";
import LanguageSelector from "./LanguageSelector";
import ProfileDropdown from "./ProfileDropdown";
import {
  DEFAULT_USER,
  HEADER_ACTIONS,
  LANGUAGE_OPTIONS,
  PROFILE_MENU_OPTIONS,
} from "./headerConstants";

/**
 * Header Component
 * Single Responsibility: Orchestrate header sub-components
 *
 * ✅ SOLID Principles Applied:
 * - Single Responsibility: Composes and coordinates sub-components only
 * - Open/Closed: Extensible via headerConstants without modification
 * - Interface Segregation: Props are minimal and focused
 * - Dependency Inversion: Depends on constants abstractions
 * - Liskov Substitution: All sub-components follow expected interfaces
 *
 * 📱 Responsive Design:
 * - Desktop: Full horizontal layout with all elements
 * - Mobile: Stacked layout with optimized spacing
 * - Hamburger menu for sidebar integration (handled separately)
 */
const Header = memo(() => {
  const currentLanguage = LANGUAGE_OPTIONS[0]; // Default to first language

  const handleLanguageChange = useCallback((languageCode: string) => {
    // TODO: Implement language change logic
    console.log("Language changed to:", languageCode);
  }, []);

  const handleHeaderActionClick = useCallback((actionId: string) => {
    // TODO: Implement action handlers (messages, notifications)
    console.log("Action clicked:", actionId);
  }, []);

  const handleProfileOptionSelect = useCallback((optionId: string) => {
    // TODO: Implement profile option handlers
    if (optionId === "logout") {
      console.log("Logout clicked");
      // Implement logout logic
    } else {
      console.log("Profile option selected:", optionId);
    }
  }, []);

  return (
    <header className="w-full  top-0  ">
      <div className="flex flex-col gap-4 md:flex-row md:items-center md:justify-between px-4 py-4 md:px-8 md:py-5">
        {/* Left Section: Greeting */}
        <HeaderGreeting
          firstName={DEFAULT_USER.firstName}
          lastName={DEFAULT_USER.lastName}
        />

        {/* Right Section: Actions, Language, Profile */}
        <div className="flex items-center justify-between max-sm:justify-end gap-3 sm:gap-4">
          {/* Header Actions (Messages, Notifications) */}

          {/* Language Selector */}
          <LanguageSelector
            currentLanguageIcon={currentLanguage.icon}
            onLanguageChange={handleLanguageChange}
          />
          <div className="flex items-center">
            <HeaderActions
              actions={HEADER_ACTIONS}
              onActionClick={handleHeaderActionClick}
            />
          </div>

          {/* Profile Dropdown */}
          <ProfileDropdown
            profileImage={DEFAULT_USER.profileImage}
            userName={`${DEFAULT_USER.firstName} ${DEFAULT_USER.lastName}`}
            profileOptions={PROFILE_MENU_OPTIONS}
            onOptionSelect={handleProfileOptionSelect}
          />
        </div>
      </div>
    </header>
  );
});

Header.displayName = "Header";

export default Header;
