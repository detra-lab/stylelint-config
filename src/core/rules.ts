import { lowerCase, namePattern } from './namespaces'

const GENERAL = {
  /**
   * Descending
   * Ref. https://stylelint.io/user-guide/rules#descending
   */
  'no-descending-specificity': null,

  /**
   * Duplicate
   * Ref. https://stylelint.io/user-guide/rules#duplicate
   */
  'declaration-block-no-duplicate-custom-properties': null,
  'declaration-block-no-duplicate-properties': true,
  'font-family-no-duplicate-names': true,
  'keyframe-block-no-duplicate-selectors': true,
  'no-duplicate-at-import-rules': true,
  'no-duplicate-selectors': [
    true,
    {
      disallowInList: false
    }
  ],

  /**
   * Empty
   * Ref. https://stylelint.io/user-guide/rules#empty
   */
  'block-no-empty': true,
  'comment-no-empty': true,
  'no-empty-source': true,

  /**
   * Invalid
   * Ref. https://stylelint.io/user-guide/rules#invalid
   */
  'color-no-invalid-hex': true,
  'function-calc-no-unspaced-operator': true,
  'keyframe-declaration-no-important': true,
  'named-grid-areas-no-invalid': true,
  'no-invalid-double-slash-comments': true,
  'no-invalid-position-at-import-rule': true,
  'string-no-newline': true,

  /**
   * Irregular
   * Ref. https://stylelint.io/user-guide/rules#irregular
   */
  'no-irregular-whitespace': null,

  /**
   * Missing
   * Ref. https://stylelint.io/user-guide/rules#missing
   */
  'custom-property-no-missing-var-function': null,
  'font-family-no-missing-generic-family-keyword': null,

  /**
   * Non-standard
   * Ref. https://stylelint.io/user-guide/rules#non-standard
   */
  'function-linear-gradient-no-nonstandard-direction': true,

  /**
   * Overrides
   * Ref. https://stylelint.io/user-guide/rules#overrides
   */
  'declaration-block-no-shorthand-property-overrides': true,

  /**
   * Unmatchable
   * Ref. https://stylelint.io/user-guide/rules#unmatchable
   */
  'selector-anb-no-unmatchable': true,

  /**
   * Unknown
   * Ref. https://stylelint.io/user-guide/rules#unknown
   */
  'annotation-no-unknown': true,
  'at-rule-no-unknown': null,
  'declaration-property-value-no-unknown': null,
  'function-no-unknown': true,
  'media-feature-name-no-unknown': true,
  'no-unknown-animations': null,
  'no-unknown-custom-properties': null,
  'property-no-unknown': [
    true,
    {
      checkPrefixed: true
    }
  ],
  'selector-pseudo-class-no-unknown': [
    true,
    { ignorePseudoClasses: ['global', 'local'] }
  ],
  'selector-pseudo-element-no-unknown': true,
  'selector-type-no-unknown': [true, { ignore: ['custom-elements'] }],
  'unit-no-unknown': [true, { ignoreFunctions: ['image-set'] }]
}

