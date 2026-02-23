import { StaticImageData } from 'next/image';
import lapImage from '../../../../../public/Dashboard/Ticket/lap.png'

export type TicketStatus = 'En attente' | 'En cours' | 'Résolu' | 'Fermé';

export interface TicketData {
  id: string;
  ticketNumber: number;
  image: StaticImageData;
  description: string;
  status: TicketStatus;
  comment: string;
}

export const TICKET_STATUS_COLORS: Record<TicketStatus, string> = {
  'En attente': 'bg-orange-400 text-white',
  'En cours': 'bg-blue-500 text-white',
  'Résolu': 'bg-green-500 text-white',
  'Fermé': 'bg-gray-500 text-white',
};

export const SAMPLE_TICKETS: TicketData[] = [
  {
    id: '1',
    ticketNumber: 4168,
    image: lapImage,
    description:
      'Lorem ipsum dolor sit amet consectetur. Venenatis placerat scelerisque lacoreet tortor in. In vitae lectus mauris magna aliquam mattis vestibulum purus feugiat. Hendrerit et dis posuere mauris id volutpate. Pellentesque cursus sed facilisi fermentum tortor nulla velit ac. Curbitur vel sapien mauris volutpate. Ut amet duis feugiat',
    status: 'En attente',
    comment: 'Lorem ipsum dolor sit...',
  },
  {
    id: '2',
    ticketNumber: 4169,
    image: lapImage,
    description:
      'Lorem ipsum dolor sit amet consectetur. Venenatis placerat scelerisque lacoreet tortor in.',
    status: 'En cours',
    comment: 'En cours de traitement...',
  },
  {
    id: '3',
    ticketNumber: 4169,
    image: lapImage,
    description:
      'Lorem ipsum dolor sit amet consectetur. Venenatis placerat scelerisque lacoreet tortor in.',
    status: 'En cours',
    comment: 'En cours de traitement...',
  },
];
