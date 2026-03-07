import React from 'react';
import { IDevice } from './monParcConstants';
import DeviceTableRow from './DeviceCard';
import DeviceDetailsPanel from './DeviceDetailsPanel';

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
  expandedDeviceId: string | null;
  onCloseExpanded: () => void;
}

const DeviceTable: React.FC<DeviceTableProps> = ({
  devices,
  onToggleFavorite,
  onAddAction,
  expandedDeviceId,
  onCloseExpanded
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
            <React.Fragment key={device.id}>
              <DeviceTableRow
                device={device}
                onToggleFavorite={onToggleFavorite}
                onAddAction={onAddAction}
                index={index}
                onClose={onCloseExpanded}
                expandedDeviceId={expandedDeviceId}
              />
              {expandedDeviceId === device.id && (
                <DeviceDetailsPanel
                  device={device}
                />
              )}
            </React.Fragment>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default DeviceTable;