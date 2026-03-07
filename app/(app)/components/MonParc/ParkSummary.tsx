'use client';

import React, { useState } from 'react';
import { DEVICES, TABS } from './monParcConstants';
import TabBar from './TabBar';
import DeviceTable from './DeviceSection';

/**
 * MonParc Component
 * Main component for displaying IT park with tabs and table layout
 * Follows SOLID Principles:
 * - Single Responsibility: Orchestrates the display and manages state
 * - Open/Closed: Can be extended with new features
 * - Dependency Inversion: Depends on abstractions
 */
const MonParc: React.FC = () => {
  const [activeTab, setActiveTab] = useState<'devices' | 'favorites'>('devices');
  const [devices, setDevices] = useState<typeof DEVICES>(DEVICES);
  const [expandedDeviceId, setExpandedDeviceId] = useState<string | null>(null);

  const handleToggleFavorite = (deviceId: string) => {
    setDevices(
      devices.map((device) =>
        device.id === deviceId
          ? { ...device, isFavorite: !device.isFavorite }
          : device
      )
    );
  };

  const handleAddAction = (deviceId: string) => {    
    if (expandedDeviceId === deviceId) {
      setExpandedDeviceId(null);
    } else {
      setExpandedDeviceId(deviceId);
    }
  };

  const handleCloseExpanded = () => {
    setExpandedDeviceId(null);
  };

  // Filter devices based on active tab
  const filteredDevices =
    activeTab === 'favorites'
      ? devices.filter((device) => device.isFavorite)
      : devices;

  return (
    <div className="flex flex-col gap-4">
      {/* Tab Navigation */}
      <TabBar
        tabs={TABS}
        activeTab={activeTab}
        onTabChange={(tabId) => setActiveTab(tabId as 'devices' | 'favorites')}
      />

      {/* Table Content */}
      <DeviceTable
        devices={filteredDevices}
        onToggleFavorite={handleToggleFavorite}
        onAddAction={handleAddAction}
        expandedDeviceId={expandedDeviceId}
        onCloseExpanded={handleCloseExpanded}
      />
    </div>
  );
};

export default MonParc;