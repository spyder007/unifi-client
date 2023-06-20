const OFF = 0;
const WARN = 1;
const ERROR = 2;
module.exports = {
  root: true,
  env: {
    browser: true,
    es6: true,
    jest: true,
    node: true,
  },
  extends: [
    // 'plugin:@typescript-eslint/eslint-recommended',
    // 'plugin:@typescript-eslint/recommended',
    'plugin:import/errors',
    'plugin:react-hooks/recommended',
    'plugin:react/recommended',
    'plugin:jsx-a11y/recommended',
    'prettier',
  ],
  parser: '@typescript-eslint/parser',
  parserOptions: {
    ecmaFeatures: {
      jsx: true,
      impliedStrict: true,
    },
    ecmaVersion: 'latest',
    sourceType: 'module',
  },
  plugins: [],
  settings: {
    'import/parsers': {
      '@typescript-eslint/parser': ['.ts', '.tsx'],
    },
    'import/resolver': {
      typescript: {
        alwaysTryTypes: true,
      },
    },
    react: {
      version: 'detect',
    },
  },
  rules: {
    'import/extensions': [
      'error',
      'ignorePackages',
      {
        js: 'never',
        jsx: 'never',
        ts: 'never',
        tsx: 'never',
      },
    ],
    'import/named': WARN,
    'import/no-extraneous-dependencies': [
      ERROR,
      {
        devDependencies: true,
      },
    ],
    'import/prefer-default-export': OFF,
    'import/no-default-export': OFF,
    'react/jsx-filename-extension': [
      ERROR,
      {
        extensions: ['.jsx', '.tsx'],
      },
    ],
    'react/static-property-placement': [ERROR, 'static public field'],
    'react/state-in-constructor': [ERROR, 'never'],
    'react/react-in-jsx-scope': 'off',
    'react/jsx-uses-react': 'off',
  },
  overrides: [
    {
      files: ['**/*.{ts,tsx}'],
      extends: [],
    },
    {
      files: ['**/*.stories.{js,jsx,ts,tsx}'],
      rules: {
        'import/no-default-export': OFF,
      },
    },
  ],
};
