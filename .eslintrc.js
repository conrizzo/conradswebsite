module.exports = {
  root: true,
  env: {
    node: true
  },
  'extends': [
    'plugin:vue/vue3-essential',
    'eslint:recommended',
    '@vue/typescript'
  ],
  parserOptions: {
    parser: '@typescript-eslint/parser',

    // Use the new version of TypeScript - this section betlow is optional
    project: './tsconfig.json',
    tsconfigRootDir: __dirname,
    createDefaultProgram: true,
    extraFileExtensions: ['.vue'],
    ecmaFeatures: {
      jsx: true
    }
    // END optional section
  },
  rules: {
    'no-console': process.env.NODE_ENV === 'production' ? 'warn' : 'off',
    'no-debugger': process.env.NODE_ENV === 'production' ? 'warn' : 'off'
  }
}
