import { ModuleFederationConfig } from '@nx/module-federation';

const config: ModuleFederationConfig = {
  name: 'registration',

  exposes: {
    './Module': './src/remote-entry.ts',
    './Dashboard': './src/components/dashboard.tsx',
    './Region': './src/app/region.tsx',
    './Branch': './src/app/branch.tsx',
    './Organization': './src/app/organizations.tsx',
    './Employee': './src/app/employees.tsx',
    './Project': './src/app/project.tsx',
  },
};

/**
 * Nx requires a default export of the config to allow correct resolution of the module federation graph.
 **/
export default config;
