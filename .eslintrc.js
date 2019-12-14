module.exports = {
  root: true,
  parser: 'babel-eslint',
  extends: [
    'eslint:recommended',
    'plugin:react/recommended',
    'plugin:import/errors',
    'plugin:import/warnings',
  ],
  rules: {
    'react/prop-types': 0,
    'no-console': 'off',
    'react/display-name': 0,
    semi: 0,
    'react-native/no-inline-styles': 0,
    'import/no-named-as-default-member': 0,
    curly: 0,
    'react-hooks/exhaustive-deps': 0,
    'react/no-unused-prop-types': 1,
    'react/no-unescaped-entities': 0,
    'no-unused-vars': [
      'error',
      { vars: 'all', args: 'after-used', ignoreRestSiblings: false, varsIgnorePattern: 'React' },
    ],
    'eslint-comments/no-unlimited-disable': 0,
  },
  settings: {
    'import/resolver': {
      alias: {
        map: [
          ['~components', './src/components'],
          ['~lib', './src/lib'],
          ['~icons', './src/icons'],
        ],
      },
    },
    react: {
      version: 'detect',
    },
  },
  env: {
    browser: true,
    node: true,
  },
}
