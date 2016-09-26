module.exports = {
  "valid-jsdoc": ["error", {
    "prefer": { "arg": "param", "argument": "param", "return": "returns" }
  }], // https://github.com/dwyl/goodparts/issues/56
  "no-irregular-whitespace": ["error", {
    "skipStrings": true,
    "skipComments": true,
    "skipRegExps": true,
    "skipTemplates": true
  }], // https://github.com/dwyl/goodparts/issues/45
  "no-func-assign": ["error"], // https://github.com/dwyl/goodparts/issues/35
  "no-extra-boolean-cast": "error", // https://github.com/dwyl/goodparts/issues/30
  "no-empty": ["error"], // https://github.com/dwyl/goodparts/issues/28
  "no-duplicate-case": ["error"], // https://github.com/dwyl/goodparts/issues/25
  "no-dupe-args": ["error"], // https://github.com/dwyl/goodparts/issues/22
  "no-control-regex": "error", // https://github.com/dwyl/goodparts/issues/21
  "no-constant-condition": ["error"], // https://github.com/dwyl/goodparts/issues/18
  "no-cond-assign": ["error"], // https://github.com/dwyl/goodparts/issues/15
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
