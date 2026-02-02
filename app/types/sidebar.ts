export interface MenuItemType {
  id: string;
  label: string;
  icon: React.ElementType;
  badge?: string;
  isActive?: boolean;
}

export interface SidebarProps {
  activeItem?: string;
  onMenuItemClick?: (itemId: string) => void;
}

export interface RoosterMenuItemProps {
  item: MenuItemType;
  isActive: boolean;
  onClick: () => void;
}

export interface MenuItemComponentProps {
  item: MenuItemType;
  isActive: boolean;
  onClick: () => void;
}
