module.exports = {
  "space-infix-ops": ["error", {"int32Hint": false}], // https://github.com/dwyl/goodparts/issues/32
  "unicode-bom": "off", // https://github.com/dwyl/goodparts/issues/19
  "space-unary-ops": [2, {"words": true, "nonwords": false}], // https://github.com/dwyl/issues/27
  "space-infix-ops": [2, {"int32Hint": false}], // https://github.com/dwyl/goodparts/issues/32
  "space-before-function-paren": [2, {"anonymous": "always", "named": "always"}], // https://github.com/dwyl/goodparts/issues/36
  "space-before-blocks": [2, {"functions": "always", "keywords": "always"}], // https://github.com/dwyl/goodparts/issues/37
  "semi": [2, "always", {"omitLastInOneLineBlock": true}], // https://github.com/dwyl/goodparts/issues/49
  "require-jsdoc": [2, {"require": {
      "FunctionDeclaration": false,
      "MethodDefinition": false,
      "ClassDeclaration": false
    }
  }], // https://github.com/dwyl/goodparts/issues/51
  "operator-linebreak": ["error", "before"], // http://eslint.org/docs/rules/operator-linebreak
  "operator-assignment": ["error", "always"], // https://github.com/dwyl/goodparts/issues/76
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
  "max-len": ["error", { "code": 80, "ignoreTrailingComments": true, "comments": 80, "tabWidth": 2, "ignoreUrls": false, "ignoreStrings": false, "ignoreTemplateLiterals": false }], // https://github.com/dwyl/goodparts/issues/186
  "max-depth": ["error", 4], // https://github.com/dwyl/goodparts/issues/187
  "lines-around-directive": ["error", { "before": "never", "after": "always" }], // https://github.com/dwyl/goodparts/issues/193
  "lines-around-comment": "off", // https://github.com/dwyl/goodparts/issues/194
  "linebreak-style": ["error", "unix"], // https://github.com/dwyl/goodparts/issues/195
  "line-comment-position": "error", // https://github.com/dwyl/goodparts/issues/196
  "keyword-spacing": ["error", { "before": true, "after": true }], // https://github.com/dwyl/goodparts/issues/197
  "key-spacing": ["error", { "beforeColon": false, "afterColon": true, "mode": 'strict' }] // https://github.com/dwyl/goodparts/issues/198
};
