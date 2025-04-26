import { ModuleFederationConfig } from '@nx/module-federation';

const config: ModuleFederationConfig = {
  name: 'finance',
  exposes: {
    './Module': './src/remote-entry.ts',
    './Budget': './src/app/budget.tsx',
    './Retiree': './src/app/retiree.tsx',
    './Form': './src/app/form.tsx',
    './Dashboard': './src/components/dashboard.tsx',
  },
};

/**
 * Nx requires a default export of the config to allow correct resolution of the module federation graph.
 **/
export default config;
