module.exports = {
  "space-infix-ops": ["error", {"int32Hint": false}], // https://github.com/dwyl/goodparts/issues/32
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
