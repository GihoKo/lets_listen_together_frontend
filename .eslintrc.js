module.exports = {
  env: {
    browser: true, // 브라우저 환경
    es2021: true,
    node: true, // Node.js 환경
  },
  extends: [
    'eslint:recommended',
    'plugin:react/recommended',
    'plugin:prettier/recommended',
    'plugin:@typescript-eslint/recommended',
  ],
  overrides: [
    {
      env: {
        node: true,
      },
      files: ['.eslintrc.{js,cjs}'],
      parserOptions: {
        sourceType: 'script',
      },
    },
  ],
  parserOptions: {
    ecmaVersion: 'latest',
    sourceType: 'module',
    parser: '@typescript-eslint/parser',
  },
  plugins: ['react', 'compat', 'prettier', 'storybook', '@typescript-eslint'], // eslint-plugin-compat 추가
  rules: {
    'react/react-in-jsx-scope': 'off',
    'compat/compat': 'warn',
    '@typescript-eslint/no-var-requires': 'off',
  },
};
