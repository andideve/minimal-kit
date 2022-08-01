import { siteMenu } from './site-menu';
import { SITE_PATHS } from '../../config/globals';
import { Menu } from '../../types/defaults';

export const footerMenu: Menu[] = [...siteMenu, { label: 'Sitemap', to: SITE_PATHS.SITEMAP }];
