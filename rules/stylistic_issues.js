'use strict';

module.exports = {
  'space-infix-ops': [2, { int32Hint: false }], // https://github.com/dwyl/goodparts/issues/32
  'array-bracket-spacing': [2, 'never'], // https://github.com/dwyl/goodparts/issues/219
  'block-spacing': 2, // https://github.com/dwyl/goodparts/issues/218
  'brace-style': [2, '1tbs', { allowSingleLine: true }], // https://github.com/dwyl/goodparts/issues/217
  'camelcase': 0, // https://github.com/dwyl/goodparts/issues/216
  'comma-style': [2, 'last'], // https://github.com/dwyl/goodparts/issues/215
  'comma-spacing': [2, { before: false, after: true }], // https://github.com/dwyl/goodparts/issues/214
  'comma-dangle': [2, 'never'], // https://github.com/dwyl/goodparts/issues/213
  'capitalized-comments': 0, // https://github.com/dwyl/goodparts/issues/278
  'computed-property-spacing': [2, 'never'], // https://github.com/dwyl/goodparts/issues/212
  'consistent-this': 0, // https://github.com/dwyl/goodparts/issues/211
  'eol-last': 2, // https://github.com/dwyl/goodparts/issues/210
  'func-call-spacing': [2, 'never'], // https://github.com/dwyl/goodparts/issues/209
  'func-names': 0, // https://github.com/dwyl/goodparts/issues/208
  'func-style': 0, // https://github.com/dwyl/goodparts/issues/207
  'id-blacklist': 0, // https://github.com/dwyl/goodparts/issues/205
  'id-length': 0, // https://github.com/dwyl/goodparts/issues/204
  'id-match': 0, // https://github.com/dwyl/goodparts/issues/202
  'indent': [2, 2], // https://github.com/dwyl/goodparts/issues/201
  'jsx-quotes': 0, // https://github.com/dwyl/goodparts/issues/199
  'padded-blocks': [2, 'never'], // https://github.com/dwyl/goodparts/issues/55
  'quote-props': [2, 'consistent-as-needed', { keywords: false }], // https://github.com/dwyl/goodparts/issues/54
  'quotes': [2, 'single', { avoidEscape: false, allowTemplateLiterals: false }], // https://github.com/dwyl/goodparts/issues/53
  'semi-spacing': [2, { before: false, after: true }], // https://github.com/dwyl/goodparts/issues/50
  'sort-keys': 0, // https://github.com/dwyl/goodparts/issues/39
  'sort-vars': 0, // https://github.com/dwyl/goodparts/issues/38
  'space-in-parens': [2, 'never'], // https://github.com/dwyl/goodparts/issues/34
  'spaced-comment': [2, 'always'], // https://github.com/dwyl/goodparts/issues/20
  'wrap-regex': 0, // https://github.com/dwyl/goodparts/issues/17
  'max-len': [
    2, {
      code: 80,
      ignoreTrailingComments: true,
      comments: 80,
      tabWidth: 2,
      ignoreUrls: false,
      ignoreStrings: false,
      ignoreTemplateLiterals: false
    }
  ], // https://github.com/dwyl/goodparts/issues/186
  'unicode-bom': 0, // https://github.com/dwyl/goodparts/issues/19
  'space-unary-ops': [2, {
    words: true,
    nonwords: false
  }], // https://github.com/dwyl/issues/27
  'space-before-function-paren': [2, {
    anonymous: 'always',
    named: 'always'
  }], // https://github.com/dwyl/goodparts/issues/36
  'space-before-blocks': [2, { functions: 'always', keywords: 'always' }], // https://github.com/dwyl/goodparts/issues/37
  'semi': [2, 'always', { omitLastInOneLineBlock: true }], // https://github.com/dwyl/goodparts/issues/49
  'operator-linebreak': [2, 'before'], // http://eslint.org/docs/rules/operator-linebreak
  'operator-assignment': [2, 'always'], // https://github.com/dwyl/goodparts/issues/76
  'one-var-declaration-per-line': 0,
  'one-var': [2, { initialized: 'never', uninitialized: 'always' }],
  'object-property-newline': [2, { allowMultiplePropertiesPerLine: true }], // https://github.com/dwyl/goodparts/issues/85
  'object-curly-spacing': [
    2,
    'always',
    { objectsInObjects: true, arraysInObjects: true }
  ], // https://github.com/dwyl/goodparts/issues/86
  'object-curly-newline': [2, { multiline: true }], // https://github.com/dwyl/goodparts/issues/100
  'no-whitespace-before-property': 2, // https://github.com/dwyl/goodparts/issues/101
  'no-unneeded-ternary': [2, { defaultAssignment: false }], // https://github.com/dwyl/goodparts/issues/102
  'no-underscore-dangle': 0, // https://github.com/dwyl/goodparts/issues/103
  'no-trailing-spaces': 2, // https://github.com/dwyl/goodparts/issues/104
  'no-ternary': 0, // https://github.com/dwyl/goodparts/issues/107
  'no-tabs': 2, // https://github.com/dwyl/goodparts/issues/109
  'no-plusplus': 0, // https://github.com/dwyl/goodparts/issues/122
  'no-new-object': 2, // https://github.com/dwyl/goodparts/issues/123
  'no-nested-ternary': 0, // https://github.com/dwyl/goodparts/issues/127
  'no-negated-condition': 0, // https://github.com/dwyl/goodparts/issues/145
  'no-multiple-empty-lines': [2, { max: 2, maxBOF: 0, maxEOF: 1 }], // https://github.com/dwyl/goodparts/issues/148
  'no-mixed-spaces-and-tabs': 2, // https://github.com/dwyl/goodparts/issues/149
  'no-mixed-operators': 0, // https://github.com/dwyl/goodparts/issues/155
  'no-lonely-if': 2, // https://github.com/dwyl/goodparts/issues/160
  'no-inline-comments': 0, // https://github.com/dwyl/goodparts/issues/161
  'no-bitwise': 0, // https://github.com/dwyl/goodparts/issues/164
  'no-array-constructor': 2, // https://github.com/dwyl/goodparts/issues/165
  'newline-per-chained-call': [2, { ignoreChainWithDepth: 2 }], // https://github.com/dwyl/goodparts/issues/168
  'new-parens': 2, // https://github.com/dwyl/goodparts/issues/171
  'new-cap': 2, // https://github.com/dwyl/goodparts/issues/173
  'multiline-ternary': 0, // https://github.com/dwyl/goodparts/issues/174
  'max-statements': 0, // https://github.com/dwyl/goodparts/issues/175
  'max-statements-per-line': [2, { max: 1 }], // https://github.com/dwyl/goodparts/issues/176
  'max-params': [2, 5], // https://github.com/dwyl/goodparts/issues/177
  'max-nested-callbacks': [2, 4], // https://github.com/dwyl/goodparts/issues/184
  'max-lines': [2, { max: 300, skipComments: true }], // https://github.com/dwyl/goodparts/issues/185
  'max-depth': [2, 4], // https://github.com/dwyl/goodparts/issues/187
  'lines-around-comment': 0, // https://github.com/dwyl/goodparts/issues/194
  'linebreak-style': [2, 'unix'], // https://github.com/dwyl/goodparts/issues/195
  'line-comment-position': 0, // https://github.com/dwyl/goodparts/issues/196
  'keyword-spacing': [2, { before: true, after: true }], // https://github.com/dwyl/goodparts/issues/197
  'key-spacing': [2, { beforeColon: false, afterColon: true, mode: 'strict' }], // https://github.com/dwyl/goodparts/issues/198
  'no-restricted-syntax': 0, // https://github.com/dwyl/goodparts/issues/111
  'no-continue': 2, // https://github.com/dwyl/goodparts/issues/162,
  'func-name-matching': 2, // https://github.com/dwyl/goodparts/issues/256
  'array-bracket-newline': 0,
  'array-element-newline': 0,
  'function-call-argument-newline': 0,
  'function-paren-newline': 0,
  'implicit-arrow-linebreak': 0,
  'lines-between-class-members': 0,
  'max-lines-per-function': 0,
  'multiline-comment-style': 0,
  'no-buffer-constructor': 0,
  'no-multi-assign': 0,
  'nonblock-statement-body-position': 0,
  'padding-line-between-statements': 0,
  'prefer-destructuring': 0,
  'prefer-exponentiation-operator': 0,
  'prefer-named-capture-group': 0,
  'prefer-object-spread': 0,
  'template-tag-spacing': 0,
  'switch-colon-spacing': 0,
  'semi-style': 0
};
