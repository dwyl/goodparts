module.exports = {
  'max-len': {
    fail: [
      'aaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa'
    ],
    pass: [
      'aaaaaa'
    ]
  },
  'space-infix-ops': {
    fail: [
      'var a = 1+ 2;'
    ],
    pass: [
      'var a = 1 + 2;'
    ]
  },
  'jacks-rule' : null
}
