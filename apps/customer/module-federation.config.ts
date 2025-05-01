import { ModuleFederationConfig } from '@nx/module-federation';

const config: ModuleFederationConfig = {
  name: 'customer',
  exposes: {
    './Module': './src/remote-entry.ts',
    './Dash': './src/app/dash.tsx',
    './D': './src/app/dash.tsx',

    './Live': './src/app/liveChat.tsx',
  },
};

/**
 * Nx requires a default export of the config to allow correct resolution of the module federation graph.
 **/
export default config;
