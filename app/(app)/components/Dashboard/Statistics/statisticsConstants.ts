export interface StatisticCardData {
  id: string;
  label: string;
  backgroundColor: string;
  tailwindColor: string;
}

export const STATISTICS_DATA: StatisticCardData[] = [
  {
    id: 'response-4h',
    label: 'Réponse en moins de 4h',
    backgroundColor: '#55B6E5',
    tailwindColor: 'bg-blue-400',
  },
  {
    id: 'response-dark',
    label: 'Réponse en moins de 4h',
    backgroundColor: '#024272',
    tailwindColor: 'bg-blue-900',
  },
  {
    id: 'response-light',
    label: 'Réponse en moins de 4h',
    backgroundColor: '#ACE7F7',
    tailwindColor: 'bg-blue-200',
  },
  {
    id: 'response-medium',
    label: 'Réponse en moins de 4h',
    backgroundColor: '#309DD7',
    tailwindColor: 'bg-blue-500',
  },
];
