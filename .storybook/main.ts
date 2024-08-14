import type { StorybookConfig } from '@storybook/react-webpack5';

const config: StorybookConfig = {
  stories: ['../src/**/*.mdx', '../src/**/*.stories.@(js|jsx|mjs|ts|tsx)'],
  addons: [
    '@storybook/addon-webpack5-compiler-swc',
    '@storybook/addon-onboarding',
    '@storybook/addon-links',
    '@storybook/addon-essentials',
    '@chromatic-com/storybook',
    '@storybook/addon-interactions',
  ],
  framework: {
    name: '@storybook/react-webpack5',
    options: {},
  },
  webpackFinal: async (config) => {
    // webpackFinal 옵션은 스토리북에서 자체저으로 사용하는 웹팩 설정을 변경할 수 있는 옵션이다.
    // webpack 옵션은 기존의 설정을 무시하고 사용자 옵션으로 덮어쓰기 때문에 주의해야 한다.
    config.module?.rules?.push({
      test: /\.(js|jsx|ts|tsx)$/,
      exclude: /node_modules/,
      use: [
        {
          loader: 'babel-loader',
          options: {
            presets: [
              '@babel/preset-env',
              ['@babel/preset-react', { runtime: 'automatic' }],
              '@babel/preset-typescript',
            ],
          },
        },
      ],
    });

    config.resolve?.extensions?.push('.ts', '.tsx', '.js', '.jsx');

    return config;
  },
};
export default config;
