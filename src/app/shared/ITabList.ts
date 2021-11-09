// Tab interfaces
export interface ITabList {
  id: number;
  menu: ITabListMenu;
  info: ITabListInfo;
}

export interface ITabListMenu {
  icon: string;
  label: string;
}

export interface ITabListInfo {
  title: string;
  subtitle?: string;
  image?: string;
  text: string;
}
