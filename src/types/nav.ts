export interface INavItemProps {
  text: string;
  href: string;
  active: boolean;
  btn?: boolean;
  langBtn?: boolean;
  close: () => void;
  Icon?: any;
  badge: boolean;
  favourites: boolean;
  profilePopup: boolean;
}