const CONVENTIONS = {
  /**
   * Allowed, disallowed & required
   * Ref. https://stylelint.io/user-guide/rules#allowed-disallowed--required
   */
  // --- At-rule
  'at-rule-allowed-list': null,
  'at-rule-disallowed-list': null,
  'at-rule-no-vendor-prefix': true,
  'at-rule-property-required-list': {
    'font-face': ['font-display', 'font-family', 'font-style']
  },

  // --- Color
  'color-hex-alpha': 'never',
  'color-named': 'never',
  'color-no-hex': null,

  // --- Comment
  'comment-word-disallowed-list': [
    ['fuck', 'shit', 'damn', 'twerk', 'egg yolk']
  ],

  // --- Declaration
  'declaration-no-important': true,
  'declaration-property-unit-allowed-list': null,
  'declaration-property-unit-disallowed-list': null,
  'declaration-property-value-allowed-list': null,
  'declaration-property-value-disallowed-list': {
    '/^border(?!-(width|spacing))/': [/thin/, /medium/, /thick/],
    '/^transition/': [/all/]
  },

  // --- Function
  'function-allowed-list': null,
  'function-disallowed-list': null,
  'function-url-no-scheme-relative': true,
  'function-url-scheme-allowed-list': null,
  'function-url-scheme-disallowed-list': null,

  // --- Length
  'length-zero-no-unit': true,

  // --- Media feature
  'media-feature-name-allowed-list': null,
  'media-feature-name-disallowed-list': null,
  'media-feature-name-no-vendor-prefix': true,
  'media-feature-name-unit-allowed-list': null,
  'media-feature-name-value-allowed-list': null,

  // --- Property
  'property-allowed-list': null,
  'property-disallowed-list': null,
  'property-no-vendor-prefix': [
    true,
    {
      ignoreProperties: [
        'app-region', // For Electron
        'appearance',
        'mask',
        'tab-size', // It's still only prefixed in Firefox
        'text-size-adjust'
      ]
    }
  ],

  // --- Rule
  'rule-selector-property-disallowed-list': null,

  // --- Selector
  'selector-attribute-name-disallowed-list': null,
  'selector-attribute-operator-allowed-list': null,
  'selector-attribute-operator-disallowed-list': null,
  'selector-combinator-allowed-list': null,
  'selector-combinator-disallowed-list': null,
  'selector-disallowed-list': null,
  'selector-no-qualifying-type': null,
  'selector-no-vendor-prefix': [
    true,
    {
      ignoreSelectors: ['::-webkit-input-placeholder']
    }
  ],
  'selector-pseudo-class-allowed-list': null,
  'selector-pseudo-class-disallowed-list': null,
  'selector-pseudo-element-allowed-list': null,
  'selector-pseudo-element-disallowed-list': null,

  // --- Unit
  'unit-allowed-list': null,
  'unit-disallowed-list': null,

  // --- Value
  'value-no-vendor-prefix': [
    true,
    {
      ignoreValues: ['grab', 'grabbing']
    }
  ],

  // --- Case
  'function-name-case': 'lower',
  'selector-type-case': 'lower',
  'value-keyword-case': ['lower', { camelCaseSvgKeywords: true }],

  /**
   * Empty lines
   * Ref. https://stylelint.io/user-guide/rules#empty-lines
   */
  'at-rule-empty-line-before': [
    'always',
    {
      except: ['blockless-after-blockless'],
      ignore: ['inside-block', 'after-comment']
    }
  ],
  'comment-empty-line-before': null,
  'custom-property-empty-line-before': 'never',
  'declaration-empty-line-before': 'never',
  'rule-empty-line-before': [
    'always',
    {
      except: ['after-single-line-comment', 'first-nested'],
      ignore: ['after-comment']
    }
  ],

  /**
   * Max & min
   * Ref. https://stylelint.io/user-guide/rules#max--min
   */
  'declaration-block-single-line-max-declarations': null,
  'declaration-property-max-values': null,
  'max-nesting-depth': [
    8,
    {
      ignore: ['pseudo-classes']
    }
  ],
  'number-max-precision': 3,
  'selector-max-attribute': 8,
  'selector-max-class': 8,
  'selector-max-combinators': null,
  'selector-max-compound-selectors': 8,
  'selector-max-id': 2,
  'selector-max-pseudo-class': 8,
  'selector-max-specificity': null,
  'selector-max-type': 8,
  'selector-max-universal': 2,
  'time-min-milliseconds': 100,

  /**
   * Notation
   * Ref. https://stylelint.io/user-guide/rules#notation
   */
  'alpha-value-notation': 'number',
  'color-function-notation': 'modern',
  'color-hex-length': 'short',
  'font-weight-notation': 'numeric',
  'hue-degree-notation': 'angle',
  'import-notation': 'url',
  'keyframe-selector-notation': 'percentage-unless-within-keyword-only-block',
  'media-feature-range-notation': null,
  'selector-not-notation': 'complex',
  'selector-pseudo-element-colon-notation': 'double',

  /**
   * Pattern
   * Ref. https://stylelint.io/user-guide/rules#pattern
   */
  'comment-pattern': null,
  'custom-media-pattern': null,
  'custom-property-pattern': null,
  'keyframes-name-pattern': lowerCase,
  'selector-class-pattern': namePattern,
  'selector-id-pattern': namePattern,
  'selector-nested-pattern': null,

  /**
   * Quotes
   * Ref. https://stylelint.io/user-guide/rules#quotes
   */
  'font-family-name-quotes': 'always-where-recommended',
  'function-url-quotes': 'always',
  'selector-attribute-quotes': 'always',

  /**
   * Redundant
   * Ref. https://stylelint.io/user-guide/rules#redundant
   */
  'declaration-block-no-redundant-longhand-properties': [
    true,
    { ignoreShorthands: ['grid-template'] }
  ],
  'shorthand-property-no-redundant-values': true,

  /**
   * Whitespace inside
   * Ref. https://stylelint.io/user-guide/rules#whitespace-inside
   */
  'comment-whitespace-inside': 'always'
}

export = {
  rules: {
    ...GENERAL,
    ...CONVENTIONS
  }
}
