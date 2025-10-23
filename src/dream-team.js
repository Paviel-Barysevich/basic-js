const { NotImplementedError } = require('../lib');

/**
 * Create name of dream team based on the names of its members
 *
 * @param {Array} members names of the members
 * @return {String | Boolean} name of the team or false
 * in case of incorrect members
 *
 * @example
 *
 * createDreamTeam(['Matt', 'Ann', 'Dmitry', 'Max']) => 'ADMM'
 * createDreamTeam(['Olivia', 1111, 'Lily', 'Oscar', true, null]) => 'LOO'
 *
 */
function createDreamTeam(members) {
  if (!Array.isArray(members) || members?.length === 0) {
    return false;
  }

  const filteredArray = members.filter(elem => typeof elem === 'string' && elem?.length > 0);
  const mappedArray = filteredArray.map(string => string.trim().toUpperCase());
  mappedArray.sort();
  let abbr = mappedArray.reduce((acc, name) => acc + name[0], '');

  return abbr ? abbr : false;
}

module.exports = {
  createDreamTeam
};
