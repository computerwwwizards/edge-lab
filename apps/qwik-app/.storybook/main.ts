import type { StorybookConfig } from 'storybook-framework-qwik';

const config: StorybookConfig = {
  "stories": [
    "../src/**/*.stories.@(js|jsx|mjs|ts|tsx)"
  ],
  "addons": [],
  "framework": "storybook-framework-qwik",
  viteFinal: async (config) => {
    if (config.server) {
      config.server.watch = {
        ...config.server.watch,
        ignored: [
          '**/node_modules/**',
          '**/specs/**',
          '**/.git/**'
        ]
      };
    }
    return config;
  }
};
export default config;