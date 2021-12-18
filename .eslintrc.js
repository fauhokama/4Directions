module.exports = {
  'env': {
    'browser': true,
    'es2021': true,
    'node': true,
  },
  'extends': [
    'plugin:vue/recommended',
    'plugin:nuxt/recommended',
    'plugin:tailwindcss/recommended',
    'google',
  ],
  'parserOptions': {
    'ecmaVersion': 13,
    'sourceType': 'module',
  },
  'plugins': [
    'vue',
  ],
  'rules': {
    'vue/multi-word-component-names': 0,
    'require-jsdoc': 0,
  },
};

