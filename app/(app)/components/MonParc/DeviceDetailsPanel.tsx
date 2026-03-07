import React from 'react';
import { IDevice } from './monParcConstants';

interface DeviceDetailsPanelProps {
  device: IDevice;
}

const DeviceDetailsPanel: React.FC<DeviceDetailsPanelProps> = ({
  device,
}) => {
  return (
    <tr>
      <td colSpan={7} className="px-4 py-6">
        <div className="bg-blue-50 border-2 border-cyan-500 rounded-lg p-8 relative">
          

          {/* Header */}
          <div className="mb-6">
            <h2 className="text-2xl font-bold text-gray-900">Détails de l&apos;appareil</h2>
          </div>

          {/* Content Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {/* Left Column */}
            <div className="space-y-6">
              {/* Device Name */}
              <div className='flex gap-3'>
                <p className="text-sm font-semibold text-gray-700 mb-1">
                  Nom de la machine
                </p>
                <p className="text-base text-gray-900">{device.name}</p>
              </div>

              

              {/* IP Address */}
              <div className='flex gap-3'>
                <p className="text-sm font-semibold text-gray-700 mb-1">
                  IP privée
                </p>
                <p className="text-base text-gray-900 font-mono">
                  {device.ipAddress || '000.000.0.00'}
                </p>
              </div>
            </div>

            {/* Right Column */}
            <div className="space-y-6">
              {/* Model */}
              <div className='flex gap-3'>
                <p className="text-sm font-semibold text-gray-700 mb-1">
                  Modèle
                </p>
                <p className="text-base text-gray-900">
                  {device.model || 'N/A'}
                </p>
              </div>

              {/* Manufacturer */}
              <div className='flex gap-3'>
                <p className="text-sm font-semibold text-gray-700 mb-1">
                  Fournisseur
                </p>
                <p className="text-base text-gray-900">
                  {device.manufacturer || 'N/A'}
                </p>
              </div>
            </div>
          </div>
        </div>
      </td>
    </tr>
  );
};

export default DeviceDetailsPanel;
