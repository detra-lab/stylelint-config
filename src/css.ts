import { CSS_PROPERTIES_ORDER } from './core/properties-order'
import { CONVENTIONS, GENERAL } from './core/rules'

export = {
  defaultSeverity: 'warning',

  plugins: [
    'stylelint-order',
    'stylelint-declaration-block-no-ignored-properties'
  ],

  rules: {
    ...GENERAL,
    ...CONVENTIONS,
    'order/properties-order': CSS_PROPERTIES_ORDER,
    'plugin/declaration-block-no-ignored-properties': true
  }
}
