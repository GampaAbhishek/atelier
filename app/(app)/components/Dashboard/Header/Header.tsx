"use client";

import { memo, useCallback, useState } from "react";
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
import { useRouter } from "next/navigation";
import { CookieManager } from "@/app/utils/CookieManager";

const Header = memo(() => {
  const [currentLanguage, setCurrentLanguage] = useState(LANGUAGE_OPTIONS[0]); // Default to first language

  const route = useRouter();

  const handleLanguageChange = useCallback((languageCode: string) => {
    // TODO: Implement language change logic
    console.log("Language changed to:", languageCode);
    // Update current language (for demo purposes)
    const newLanguage = LANGUAGE_OPTIONS.find(
      (lang) => lang.code === languageCode,
    );
    if (newLanguage) {
      setCurrentLanguage(newLanguage);
    }
  }, []);

  const handleHeaderActionClick = useCallback((actionId: string) => {
    // TODO: Implement action handlers (messages, notifications)
    console.log("Action clicked:", actionId);
  }, []);

  // eslint-disable-next-line react-hooks/preserve-manual-memoization
  const handleProfileOptionSelect = useCallback((optionId: string) => {
    // TODO: Implement profile option handlers

    if (optionId === "profile") {
      console.log("Go to profile clicked");
      // Implement navigation to profile
      route.push("/mon-compte");
    }
    if (optionId === "Mon parc") {
      console.log("Go to settings clicked");
      route.push("/mon-parc");
    }
    if (optionId === "Déconnexion") {
      // remove token and customerId from localStorage
      localStorage.removeItem("atelier_access_token");
      localStorage.removeItem("atelier_customer_id");
      localStorage.removeItem("atelier_refresh_token");
      CookieManager.deleteCookie("atelier_access_token");
      CookieManager.deleteCookie("atelier_customer_id");
      CookieManager.deleteCookie("atelier_refresh_token");
      console.log("Logout clicked");
      route.push("/login");
    }

    console.log("Profile option selected:", optionId);
  }, []);

  return (
    <header className="w-full bg-white shadow-sm pt-[10px]">
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
