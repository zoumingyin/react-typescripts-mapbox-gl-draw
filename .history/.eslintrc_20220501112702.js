module.exports = {
  parser: '@typescript-eslint/parser',  // 指定ESLint解析器
  parser: 'typescript-eslint-parser',
  extends: [
    'plugin:react/recommended',  // 使用来自 @eslint-plugin-react 的推荐规则
    'plugin:@typescript-eslint/recommended',  // 使用来自@typescript-eslint/eslint-plugin的推荐规则
    'prettier'
  ],
  "plugins": [
    "react",
    "typescript"
  ],
  parserOptions: {
    ecmaVersion: 2018,  // 允许解析最新的 ECMAScript 特性
    sourceType: 'module',  // 允许使用 import
    ecmaFeatures: {
      jsx: true,  // 允许对JSX进行解析
    },
  },
  rules: {
    "no-undef": 0,
    "typescript/class-name-casing": 2
  },
  settings: {
    react: {
      version: 'detect',  // 告诉 eslint-plugin-react 自动检测 React 的版本
    },
  },
};