const OVERRIDES = {
  // Override the rules in ~/src/core/rules.ts
  'font-weight-notation': null,
  'function-url-quotes': null,
  'length-zero-no-unit': null,
  'no-empty-source': null,
  'number-max-precision': null,
  'property-no-unknown': [
    true,
    { checkPrefixed: false, ignoreProperties: [/^styled-mixin/] }
  ],
  'selector-class-pattern': null,
  'value-keyword-case': null
}

export = {
  customSyntax: 'postcss-styled-syntax',

  rules: OVERRIDES
}
