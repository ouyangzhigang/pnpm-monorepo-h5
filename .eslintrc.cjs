module.exports = {
  parser: 'vue-eslint-parser',

  parserOptions: {
    tsconfigRootDir: __dirname,
    parser: '@typescript-eslint/parser',
    ecmaVersion: 2020,
    sourceType: 'module',
    ecmaFeatures: {
      jsx: true,
    },
    project: ['./tsconfig.eslint.json'],
    extraFileExtensions: ['.js'],
  },
  env: {
    browser: true,
    node: true,
    es6: true,
    'vue/setup-compiler-macros': true,
  },
  plugins: ['@typescript-eslint'],
  extends: [
    'airbnb-base',
    'plugin:vue/vue3-recommended',
    'plugin:import/recommended',
    'plugin:import/typescript',
    'plugin:@typescript-eslint/recommended',
    'prettier', //解决prettier和eslint的冲突
    'plugin:prettier/recommended', //解决prettier和eslint的冲突
  ],

  rules: {
    // override/add rules settings here, such as:
    // 'no-console': ['error', { allow: ['log', 'warn'] }],// 允许使用console.log()
    'no-console': process.env.NODE_ENV === 'production' ? 'error' : 'off',
    'no-debugger': process.env.NODE_ENV === 'production' ? 'error' : 'off',
    semi: ['error', 'never'], // 强制不使用分号
    // 'quotes': [2, 'single'],//强制使用单引号
    'no-trailing-spaces': 2, //不允许行末空格
    'no-plusplus': 'off', // 允许使用++
    'no-await-in-loop': 'error', // 禁止在循环中使用await
    'no-unused-vars': 'error', //禁止出现未使用的变量

    // 'no-var': 'off',
    // 'no-var': 'error',// 不能使用var声明变量
    // 'no-extra-semi': 'error',
    // '@typescript-eslint/indent': ['error', 2],
    // 'import/extensions': 'off',
    // 'linebreak-style': [0, 'error', 'windows'],
    // 'indent': ['error', 2, { SwitchCase: 1 }], // error类型，缩进2个空格
    // 'space-before-function-paren': 0, // 在函数左括号的前面是否有空格
    // 'eol-last': 0, // 不检测新文件末尾是否有空行
    // // 'semi': ['error', 'always'], // 在语句后面加分号
    'quotes': ['error', 'single'],// 字符串使用单双引号,double,single
    // 'arrow-parens': 0,
    // 'no-new': 0,//允许使用 new 关键字
    // 'comma-dangle': [2, 'never'], // 数组和对象键值对最后一个逗号， never参数：不能带末尾的逗号, always参数：必须带末尾的逗号，always-multiline多行模式必须带逗号，单行模式不能带逗号
    // 'no-undef': 0
  },
  root: true,
  // https://qiita.com/takagimeow/items/4b493c008fe18d3b5d91
  ignorePatterns: [
    "/lib/**/*", // Ignore built files.
    "**/*.js",
  ]
}