import frFlagIcon from '../../../../../public/Header/frFlag.png';
import ukFlagIcon from '../../../../../public/Header/ukFlag.png';
import messageIcon from '../../../../../public/Header/messageIcon.svg';
import bellIcon from '../../../../../public/Header/bellIcon.svg';
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
    icon: ukFlagIcon,
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
    label: 'Mon Compte',
    onClick: () => console.log('Go to profile'),
  },
  {
    id: 'Mon parc',
    label: 'Mon parc',
    onClick: () => console.log('Go to Mon parc'),
  },
   {
    id: 'Déconnexion',
    label: 'Déconnexion',
    onClick: () => console.log('Go to Déconnexion'),
  },
];

// Arrow icon constant
export const DOWN_ARROW_ICON = downArrowIcon;
