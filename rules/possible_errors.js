'use strict';

module.exports = {
  'no-irregular-whitespace': [2, {
    skipStrings: true,
    skipComments: true,
    skipRegExps: true,
    skipTemplates: true
  }], // https://github.com/dwyl/goodparts/issues/45
  'no-func-assign': [2], // https://github.com/dwyl/goodparts/issues/35
  'no-extra-boolean-cast': 2, // https://github.com/dwyl/goodparts/issues/30
  'no-empty': [2], // https://github.com/dwyl/goodparts/issues/28
  'no-duplicate-case': [2], // https://github.com/dwyl/goodparts/issues/25
  'no-dupe-args': [2], // https://github.com/dwyl/goodparts/issues/22
  'no-control-regex': 2, // https://github.com/dwyl/goodparts/issues/21
  'no-constant-condition': [2], // https://github.com/dwyl/goodparts/issues/18
  'no-cond-assign': [2], // https://github.com/dwyl/goodparts/issues/15
  'no-console': 2, // https://github.com/dwyl/goodparts/issues/16
  'no-debugger': 2, // https://github.com/dwyl/goodparts/issues/23
  'no-dupe-keys': 2, // https://github.com/dwyl/goodparts/issues/24
  'no-empty-character-class': 2, // 'https://github.com/dwyl/goodparts/issues/26'
  'no-ex-assign': 2, // 'https://github.com/dwyl/goodparts/issues/29'
  'no-extra-parens': 0, // https://github.com/dwyl/goodparts/issues/31
  'no-extra-semi': 2, // https://github.com/dwyl/goodparts/issues/33
  'no-inner-declarations': [2, 'both'], // https://github.com/dwyl/goodparts/issues/40
  'no-invalid-regexp': 2, // https://github.com/dwyl/goodparts/issues/41
  'no-obj-calls': 2, // https://github.com/dwyl/goodparts/issues/42
  'no-prototype-builtins': 0, // https://github.com/dwyl/goodparts/issues/43,
  'no-sparse-arrays': 2, // https://github.com/dwyl/goodparts/issues/44
  'no-template-curly-in-string': 0, // https://github.com/dwyl/goodparts/issues/241
  'no-unexpected-multiline': 2, // https://github.com/dwyl/goodparts/issues/46
  'no-unsafe-finally': 2, // https://github.com/dwyl/goodparts/issues/47
  'no-unsafe-negation': 2, // https://github.com/dwyl/goodparts/issues/239
  'no-unreachable': 2, // https://github.com/dwyl/goodparts/issues/240
  'use-isnan': 2, // https://github.com/dwyl/goodparts/issues/48
  'valid-typeof': [2, { requireStringLiterals: true }], // https://github.com/dwyl/goodparts/issues/52
  'no-regex-spaces': 2, // http://eslint.org/docs/rules/
  'for-direction': 2,
  'getter-return': 2,
  'no-async-promise-executor': 0,
  'no-await-in-loop': 0,
  'no-compare-neg-zero': 2,
  'no-dupe-else-if': 2,
  'no-import-assign': 2,
  'no-misleading-character-class': 0,
  'no-setter-return': 2,
  'require-atomic-updates': 0
};
