/* eslint-env node */
require('@rushstack/eslint-patch/modern-module-resolution')

module.exports = {
  root: true,
  'extends': [
    'plugin:vue/vue3-essential',
    "@unocss",
    'eslint:recommended',
    '@vue/eslint-config-typescript',
    '@vue/eslint-config-prettier/skip-formatting'
  ],
  parserOptions: {
    ecmaVersion: 'latest'
  },
  rules: {
    // eslint (http://eslint.cn/docs/rules)
    // 要求使用 let 或 const 而不是 var
    "no-var": "error",
    "no-console": ["error", { "allow": ["warn", "error"] }],
    // 不允许多个空行
    "no-multiple-empty-lines": ["error", { "max": 1 }],
    // 禁止在 函数/类/变量 定义之前使用它们
    "no-use-before-define": "off",

    // typeScript (https://typescript-eslint.io/rules)
    // ↓在函数和类方法上需要显式的返回类型
    "@typescript-eslint/explicit-function-return-type": "off",
    // ↓禁止使用any类型
    "@typescript-eslint/no-explicit-any": "off",
    // ↓除导入语句外，禁止使用require语句
    "@typescript-eslint/no-var-requires": "off",
    // ↓禁止使用空函数
    "@typescript-eslint/no-empty-function": "off",
    // ↓在定义变量之前不允许使用变量
    "@typescript-eslint/no-use-before-define": "off",
    // ↓禁止使用@ts-注解
    "@typescript-eslint/ban-ts-comment": "off",
    // ↓禁止使用特定类型
    "@typescript-eslint/ban-types": "off",
    // ↓禁止使用!后缀运算符进行非null断言
    "@typescript-eslint/no-non-null-assertion": "off",
    // ↓在导出的函数和类的公共类方法上需要显式的返回值和参数类型
    "@typescript-eslint/explicit-module-boundary-types": "off",
    // ↓禁止使用未声明的变量
    "@typescript-eslint/no-unused-vars": [
      "error",
      {
        "argsIgnorePattern": "^_",
        "varsIgnorePattern": "^_"
      }
    ],
    "no-unused-vars": [
      "error",
      {
        "argsIgnorePattern": "^_",
        "varsIgnorePattern": "^_"
      }
    ],

    // vue (https://eslint.vuejs.org/rules)
    // ↓强制每行的最大属性数
    "vue/max-attributes-per-line": "off",
    // ↓在多行元素的内容之前和之后需要换行
    "vue/multiline-html-element-content-newline": "off",
    // ↓需要 prop 的默认值
    "vue/require-default-prop": "off",
    // ↓要求组件名称始终是多个单词
    "vue/multi-word-component-names": "off",
    // ↓禁止使用 v-html 来防止 XSS 攻击
    "vue/no-v-html": "off",
    // ↓不允许在组件上使用 v-text / v-html
    "vue/no-v-text-v-html-on-component": "off",

    // ↓props传递给的解构setup导致值失去响应式
    "vue/no-setup-props-destructure": "off",
    // ↓警告顶级标签的顺序
    "vue/component-tags-order": [
      "error",
      {
        "order": ["script", "template", "style"]
      }
    ],

    "vue/component-name-in-template-casing": ["error", "PascalCase"],
    "vue/component-options-name-casing": ["error", "PascalCase"],
    // ↓对自定义事件名称强制使用特定的大小写
    "vue/custom-event-name-casing": ["error", "camelCase"]
  }
}
