module.exports = {
  "space-infix-ops": ["error", {"int32Hint": false}], // https://github.com/dwyl/goodparts/issues/32
  "array-bracket-spacing": ["error", "never"], // https://github.com/dwyl/goodparts/issues/219
  "block-spacing": "error", // https://github.com/dwyl/goodparts/issues/218
  "brace-style": ["error", "1tbs", { "allowSingleLine": true }], // https://github.com/dwyl/goodparts/issues/217
  "camelcase": "error", // https://github.com/dwyl/goodparts/issues/216
  "comma-style": ["error", "last"], // https://github.com/dwyl/goodparts/issues/215
  "comma-spacing": ["error", { "before": false, "after": true }], // https://github.com/dwyl/goodparts/issues/214
  "comma-dangle": ["error", "never"], // https://github.com/dwyl/goodparts/issues/213
  "computed-property-spacing": ["error", "never"], // https://github.com/dwyl/goodparts/issues/212
  "consistent-this": "off", // https://github.com/dwyl/goodparts/issues/211
  "eol-last": "error", // https://github.com/dwyl/goodparts/issues/210
  "func-call-spacing": ["error", "never"], // https://github.com/dwyl/goodparts/issues/209
  "func-names": "off", // https://github.com/dwyl/goodparts/issues/208
  "func-style": "off", // https://github.com/dwyl/goodparts/issues/207
  "id-blacklist": "off", // https://github.com/dwyl/goodparts/issues/205
  "id-length": "off", // https://github.com/dwyl/goodparts/issues/204
  "id-match": "off", // https://github.com/dwyl/goodparts/issues/202
  "indent": ["error", 4], // https://github.com/dwyl/goodparts/issues/201
  "jsx-quotes": "off", // https://github.com/dwyl/goodparts/issues/199
  "padded-blocks": ["error", "never"], // https://github.com/dwyl/goodparts/issues/55
  "quote-props": ["error", "consistent-as-needed", { "keywords": false }], // https://github.com/dwyl/goodparts/issues/54
  "quotes": ["error", "single", {"avoidEscape": false, "allowTemplateLiterals": false}], // https://github.com/dwyl/goodparts/issues/53
  "semi-spacing": ["error", {"before": false, "after": true}], // https://github.com/dwyl/goodparts/issues/50
  "sort-keys": "off", // https://github.com/dwyl/goodparts/issues/39
  "sort-vars": "off", // https://github.com/dwyl/goodparts/issues/38
  "space-in-parens": ["error", "never"], // https://github.com/dwyl/goodparts/issues/34
  "spaced-comment": ["error", "always"], // https://github.com/dwyl/goodparts/issues/20
  "wrap-regex": "off", // https://github.com/dwyl/goodparts/issues/17
  "max-len": [
    "error", {
      code: 80,
      ignoreTrailingComments: true,
      comments: 80,
      tabWidth: 2,
      ignoreUrls: false,
      ignoreStrings: false,
      ignoreTemplateLiterals: false
    }
  ], // https://github.com/dwyl/goodparts/issues/186
  "space-infix-ops": ["error", { "int32Hint": false }], // https://github.com/dwyl/goodparts/issues/32
  "unicode-bom": "off", // https://github.com/dwyl/goodparts/issues/19
  "space-unary-ops": [2, { "words": true, "nonwords": false }], // https://github.com/dwyl/issues/27
  "space-before-function-paren": [2, { "anonymous": "always", "named": "always" }], // https://github.com/dwyl/goodparts/issues/36
  "space-before-blocks": [2, { "functions": "always", "keywords": "always" }], // https://github.com/dwyl/goodparts/issues/37
  "semi": [2, "always", { "omitLastInOneLineBlock": true }], // https://github.com/dwyl/goodparts/issues/49
  "require-jsdoc": "off", // https://github.com/dwyl/goodparts/issues/51
  "operator-linebreak": ["error", "before"], // http://eslint.org/docs/rules/operator-linebreak
  "operator-assignment": ["error", "always"], // https://github.com/dwyl/goodparts/issues/76
  "one-var-declaration-per-line": "off",
  "one-var": ["error", { "initialized": "never", "uninitialized": "always" }],
  "object-property-newline": ["error", { "allowMultiplePropertiesPerLine": true }], // https://github.com/dwyl/goodparts/issues/85
  "object-curly-spacing": [2, "always", {"objectsInObjects": true, "arraysInObjects": true}], // https://github.com/dwyl/goodparts/issues/86
  "object-curly-newline": [2, { "minProperties": 2}], // https://github.com/dwyl/goodparts/issues/100
  "no-whitespace-before-property": 2, // https://github.com/dwyl/goodparts/issues/101
  "no-unneeded-ternary": ["error", { "defaultAssignment": false}],// https://github.com/dwyl/goodparts/issues/102
  "no-underscore-dangle": 0, // https://github.com/dwyl/goodparts/issues/103
  "no-trailing-spaces": 2, // https://github.com/dwyl/goodparts/issues/104
  "no-ternary": 0, // https://github.com/dwyl/goodparts/issues/107
  "no-tabs": 2, // https://github.com/dwyl/goodparts/issues/109
  "no-restircted-syntax": 0, // https://github.com/dwyl/goodparts/issues/111
  "no-plusplus": 0, // https://github.com/dwyl/goodparts/issues/122
  "no-new-object": 2, // https://github.com/dwyl/goodparts/issues/123
  "no-nested-ternary": 0, // https://github.com/dwyl/goodparts/issues/127
  "no-negated-condition": 0, // https://github.com/dwyl/goodparts/issues/145
  "no-multiple-empty-lines": ["error", { "max": 2, "maxBOF": 0, "maxEOF": 1}], // https://github.com/dwyl/goodparts/issues/148
  "no-mixed-spaces-and-tabs": 2, // https://github.com/dwyl/goodparts/issues/149
  "no-mixed-operators": 0, // https://github.com/dwyl/goodparts/issues/155
  "no-lonely-if": 2, // https://github.com/dwyl/goodparts/issues/160
  "no-inline-comments": 0, // https://github.com/dwyl/goodparts/issues/161
  "no-bitwise": 0, // https://github.com/dwyl/goodparts/issues/164
  "no-array-constructor": 2, // https://github.com/dwyl/goodparts/issues/165
  "newline-per-chained-call": ["error", { "ignoreChainWithDepth": 2 }], // https://github.com/dwyl/goodparts/issues/168
  "newline-before-return": "error", // https://github.com/dwyl/goodparts/issues/169
  "newline-after-var": ["error", "always"], // https://github.com/dwyl/goodparts/issues/170
  "new-parens": 2, // https://github.com/dwyl/goodparts/issues/171
  "new-cap": 2, // https://github.com/dwyl/goodparts/issues/173
  "multiline-ternary": 0, // https://github.com/dwyl/goodparts/issues/174
  "max-statements": 0, // https://github.com/dwyl/goodparts/issues/175
  "max-statements-per-line": ["error", {"max": 1}], // https://github.com/dwyl/goodparts/issues/176
  "max-params": ["error", 5], // https://github.com/dwyl/goodparts/issues/177
  "max-nested-callbacks": ["error", 4], // https://github.com/dwyl/goodparts/issues/184
  "max-lines": ["error", {"max": 300, "skipComments": true}], // https://github.com/dwyl/goodparts/issues/185
  "max-depth": ["error", 4], // https://github.com/dwyl/goodparts/issues/187
  "lines-around-directive": ["error", { "before": "never", "after": "always" }], // https://github.com/dwyl/goodparts/issues/193
  "lines-around-comment": "off", // https://github.com/dwyl/goodparts/issues/194
  "linebreak-style": ["error", "unix"], // https://github.com/dwyl/goodparts/issues/195
  "line-comment-position": "error", // https://github.com/dwyl/goodparts/issues/196
  "keyword-spacing": ["error", { "before": true, "after": true }], // https://github.com/dwyl/goodparts/issues/197
  "key-spacing": ["error", { "beforeColon": false, "afterColon": true, "mode": 'strict' }], // https://github.com/dwyl/goodparts/issues/198
  "no-restricted-syntax": "off", // https://github.com/dwyl/goodparts/issues/111
  "no-continue": "error", // https://github.com/dwyl/goodparts/issues/162
};
