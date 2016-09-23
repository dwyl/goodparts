module.exports = {
  "space-infix-ops": ["error", {"int32Hint": false}], // https://github.com/dwyl/goodparts/issues/32
  "max-len": ["error", 80], // https://github.com/dwyl/goodparts/issues/186
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
  "max-len": ["error", {
    code: 80,
    ignoreTrailingComments: true,
    comments: 80,
    tabWidth: 2,
    ignoreUrls: false,
    ignoreStrings: false,
    ignoreTemplateLiterals: false
  }], // https://github.com/dwyl/goodparts/issues/186
};
