import { ModuleFederationConfig } from '@nx/module-federation';

const config: ModuleFederationConfig = {
  name: 'contribution',
  exposes: {
    './Module': './src/remote-entry.ts',
    './Contribution': './src/app/contribution.tsx',
    './Outstanding': './src/app/outstanding.tsx',
    './RecordContrib': './src/app/recordContribution.tsx',
    './MissingContrib': './src/app/missingContribution.tsx',
    './Dashboard': './src/components/dashboard.tsx',
  },
};

/**
 * Nx requires a default export of the config to allow correct resolution of the module federation graph.
 **/
export default config;
