module.exports = {
  env: {
    browser: true,
    es6: true,
  },
  extends: [
    'plugin:react/recommended',
    'airbnb',
    'prettier',
    'prettier/react'
  ],
  globals: {
    Atomics: 'readonly',
    SharedArrayBuffer: 'readonly',
  },
  parserOptions: {
    ecmaFeatures: {
      jsx: true,
    },
    ecmaVersion: 2018,
    sourceType: 'module',
  },
  plugins: [
    'react',
    'prettier'
  ],
  rules: {
    'prettier/prettier': 'error',
    'react/jsx-filename-extension': [
      'warn',
      { extensions: ['.jsx', '.js'] }
    ],
    "jsx-a11y/label-has-for": [ 2, {
      "required": {
        "every": [ "id" ]
      }
    }],
    'no-console': 'off',
    'no-underscore-dangle': 'off',
    'react/prop-types': 'off',
    'import/prefer-default-export': 'off',
    "camelcase": "off",
  },
};
