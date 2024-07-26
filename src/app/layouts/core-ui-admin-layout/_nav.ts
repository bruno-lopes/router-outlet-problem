import { INavData } from '@coreui/angular';

export const navItems: INavData[] = [
  {
    name: 'Dashboard',
    url: '/dashboard',
    iconComponent: { name: 'cil-speedometer' },
  },
  {
    title: true,
    name: 'Modules'
  },
  {
    name: 'Graph',
    url: '/graph',
    iconComponent: { name: 'cil-drop' }
  },

];
