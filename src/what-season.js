const { NotImplementedError } = require('../lib');

/**
 * Extract season from given date and expose the enemy scout!
 *
 * @param {Date | FakeDate} date real or fake date
 * @returns {String} time of the year
 *
 * @example
 *
 * getSeason(new Date(2020, 02, 31)) => 'spring'
 *
 */
function getSeason(date) {
  if (arguments.length === 0) {
    return 'Unable to determine the time of year!';
  }

  const error = new Error();
  const message = `Invalid date!`;
  error.message = message;

  if (date.constructor.name !== 'Date' ||
      Object.getOwnPropertySymbols(date).length > 0) {
    throw error;
  }

  const seasonsArr = ['winter', 'spring', 'summer', 'autumn'];
  let month = date.getMonth() + 1;

  if (month === 1 || month === 2 || month === 12) {
    return seasonsArr[0];
  }
  if (month === 3 || month === 4 || month === 5) {
    return seasonsArr[1];
  }
  if (month === 6 || month === 7 || month === 8) {
    return seasonsArr[2];
  }
  if (month === 9 || month === 10 || month === 11) {
    return seasonsArr[3];
  }

  throw error;
}

module.exports = {
  getSeason
};
