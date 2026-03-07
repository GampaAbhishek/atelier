export interface IDevice {
  id: string;
  name: string;
  type: 'PC' | 'Serveur' | 'Imprimante' | 'Réseau' | 'Stockage';
  folder: string;
  status: 'online' | 'offline' | 'maintenance';
  lastConnection: string;
  isFavorite?: boolean;
  ipAddress?: string;
  model?: string;
  manufacturer?: string;
}

export interface ITab {
  id: 'devices' | 'favorites';
  label: string;
}

export const TABS: ITab[] = [
  { id: 'devices', label: 'Mes appareils' },
  { id: 'favorites', label: 'Mes favoris' }
];

export const DEVICES: IDevice[] = [
  {
    id: 'device-1',
    name: 'Poste A',
    type: 'PC',
    folder: 'IMP PDV',
    status: 'online',
    lastConnection: '01/05/2010',
    isFavorite: false,
    ipAddress: '192.168.1.10',
    model: 'Precision Tower 3620',
    manufacturer: 'Dell Inc.'
  },
  {
    id: 'device-2',
    name: 'Caroline\'s laptop',
    type: 'PC',
    folder: 'IMP redon',
    status: 'offline',
    lastConnection: '01/05/2010',
    isFavorite: true,
    ipAddress: '192.168.1.20',
    model: 'ThinkPad X1 Carbon',
    manufacturer: 'Lenovo'
  },
  {
    id: 'device-3',
    name: 'Poste A',
    type: 'PC',
    folder: 'Nom',
    status: 'online',
    lastConnection: '01/05/2010',
    isFavorite: false,
    ipAddress: '192.168.1.30',
    model: 'OptiPlex 7090',
    manufacturer: 'Dell Inc.'
  },
  {
    id: 'device-4',
    name: 'Serveur Principal',
    type: 'Serveur',
    folder: 'Salle Serveurs',
    status: 'online',
    lastConnection: '01/05/2010',
    isFavorite: false,
    ipAddress: '192.168.1.250',
    model: 'PowerEdge R750',
    manufacturer: 'Dell Inc.'
  },
  {
    id: 'device-5',
    name: 'Imprimante Couleur',
    type: 'Imprimante',
    folder: 'Bureau',
    status: 'offline',
    lastConnection: '30/04/2010',
    isFavorite: true,
    ipAddress: '192.168.1.100',
    model: 'Color LaserJet Enterprise',
    manufacturer: 'HP'
  }
];

export const getStatusColor = (status: IDevice['status']): string => {
  switch (status) {
    case 'online':
      return 'bg-green-500';
    case 'offline':
      return 'bg-red-500';
    case 'maintenance':
      return 'bg-yellow-500';
    default:
      return 'bg-gray-500';
  }
};

export const getStatusText = (status: IDevice['status']): string => {
  switch (status) {
    case 'online':
      return 'En ligne';
    case 'offline':
      return 'Hors ligne';
    case 'maintenance':
      return 'Maintenance';
    default:
      return 'Inconnu';
  }
};