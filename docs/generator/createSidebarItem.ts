type SidebarItem = {
  text: string;
  collapsed: boolean;
  items: { text: string; link: string }[];
};
export const createSidebarItem = (text: string): SidebarItem => {
  return {
    text,
    collapsed: true,
    items: [],
  };
};
