interface Route {
  name: string;
  path: string;
  submenu?: Route[];
}

export interface NavbarProps {
  siteTitle: string;
  routes: Route[];
}
