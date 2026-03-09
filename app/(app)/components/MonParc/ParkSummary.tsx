'use client';

import React, { useState, useMemo } from 'react';
import { DEVICES, TABS, IDevice } from './monParcConstants';
import TabBar from './TabBar';
import DeviceTable from './DeviceSection';

type SortField = 'name' | 'type' | 'status' | 'lastConnection' | null;
type SortOrder = 'asc' | 'desc';

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
  const [sortField, setSortField] = useState<SortField>(null);
  const [sortOrder, setSortOrder] = useState<SortOrder>('asc');

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

  const handleSort = (field: SortField) => {
    if (sortField === field) {
      // Toggle sort order if clicking the same field
      setSortOrder(sortOrder === 'asc' ? 'desc' : 'asc');
    } else {
      // Set new field and default to ascending
      setSortField(field);
      setSortOrder('asc');
    }
  };

  // Filter and sort devices based on active tab and sort settings
  const sortedAndFilteredDevices = useMemo(() => {
    const result = activeTab === 'favorites'
      ? devices.filter((device) => device.isFavorite)
      : devices;

    if (!sortField) return result;

    const sorted = [...result].sort((a, b) => {
      let aValue: string | number | Date = '';
      let bValue: string | number | Date = '';

      switch (sortField) {
        case 'name':
          aValue = a.name.toLowerCase();
          bValue = b.name.toLowerCase();
          break;
        case 'type':
          aValue = a.type.toLowerCase();
          bValue = b.type.toLowerCase();
          break;
        case 'status':
          aValue = a.status;
          bValue = b.status;
          break;
        case 'lastConnection':
          // Parse date in format DD/MM/YYYY
          const parseDate = (dateStr: string) => {
            const [day, month, year] = dateStr.split('/').map(Number);
            return new Date(year, month - 1, day).getTime();
          };
          aValue = parseDate(a.lastConnection);
          bValue = parseDate(b.lastConnection);
          break;
      }

      if (aValue < bValue) return sortOrder === 'asc' ? -1 : 1;
      if (aValue > bValue) return sortOrder === 'asc' ? 1 : -1;
      return 0;
    });

    return sorted;
  }, [devices, activeTab, sortField, sortOrder]);

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
        devices={sortedAndFilteredDevices}
        onToggleFavorite={handleToggleFavorite}
        onAddAction={handleAddAction}
        expandedDeviceId={expandedDeviceId}
        onCloseExpanded={handleCloseExpanded}
        sortField={sortField}
        sortOrder={sortOrder}
        onSort={handleSort}
      />
    </div>
  );
};

export default MonParc;