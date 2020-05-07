'use strict';

module.exports = {
  'accessor-pairs': 'error', // https://github.com/dwyl/goodparts/issues/59
  'block-scoped-var': 'error', // https://github.com/dwyl/goodparts/issues/61
  'complexity': ['error', 10], // https://github.com/dwyl/goodparts/issues/63
  'curly': 'error', // https://github.com/dwyl/goodparts/issues/65
  'dot-location': ['error', 'property'], // https://github.com/dwyl/goodparts/issues/68
  'eqeqeq': ['error', 'always'], // https://github.com/dwyl/goodparts/issues/71
  'no-alert': 'error', // https://github.com/dwyl/goodparts/issues/72
  'no-case-declarations': 'error', // https://github.com/dwyl/goodparts/issues/74
  'no-else-return': 'error', // https://github.com/dwyl/goodparts/issues/87
  'no-empty-pattern': 'error', // https://github.com/dwyl/goodparts/issues/88
  'no-eval': 'error', // https://github.com/dwyl/goodparts/issues/89
  'no-extra-bind': 'error', // https://github.com/dwyl/goodparts/issues/90
  'no-fallthrough': 'error', // https://github.com/dwyl/goodparts/issues/95
  'no-global-assign': 'error', // https://github.com/dwyl/goodparts/issues/97
  'no-implicit-globals': 'error', // https://github.com/dwyl/goodparts/issues/110
  'no-invalid-this': 'error', // https://github.com/dwyl/goodparts/issues/115
  'no-labels': 'error', // https://github.com/dwyl/goodparts/issues/120
  'no-loop-func': 'error', // https://github.com/dwyl/goodparts/issues/125
  'no-multi-spaces': 'error', // https://github.com/dwyl/goodparts/issues/130
  'no-new-func': 'error', // https://github.com/dwyl/goodparts/issues/131
  'no-new': 'error', // https://github.com/dwyl/goodparts/issues/133
  'no-octal': 'error', // https://github.com/dwyl/goodparts/issues/137
  'no-proto': 'error', // https://github.com/dwyl/goodparts/issues/142
  'no-return-assign': ['error', 'always'], // https://github.com/dwyl/goodparts/issues/147
  'no-self-assign': ['error', { props: true }], // https://github.com/dwyl/goodparts/issues/159
  'no-sequences': 'error', // https://github.com/dwyl/goodparts/issues/163
  'no-throw-literal': 'error', // https://github.com/dwyl/goodparts/issues/108
  'no-unused-labels': 'error', // https://github.com/dwyl/goodparts/issues/166
  'no-useless-concat': 'error', // https://github.com/dwyl/goodparts/issues/172
  'no-unmodified-loop-condition': 'error', // https://github.com/dwyl/goodparts/issues/178
  'no-void': 'error', // https://github.com/dwyl/goodparts/issues/179
  'no-with': 'error', // https://github.com/dwyl/goodparts/issues/181
  'vars-on-top': 'error', // https://github.com/dwyl/goodparts/issues/182
  'yoda': ['error', 'never', { exceptRange: true }], // https://github.com/dwyl/goodparts/issues/183
  'array-callback-return': 'error', // https://github.com/dwyl/goodparts/issues/57
  'class-methods-use-this': 'off', // https://github.com/dwyl/goodparts/issues/58
  'consistent-return': 'error', // https://github.com/dwyl/goodparts/issues/60
  'default-case': 'error', // https://github.com/dwyl/goodparts/issues/62
  'dot-notation': 'error', // https://github.com/dwyl/goodparts/issues/64
  'no-caller': 'error', // https://github.com/dwyl/goodparts/issues/66
  'guard-for-in': 'off', // https://github.com/dwyl/goodparts/issues/67
  'no-div-regex': 'error', // https://github.com/dwyl/goodparts/issues/69
  'no-empty-function': 'error', // https://github.com/dwyl/goodparts/issues/70
  'no-eq-null': 'error', // https://github.com/dwyl/goodparts/issues/75
  'no-extend-native': 'error', // https://github.com/dwyl/goodparts/issues/77
  'no-extra-label': 'error', // https://github.com/dwyl/goodparts/issues/80
  'no-floating-decimal': 'error', // https://github.com/dwyl/goodparts/issues/81
  'no-implicit-coercion': 'error', // https://github.com/dwyl/goodparts/issues/82
  'no-implied-eval': 'error', // https://github.com/dwyl/goodparts/issues/83
  'no-iterator': 'error', // https://github.com/dwyl/goodparts/issues/84
  'no-lone-blocks': 'error', // https://github.com/dwyl/goodparts/issues/91
  'no-magic-numbers': 'off', // https://github.com/dwyl/goodparts/issues/92
  'no-multi-str': 'error', // https://github.com/dwyl/goodparts/issues/93
  'no-new-wrappers': 'error', // https://github.com/dwyl/goodparts/issues/94
  'no-octal-escape': 'error', // https://github.com/dwyl/goodparts/issues/96
  'no-param-reassign': ['error', { props: false }], // https://github.com/dwyl/goodparts/issues/98
  'no-redeclare': 'error', // https://github.com/dwyl/goodparts/issues/99
  'no-script-url': 'error', // https://github.com/dwyl/goodparts/issues/105
  'no-self-compare': 'error', // https://github.com/dwyl/goodparts/issues/106
  'no-unused-expressions': 'error', // https://github.com/dwyl/goodparts/issues/113
  'no-useless-call': 'error', // https://github.com/dwyl/goodparts/issues/114
  'no-useless-escape': 'error', // https://github.com/dwyl/goodparts/issues/116
  'no-warning-comments': 'off', // https://github.com/dwyl/goodparts/issues/117
  'radix': ['error', 'always'], // https://github.com/dwyl/goodparts/issues/118
  'wrap-iife': ['error', 'inside'], // https://github.com/dwyl/goodparts/issues/124
  'no-useless-return': 'error', // https://github.com/dwyl/goodparts/issues/261
  'default-param-last': 'off',
  'grouped-accessor-pairs': ['error', 'getBeforeSet'],
  'max-classes-per-file': 'off',
  'no-constructor-return': 'off',
  'no-useless-catch': 'error',
  'prefer-promise-reject-errors': 'off',
  'prefer-regex-literals': 'off',
  'require-unicode-regexp': 'off'
};
