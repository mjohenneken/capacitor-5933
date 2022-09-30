import { ExtraOptions } from "@angular/router";


export const routerConfig: ExtraOptions = {
  relativeLinkResolution: 'legacy',
  scrollPositionRestoration: 'enabled',
  useHash: false,
  enableTracing: false,
  // Don't perform initial navigation in iframes or popups
};
