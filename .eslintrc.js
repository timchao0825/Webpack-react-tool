module.exports = {
  env: {
    browser: true,
    commonjs: true,
    es6: true,
    jest: true,
    node: true,
  },
  parser: 'babel-eslint',
  plugins: ['react'],
  extends: ['standard', 'standard-react', 'plugin:prettier/recommended'],
};
