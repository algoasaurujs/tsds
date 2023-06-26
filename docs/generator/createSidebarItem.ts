import { DeclarationReflection } from 'typedoc';

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

export const createMethodLink = (
  parent: DeclarationReflection,
  method: DeclarationReflection
) => {
  return `/data-structures/${parent.name}/methods/${method.name}`;
};

export const createPropertyLink = (
  parent: DeclarationReflection,
  method: DeclarationReflection
) => {
  return `/data-structures/${parent.name}/properties/${method.name}`;
};
