import React from "react";
import { IDevice, getStatusColor } from "./monParcConstants";

/**
 * DeviceTableRow Component
 * Displays individual device information in a table row
 * Follows SOLID Principles:
 * - Single Responsibility: Only displays row content
 */
interface DeviceTableRowProps {
  device: IDevice;
  onToggleFavorite: (deviceId: string) => void;
  onAddAction: (deviceId: string) => void;
  index: number; // Added index prop for unique key generation
  onClose: () => void;
  expandedDeviceId: string | null;
}

const DeviceTableRow: React.FC<DeviceTableRowProps> = ({
  device,
  onToggleFavorite,
  onAddAction,
  index,
  onClose,
  expandedDeviceId,
}) => {
  const statusColor = getStatusColor(device.status);

  console.log("expandedDeviceId", expandedDeviceId);

  return (
    <tr className={index % 2 === 0 ? "" : "bg-[#DBF5FC]"}>
      {/* Favorite Column */}
      <td className="px-4 py-3 text-center">
        <button
          onClick={() => onToggleFavorite(device.id)}
          className="text-lg transition-transform hover:scale-110"
        >
          {device.isFavorite ? "⭐" : " "}
        </button>
      </td>

      {/* Device Name */}
      <td className="px-4 py-3 text-sm font-medium text-gray-900">
        {device.name}
      </td>

      {/* Type */}
      <td className="px-4 py-3 text-sm text-gray-700">{device.type}</td>

      {/* Folder */}
      <td className="px-4 py-3 text-sm text-gray-700">{device.folder}</td>

      {/* Status */}
      <td className="px-4 py-3 text-sm">
        <div className="flex items-center gap-2">
          <div className={`w-2 h-2 rounded-full ${statusColor}`}></div>
          <span className="text-gray-700">
            {device.status === "online" ? "En ligne" : "Hors ligne"}
          </span>
        </div>
      </td>

      {/* Last Connection */}
      <td className="px-4 py-3 text-sm text-gray-700">
        {device.lastConnection}
      </td>

      {/* Action Button */}
      <td className="px-4 py-3 text-center">
        {expandedDeviceId === null ? (
          <button
            onClick={() => onAddAction(device.id)}
            className="bg-blue-500 hover:bg-blue-600 text-white rounded-full w-8 h-8 flex items-center justify-center transition-colors"
          >
            +
          </button>
        ) : (
          <button
            onClick={onClose}
            className="bg-blue-500 hover:bg-blue-600 text-white rounded-full w-8 h-8 flex items-center justify-center transition-colors"
          >
            -
          </button>
        )}
      </td>
    </tr>
  );
};

export default DeviceTableRow;
