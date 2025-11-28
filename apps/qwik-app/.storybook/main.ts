import type { StorybookConfig } from 'storybook-framework-qwik';

const config: StorybookConfig = {
  "stories": [
    "../src/**/*.stories.@(js|jsx|mjs|ts|tsx)"
  ],
  "addons": [],
  "framework": "storybook-framework-qwik"
};
export default config;