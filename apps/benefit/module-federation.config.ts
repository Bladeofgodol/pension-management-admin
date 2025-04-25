import { ModuleFederationConfig } from '@nx/module-federation';

const config: ModuleFederationConfig = {
  name: 'benefit',
  exposes: {
    './Module': './src/remote-entry.ts',
    './Entitlement': './src/app/entitlement.tsx',
    './Report': './src/app/report.tsx',
    './Retiree': './src/app/retiree.tsx',
    './Dashboard': './src/components/dashboard.tsx',
  },
};

/**
 * Nx requires a default export of the config to allow correct resolution of the module federation graph.
 **/
export default config;
