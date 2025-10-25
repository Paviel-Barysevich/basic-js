const { decorateObject } = require('../lib');
const { NotImplementedError } = require('../lib');

/**
 * Implement chainMaker object according to task description
 *
 */
const chainMaker = {
  chain: [],

  getLength() {
    return this.chain.length;
  },
  addLink(value) {
    const valueToString = `( ${value} )`;

    this.chain.push(valueToString);

    return this;
  },
  removeLink(position) {
    if (position > 0 && position <= this.chain.length) {
      this.chain.splice(position - 1, 1);
    } else {
      this.chain.length = 0;

      return new Error(`You can't remove incorrect link!`);
    }

    return this;
  },
  reverseChain() {
    this.chain.reverse();

    return this;
  },
  finishChain() {
    const chain = `${this.chain.join('~~')}`;

    this.chain.length = 0;

    return chain;
  },
};

module.exports = {
  chainMaker,
};
