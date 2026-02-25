export interface StatisticCardData {
  id: string;
  label: string;
  backgroundColor: string;
  tailwindColor: string;
  time?: string;
}

export const STATISTICS_DATA: StatisticCardData[] = [
  {
    id: 'response-4h',
    label: 'Temps moyen de réponse',
    backgroundColor: '#55B6E5',
    tailwindColor: 'bg-blue-400',
    time: '4h',
  },
  {
    id: 'response-dark',
    label: 'Horaire d’ouverture aujourd’hui',
    backgroundColor: '#024272',
    tailwindColor: 'bg-blue-900',
    time: '9h - 19h',
  },
  {
    id: 'response-light',
    label: 'Nombre de tickets ouverts',
    backgroundColor: '#ACE7F7',
    tailwindColor: 'bg-blue-200',
    time: '5',
  },
  {
    id: 'response-medium',
    label: 'Nombre de tickets résolus',
    backgroundColor: '#309DD7',
    tailwindColor: 'bg-blue-500',
    time: '10',
  },
];
