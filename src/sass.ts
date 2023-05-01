const OVERRIDES = {
  // Override the rules in ~/src/core/rules.ts
  'annotation-no-unknown': [
    true,
    { ignoreAnnotations: ['/^default/', '/^global/'] } // In SASS there are `!default` and `!global` flags
  ],
  'at-rule-no-unknown': null,
  'color-function-notation': 'legacy',
  'font-weight-notation': null,
  'function-name-case': null,
  'function-no-unknown': null,
  'no-invalid-double-slash-comments': null
}

export = {
  customSyntax: 'postcss-scss',

  plugins: ['stylelint-scss'],

  rules: {
    ...OVERRIDES,

    /**
     * Extends
     * Ref. https://github.com/stylelint-scss/stylelint-scss#-extend
     */
    'scss/at-extend-no-missing-placeholder': true,

    /**
     * If-Else
     * Ref. https://github.com/stylelint-scss/stylelint-scss#-if
     */
    'scss/at-if-no-null': true,

    /**
     * Imports
     * Ref. https://github.com/stylelint-scss/stylelint-scss#-import
     */
    'scss/at-import-no-partial-leading-underscore': true,
    'scss/at-import-partial-extension-blacklist': ['sass', 'scss'],

    /**
     * Mixins
     * Ref. https://github.com/stylelint-scss/stylelint-scss#-mixin
     */
    'scss/at-mixin-argumentless-call-parentheses': 'never',

    /**
     * At-Rule
     * Ref. https://github.com/stylelint-scss/stylelint-scss#-rule
     */
    'scss/at-rule-conditional-no-parentheses': true,
    'scss/at-rule-no-unknown': true, // Replace `at-rule-no-unknown`

    /**
     * Variables
     * Ref. https://github.com/stylelint-scss/stylelint-scss#-variable
     */
    'scss/dollar-variable-no-missing-interpolation': true,

    /**
     * Comments
     * Ref. https://github.com/stylelint-scss/stylelint-scss#comment
     */
    'scss/comment-no-empty': true,
    'scss/double-slash-comment-whitespace-inside': 'always',

    /**
     * Declarations
     * Ref. https://github.com/stylelint-scss/stylelint-scss#declaration
     */
    'scss/declaration-nested-properties': 'never',
    'scss/declaration-nested-properties-no-divided-groups': true,

    /**
     * Dimension
     * Ref. https://github.com/stylelint-scss/stylelint-scss#dimension
     */
    'scss/dimension-no-non-numeric-values': true,

    /**
     * Functions
     * Ref. https://github.com/stylelint-scss/stylelint-scss#function
     */
    'scss/function-quote-no-quoted-strings-inside': true,
    'scss/function-unquote-no-unquoted-strings-inside': true,

    /**
     * Maps
     * Ref. https://github.com/stylelint-scss/stylelint-scss#map
     */
    'scss/map-keys-quotes': 'always',

    /**
     * Operators
     * Ref. https://github.com/stylelint-scss/stylelint-scss#operator
     */
    'scss/operator-no-unspaced': true,

    /**
     * Partials
     * Ref. https://github.com/stylelint-scss/stylelint-scss#partial
     */
    'scss/partial-no-import': true,

    /**
     * Selectors
     * Ref. https://github.com/stylelint-scss/stylelint-scss#selector
     */
    'scss/selector-no-redundant-nesting-selector': true,

    /**
     * General
     * Ref. https://github.com/stylelint-scss/stylelint-scss#general--sheet
     */
    'scss/no-global-function-names': true,
    'scss/no-duplicate-dollar-variables': [
      true,
      { ignoreInside: ['at-rule', 'nested-at-rule'], ignoreDefaults: true }
    ],
    'scss/no-duplicate-mixins': true
  }
}
