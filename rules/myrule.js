'use strict';

module.exports = {
  create: function (context) {
    return {
      Literal: function (node) {
        if (
          typeof node.value == 'string' &&
          node.value.indexOf('どすこい') !== -1
        ) {
          context.report({ node: node, message: 'どすこい禁止だぞ' });
        }
      },
    };
  },
};
