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
  "no-cond-assign": ["error", "never"]
};
