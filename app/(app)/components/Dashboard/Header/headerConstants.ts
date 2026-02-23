import frFlagIcon from '../../../../../public/Header/frFlag.png';
import messageIcon from '../../../../../public/Header/messageIcon.png';
import bellIcon from '../../../../../public/Header/bellIcon.png';
import profileIcon from '../../../../../public/Header/profileIcon.png';
import downArrowIcon from '../../../../../public/Header/downArrow.png';
import { StaticImageData } from 'next/image';

// User data interface
export interface UserData {
  firstName: string;
  lastName: string;
  profileImage: StaticImageData;
}

// Header action item interface
export interface HeaderActionItem {
  id: string;
  icon: StaticImageData;
  alt: string;
  onClick?: () => void;
  badge?: number;
}

// Language option interface
export interface LanguageOption {
  id: string;
  name: string;
  icon: StaticImageData;
  code: string;
}

// User data constant
export const DEFAULT_USER: UserData = {
  firstName: 'Caroline',
  lastName: 'Gutkowski',
  profileImage: profileIcon,
};

// Header action items constant
export const HEADER_ACTIONS: HeaderActionItem[] = [
  {
    id: 'messages',
    icon: messageIcon,
    alt: 'Messages',
  },
  {
    id: 'notifications',
    icon: bellIcon,
    alt: 'Notifications',
    badge: 0,
  },
];

// Language options constant
export const LANGUAGE_OPTIONS: LanguageOption[] = [
  {
    id: 'fr',
    name: 'Français',
    icon: frFlagIcon,
    code: 'fr',
  },
  {
    id: 'en',
    name: 'English',
    icon: frFlagIcon,
    code: 'en',
  },
];

// Dropdown option interface
export interface DropdownOption {
  id: string;
  label: string;
  onClick: () => void;
}

// Profile dropdown options
export const PROFILE_MENU_OPTIONS: DropdownOption[] = [
  {
    id: 'profile',
    label: 'Mon Profil',
    onClick: () => console.log('Navigate to profile'),
  },
  {
    id: 'settings',
    label: 'Paramètres',
    onClick: () => console.log('Navigate to settings'),
  },
  {
    id: 'logout',
    label: 'Déconnexion',
    onClick: () => console.log('Logout'),
  },
];

// Arrow icon constant
export const DOWN_ARROW_ICON = downArrowIcon;
