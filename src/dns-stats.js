const { NotImplementedError } = require('../lib');

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
  const ObjDNSStats = {};

  for (const domain of domains) {
    const reversedDomainArray = domain.split('.').reverse();
    let key = '';

    for (const elem of reversedDomainArray) {
      key = `${key}.${elem}`;

      if (key in ObjDNSStats) {
        ObjDNSStats[key] += 1;
      } else {
        ObjDNSStats[key] = 1;
      }
    }
  }

  return ObjDNSStats;
}

module.exports = {
  getDNSStats
};
