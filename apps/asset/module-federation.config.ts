import { ModuleFederationConfig } from '@nx/module-federation';

const config: ModuleFederationConfig = {
  name: 'asset',
  exposes: {
    './Module': './src/remote-entry.ts',
    './Dashboard': './src/components/dashboard.tsx',
    './Investment': './src/app/investment.tsx',
    './Assets': './src/app/assets.tsx',
    './Form': './src/app/form.tsx',
  },
};

/**
 * Nx requires a default export of the config to allow correct resolution of the module federation graph.
 **/
export default config;
