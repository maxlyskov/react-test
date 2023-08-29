export interface SidebarItem {
  id: number;
  label: string;
  icon: string;
  link: string;
}

export interface SidebarGroup {
  group: string;
  items: SidebarItem[];
}
