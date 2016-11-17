'use strict';

module.exports = {
  'no-sync': 'off', // https://github.com/dwyl/goodparts/issues/144
  'no-restricted-properties': 'off', // https://github.com/dwyl/goodparts/issues/143
  'no-restricted-modules': 'off', // https://github.com/dwyl/goodparts/issues/139
  'no-process-exit': 'error', // https://github.com/dwyl/goodparts/issues/136
  'no-process-env': 'off', // https://github.com/dwyl/goodparts/issues/134
  'no-path-concat': 'error', // https://github.com/dwyl/goodparts/issues/132
  'no-new-require': 'error', // https://github.com/dwyl/goodparts/issues/129
  'no-mixed-requires': ['error', { grouping: true, allowCall: false }], // https://github.com/dwyl/goodparts/issues/126
  // https://github.com/dwyl/goodparts/issues/121
  'handle-callback-err': ['error', '^(error|err\d*)$'], // eslint-disable-line
  'global-require': 'error', // https://github.com/dwyl/goodparts/issues/119
  'callback-return': ['error', ['done', 'next', 'callback', 'cb']] // https://github.com/dwyl/goodparts/issues/112
};
