import React from 'react';
import { IDevice } from './monParcConstants';

interface DeviceDetailsModalProps {
  device: IDevice | null;
  isOpen: boolean;
  onClose: () => void;
}

const DeviceDetailsModal: React.FC<DeviceDetailsModalProps> = ({
  device,
  isOpen,
  onClose,
}) => {
  if (!isOpen || !device) return null;

  return (
    <>
      {/* Backdrop */}
      <div
        className="fixed inset-0 bg-black bg-opacity-50 z-40"
        onClick={onClose}
      />

      {/* Modal */}
      <div className="fixed bottom-0 left-0 right-0 z-50 p-4 sm:inset-0 sm:flex sm:items-center sm:justify-center">
        <div className="bg-white rounded-t-3xl sm:rounded-2xl shadow-2xl w-full sm:w-full sm:max-w-2xl max-h-96 overflow-y-auto">
          {/* Close Button */}
          <button
            onClick={onClose}
            className="absolute top-4 right-4 bg-cyan-500 hover:bg-cyan-600 text-white rounded-full w-10 h-10 flex items-center justify-center transition-colors z-10"
          >
            ⊖
          </button>

          {/* Header */}
          <div className="px-6 sm:px-8 pt-6 pb-4 border-b-2 border-cyan-500">
            <h2 className="text-2xl font-bold text-gray-900">Détails de l&apos;appareil</h2>
          </div>

          {/* Content */}
          <div className="px-6 sm:px-8 py-6">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {/* Left Column */}
              <div className="space-y-6">
                {/* Device Name */}
                <div>
                  <p className="text-sm font-semibold text-gray-700 mb-1">
                    Nom de la machine
                  </p>
                  <p className="text-base text-gray-900">{device.name}</p>
                </div>

                {/* Type */}
                <div>
                  <p className="text-sm font-semibold text-gray-700 mb-1">
                    Type
                  </p>
                  <p className="text-base text-gray-900">{device.type}</p>
                </div>

                {/* Folder */}
                <div>
                  <p className="text-sm font-semibold text-gray-700 mb-1">
                    Dossier
                  </p>
                  <p className="text-base text-gray-900">{device.folder}</p>
                </div>

                {/* Status */}
                <div>
                  <p className="text-sm font-semibold text-gray-700 mb-1">
                    Statut
                  </p>
                  <div className="flex items-center gap-2">
                    <div
                      className={`w-3 h-3 rounded-full ${
                        device.status === 'online'
                          ? 'bg-green-500'
                          : 'bg-red-500'
                      }`}
                    />
                    <p className="text-base text-gray-900">
                      {device.status === 'online' ? 'En ligne' : 'Hors ligne'}
                    </p>
                  </div>
                </div>
              </div>

              {/* Right Column */}
              <div className="space-y-6">
                {/* Last Connection */}
                <div>
                  <p className="text-sm font-semibold text-gray-700 mb-1">
                    Dernière connexion
                  </p>
                  <p className="text-base text-gray-900">{device.lastConnection}</p>
                </div>

                {/* IP Address */}
                <div>
                  <p className="text-sm font-semibold text-gray-700 mb-1">
                    Adresse IP
                  </p>
                  <p className="text-base text-gray-900 font-mono">
                    {device.ipAddress || '000.000.0.00'}
                  </p>
                </div>

                {/* Model */}
                <div>
                  <p className="text-sm font-semibold text-gray-700 mb-1">
                    Modèle
                  </p>
                  <p className="text-base text-gray-900">
                    {device.model || 'N/A'}
                  </p>
                </div>

                {/* Manufacturer */}
                <div>
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
        </div>
      </div>
    </>
  );
};

export default DeviceDetailsModal;
