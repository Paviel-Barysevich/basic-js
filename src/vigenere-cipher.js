const { NotImplementedError } = require('../lib');

/**
 * Implement class VigenereCipheringMachine that allows us to create
 * direct and reverse ciphering machines according to task description
 *
 * @example
 *
 * const directMachine = new VigenereCipheringMachine();
 *
 * const reverseMachine = new VigenereCipheringMachine(false);
 *
 * directMachine.encrypt('attack at dawn!', 'alphonse') => 'AEIHQX SX DLLU!'
 *
 * directMachine.decrypt('AEIHQX SX DLLU!', 'alphonse') => 'ATTACK AT DAWN!'
 *
 * reverseMachine.encrypt('attack at dawn!', 'alphonse') => '!ULLD XS XQHIEA'
 *
 * reverseMachine.decrypt('AEIHQX SX DLLU!', 'alphonse') => '!NWAD TA KCATTA'
 *
 */
class VigenereCipheringMachine {
  constsList = {
    decrement: 'A'.charCodeAt(),
    posOfA: 'A'.charCodeAt(),
    posOfZ: 'Z'.charCodeAt(),
    ABCLength: 'Z'.charCodeAt() - 'A'.charCodeAt() + 1
  }

  constructor(boolean = true) {
    this.boolean = boolean;
    this.keyArray = [];
  }
  encrypt(string, key) {
    if (!string || !key) {
      throw new Error(`Incorrect arguments!`);
    }

    this.createKeyArray(key);

    const stringToArray = string.toUpperCase().split('').filter(elem => this.isUpperLatinLetter(elem));
    const encryptedArray = [];

    for (let i = 0; i < stringToArray.length; i += 1) {
      if (this.isUpperLatinLetter(stringToArray[i])) {
        const j = i % this.keyArray.length;
        const encryptedCharCode = stringToArray[i].charCodeAt() + this.keyArray[j];

        encryptedCharCode > this.constsList.posOfZ ?
        encryptedArray.push(String.fromCharCode(encryptedCharCode - this.constsList.ABCLength)) :
        encryptedArray.push(String.fromCharCode(encryptedCharCode));
      } else {
        encryptedArray.push(stringToArray[i]);
      }
    }

    let encryptedString = this.createString(string, encryptedArray);

    return encryptedString;
  }

  decrypt(string, key) {
    if (!string || !key) {
      throw new Error(`Incorrect arguments!`);
    }

    this.createKeyArray(key);

    const stringToArray = string.toUpperCase().split('').filter(elem => this.isUpperLatinLetter(elem));
    const decryptedArray = [];

    for (let i = 0; i < stringToArray.length; i += 1) {
      if (this.isUpperLatinLetter(stringToArray[i])) {
        const j = i % this.keyArray.length;
        const decryptedCharCode = stringToArray[i].charCodeAt() - this.keyArray[j];

        decryptedCharCode < this.constsList.posOfA ?
        decryptedArray.push(String.fromCharCode(decryptedCharCode + this.constsList.ABCLength)) :
        decryptedArray.push(String.fromCharCode(decryptedCharCode));
      } else {
        decryptedArray.push(stringToArray[i]);
      }
    }

    let decryptedString = this.createString(string, decryptedArray);

    return decryptedString;
  }

  createKeyArray(key) {
    this.keyArray.length = 0;

    const keyToUpperCase = key.toUpperCase();

    for (let i = 0; i < keyToUpperCase.length; i += 1) {
      const letterOrder =
      keyToUpperCase[i].charCodeAt() - this.constsList.decrement;
      this.keyArray.push(letterOrder);
    }
  }

  isUpperLatinLetter(sign) {
    const charCode = sign.charCodeAt();
    return charCode >= this.constsList.posOfA && charCode <= this.constsList.posOfZ;
  }

  createString(string, array) {
    let result = '';
    for (let i = 0; i < string.length; i += 1) {
      if (this.isUpperLatinLetter(string[i].toUpperCase())) {
        result += array.shift();
      } else {
        result += string[i];
      }
    }

    if (!this.boolean) {
      result = result.split('').reverse().join('');
    }

    return result;
  }
}

module.exports = {
  directMachine: new VigenereCipheringMachine(),
  reverseMachine: new VigenereCipheringMachine(false),
  VigenereCipheringMachine,
};
