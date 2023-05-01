export = {
  defaultSeverity: 'warning',

  extends: ['./core/rules.js', './core/properties-order.js'],

  plugins: ['stylelint-declaration-block-no-ignored-properties'],

  rules: {
    'plugin/declaration-block-no-ignored-properties': true
  }
}
