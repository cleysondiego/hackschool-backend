module.exports = {
  env: {
    es6: true,
    node: true,
  },
  extends: [
    'airbnb-base',
    "prettier", 
    "plugin:jest/recommended", 
    "plugin:jest/style",
  ],
  plugins: ["prettier"],
  globals: {
    Atomics: 'readonly',
    SharedArrayBuffer: 'readonly',
  },
  parserOptions: {
    ecmaVersion: 2018,
    sourceType: 'module',
  },
  rules: {
    "prettier/prettier": "error",
    "class-methods-use-this": "off",
    "no-param-reassign":"off",
    "camelcase":"off",
    "no-unused-vars": ["error", { "argsIgnorePattern": "next"}],
  },
};
