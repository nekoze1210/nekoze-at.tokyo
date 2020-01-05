module.exports = {
  root: true,
  env: {
    browser: true,
    node: true
  },
  parserOptions: {
    parser: 'babel-eslint'
  },
  extends: [
    'eslint:recommended',
    // https://github.com/vuejs/eslint-plugin-vue#priority-a-essential-error-prevention
    'plugin:vue/recommended',
    'plugin:prettier/recommended',
    'plugin:import/errors',
    'plugin:import/warnings'
  ],
  plugins: [
    'vue'
  ],
  rules: {
    'semi': [
      2, 'never'
    ],
    'no-console': 'off',
    'vue/max-attributes-per-line': 'off',
    'vue/html-self-closing': ['error', {
      'html': {
        'void': 'always'
      }
    }],
    'import/no-unresolved': 'off',
    'import/newline-after-import': ['error'],
    'prettier/prettier': ['error',
      {
        'semi': false,
        'singleQuote': true
      }
    ]
  }
}