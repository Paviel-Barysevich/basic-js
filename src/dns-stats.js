const { NotImplementedError } = require('../extensions/index.js');

/**
 * Given an array of domains, return the object with the appearances of the DNS.
 *
 * @param {Array} domains
 * @return {Object}
 *
 * @example
 * domains = [
 *  'code.yandex.ru',
 *  'music.yandex.ru',
 *  'yandex.ru'
 * ]
 *
 * The result should be the following:
 * {
 *   '.ru': 3,
 *   '.ru.yandex': 3,
 *   '.ru.yandex.code': 1,
 *   '.ru.yandex.music': 1,
 * }
 *
 */
function getDNSStats(domains) {
  let map = new Map();

  for (let domain of domains) {
    const domainArray = domain.split('.');
    const domainReversedName = '.' + domainArray.reverse().join('.');

    addToMap(domainReversedName);
  }

  function addToMap(domainName) {
    const domainNameArray = domainName.split('.');

    for (let i = 2; i <= domainNameArray.length; i++) {
      let key = domainNameArray.slice(0, i).join('.');

      if (map.has(key)) {
        let counter = map.get(key);

        counter++;
        map.set(key, counter);
      } else {
        map.set(key, 1);
      }
    }
  }

  const dNSStatsObject = Object.fromEntries(map.entries());

  return dNSStatsObject;
}

module.exports = {
  getDNSStats
};
