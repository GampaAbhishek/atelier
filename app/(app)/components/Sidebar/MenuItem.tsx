import React, { memo, useCallback } from "react";
import Image, { StaticImageData } from "next/image";
import { useRouter } from "next/navigation";

interface MenuItemProps {
  id: string;
  label: string;
  icon: StaticImageData;
  onClick?: (id: string) => void;
  isActive?: boolean;
  path: string;
}

/**
 * MenuItem Component
 * Responsible for rendering individual menu items
 * Single Responsibility: Menu item rendering
 */
const MenuItem = memo(
  ({ id, label, icon, onClick, isActive = false, path }: MenuItemProps) => {
    const router = useRouter();

    const handleClick = useCallback(
      (id: string, path: string) => {
        onClick?.(id);
        router.push(path);
      },
      [onClick, router],
    );

    return (
      <button
        onClick={() => handleClick(id, path)}
        className={`flex gap-2.5 cursor-pointer items-center w-full px-6 py-3.5 transition-colors hover:bg-[#DFEEFF] rounded-2xl ${
          isActive ? "bg-[#DFEEFF] rounded-2xl" : ""
        }`}
        aria-label={label}
      >
        <Image src={icon} alt={label} width={20} height={20} />
        <span className="text-[16px] font-medium">{label}</span>
      </button>
    );
  },
);

MenuItem.displayName = "MenuItem";

export default MenuItem;
