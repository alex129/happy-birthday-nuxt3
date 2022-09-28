module.exports = {
  env: {
    browser: true,
    es2021: true,
    jest: true
  },
  extends: [
    'plugin:vue/vue3-essential',
    'standard-with-typescript',
    'prettier', // Add this line!,
    '@vue/eslint-config-typescript',
    '@vue/eslint-config-typescript/recommended',
  ],
  overrides: [
  ],
  parserOptions: {
    ecmaVersion: 'latest',
    sourceType: 'module'
  },
  plugins: [
    'vue',
    'prettier'
  ],
  rules: {
    'vue/multi-word-component-names': 0,
    'camelcase': 'error',
    'spaced-comment': 'error',
    'quotes': ['error', 'single'],
    'no-duplicate-imports': 'error'
  },
  settings: {
    'import/resolver': {
      typescript: {}
    }
  }
}
