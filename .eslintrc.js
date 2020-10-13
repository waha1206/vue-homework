// .eslintrc.js
// eslint 設定 https://cn.eslint.org/docs/rules/semi
// 如果要去除掉分號 error 要設定 'never'
module.exports = {
  extends: ['plugin:vue/essential', 'eslint:recommended', '@vue/prettier'],
  parserOptions: {
    parser: 'babel-eslint'
  },
  rules: {
    semi: ['error', 'never'],
    'no-console': 'off'
  }
}
