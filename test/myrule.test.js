'use strict';

const RuleTester = require('eslint').RuleTester;
const rule = require('../rules/myrule');

const tester = new RuleTester();

tester.run('kiomahri-not-pass', rule, {
  valid: [{ code: 'どすこ' }, { code: '"こんちくわ"' }, { code: '"喫茶店"' }],
  invalid: [{ code: '"どすこい"', errors: ['どすこい禁止だぞ'] }],
});
