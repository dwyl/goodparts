module.exports = {
  "valid-jsdoc": ["error", {
    "prefer": { "arg": "param", "argument": "param", "return": "returns" }
  }],
  "no-irregular-whitespace": ["error", {
    "skipStrings": true,
    "skipComments": true,
    "skipRegExps": true,
    "skipTemplates": true
  }],
  "no-func-assign": ["error", "never"],
  "no-extra-boolean-cast": "error",
  "no-empty": ["error", "never"],
  "no-duplicate-case": ["error", "never"],
  "no-dupe-args": ["error", "never"],
  "no-control-regex": "error",
  "no-constant-condition": ["error", "never"],
  "no-cond-assign": ["error", "never"],
  'no-console': 'error', // https://github.com/dwyl/goodparts/issues/16
  'no-debugger': 'error', // https://github.com/dwyl/goodparts/issues/23
  'no-dupe-keys': 'error', // https://github.com/dwyl/goodparts/issues/24
  'no-empty-character-class': 'error', // 'https://github.com/dwyl/goodparts/issues/26'
  'no-ex-assign': 'error', // 'https://github.com/dwyl/goodparts/issues/29'
  'no-extra-parens': 'off', // https://github.com/dwyl/goodparts/issues/31
  'no-extra-semi': 'error', // https://github.com/dwyl/goodparts/issues/33
  'no-inner-declarations': ['error', 'both'], // https://github.com/dwyl/goodparts/issues/40
  'no-invalid-regexp': 'error', // https://github.com/dwyl/goodparts/issues/41
  'no-obj-calls': 'error', // https://github.com/dwyl/goodparts/issues/42
  'no-prototype-builtins': 'off', // https://github.com/dwyl/goodparts/issues/43,
  'no-sparse-arrays': 'error', //https://github.com/dwyl/goodparts/issues/44
  'no-unexpected-multiline': 'error', //https://github.com/dwyl/goodparts/issues/46
  'no-unsafe-finally': 'error', //https://github.com/dwyl/goodparts/issues/47
  'use-isnan': 'error', // https://github.com/dwyl/goodparts/issues/48
  'valid-typeof': ['error', { 'requireStringLiterals': true }], // https://github.com/dwyl/goodparts/issues/52
};
