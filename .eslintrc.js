module.exports = {
  // プロジェクトで利用する大元の設定ファイルであることを明示する
  //意図しない ESLint の設定が適用を防ぐことが可能
  root: true,
  // 静的解析の設定項目を継承したいリストを指定する
  extends: [
    // ESLint公式が推奨する設定
    "eslint:recommended",
    // Vue公式が推奨するVue3向けの設定
    "plugin:vue/vue3-recommended",
    // Vueの開発をTypescriptで行うときの設定
    "@vue/eslint-config-typescript/recommended",
  ],
  //静的解析の対象としたい項目を明示的に指定する
  //rulesの内容はextendsの内容よりも優先される
  //複数回同じ変数を宣言できないようにする。初期化の混乱を避けるために
  rules: {
    "no-redeclare": "off",
  },
  //defineProps not definedを解消する
  globals:{
    defineProps: "readonly",
    defineEmits: "readonly",
    defineExpose: "readonly",
    withDefaults: "readonly"
  }
};
