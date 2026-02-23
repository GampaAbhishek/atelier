import dashboardicon from "../../../../public/Sidebar/dashboardIcon.png";
import historiqueIcon from "../../../../public/Sidebar/historiqueIcon.png";
import moncompteIcon from "../../../../public/Sidebar/moncompteIcon.png";
import foireAuxQuestionsIcon from "../../../../public/Sidebar/foireAuxQuestionsIcon.png";
import téléchargerlagentIcon from "../../../../public/Sidebar/téléchargerl’agentIcon.png";
import mobileIcon from "../../../../public/Sidebar/mobileIcon.png";
import mailIcon from "../../../../public/Sidebar/mailIcon.png";
import { StaticImageData } from 'next/image';

export interface MenuItem {
  id: string;
  label: string;
  icon: StaticImageData;
    path: string;
}

export interface ContactInfo {
  id: string;
  type: 'phone' | 'email';
  value: string;
  icon: StaticImageData;
}

export const SIDEBAR_MENU_ITEMS: MenuItem[] = [
  {
    id: 'dashboard',
    label: 'Dashboard',
    icon: dashboardicon,
    path : '/dashboard',
  },
  {
    id: 'historique',
    label: 'Historique',
    icon: historiqueIcon,
    path : '/historique',
  },
  {
    id: 'mon-compte',
    label: 'Mon compte',
    icon: moncompteIcon,
    path : '/mon-compte',
  },
  {
    id: 'foire-aux-questions',
    label: 'Foire aux questions',
    icon: foireAuxQuestionsIcon,
    path : '/foire-aux-questions',
  },
  {
    id: 'telecharger-agent',
    label: 'Télécharger l\'agent',
    icon: téléchargerlagentIcon,
    path : '/telecharger-agent',
  },
];

export const SIDEBAR_CONTACT_INFO: ContactInfo[] = [
  {
    id: 'phone',
    type: 'phone',
    value: '00 00 00 00 00',
    icon: mobileIcon,
  },
  {
    id: 'email',
    type: 'email',
    value: 'support@atelierinfonumerik.fr',
    icon: mailIcon,
  },
];
