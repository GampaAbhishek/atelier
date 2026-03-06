import React from 'react';
import { IDevice } from './monParcConstants';
import DeviceTableRow from './DeviceCard';

/**
 * DeviceTable Component
 * Displays devices in a table format with columns for Appareil, Type, Dossier, Statut, etc.
 * Follows SOLID Principles:
 * - Single Responsibility: Only manages table layout and rendering
 * - Open/Closed: Can be extended with new columns
 * - Interface Segregation: Uses specific IDevice interface
 */
interface DeviceTableProps {
  devices: IDevice[];
  onToggleFavorite: (deviceId: string) => void;
  onAddAction: (deviceId: string) => void;
}

const DeviceTable: React.FC<DeviceTableProps> = ({
  devices,
  onToggleFavorite,
  onAddAction
}) => {
  const TABLE_HEADERS = [
    { id: 'favorite', label: '', width: 'w-12' },
    { id: 'name', label: 'Appareil', width: 'w-25' },
    { id: 'type', label: 'Type', width: 'w-24' },
    { id: 'folder', label: 'Dossier', width: 'w-32' },
    { id: 'status', label: 'Statut', width: 'w-24' },
    { id: 'lastConnection', label: 'Dernière connexion', width: 'w-32' },
    { id: 'action', label: '', width: 'w-12' }
  ];

  if (devices.length === 0) {
    return (
      <div className="bg-white rounded-lg shadow-md p-6 text-center text-gray-500">
        Aucun appareil trouvé
      </div>
    );
  }

  return (
    <div className="">
      {/* Table Header */}
      <table className="w-full">
        <thead>
          <tr className="border-b border-[#332C69]">
            {TABLE_HEADERS.map((header) => (
              <th
                key={header.id}
                className={`px-4 py-3 text-left text-sm font-semibold text-gray-700 ${header.width}`}
              >
                {header.label}
              </th>
            ))}
          </tr>
        </thead>
        <tbody>
          {devices.map((device, index) => (
            <DeviceTableRow
              key={device.id}
              device={device}
              onToggleFavorite={onToggleFavorite}
              onAddAction={onAddAction}
              index={index}
            />
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default DeviceTable;