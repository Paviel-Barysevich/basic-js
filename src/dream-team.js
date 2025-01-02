const { NotImplementedError } = require('../extensions/index.js');

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
  if (!Array.isArray(members)) return false;

  const filterValue = (value) => typeof value === 'string';
  let filteredMembers = members
                        .filter(filterValue)
                        .map((value) => value.trim().toUpperCase());

  const dreamTeamName = filteredMembers.sort().reduce((teamName, name) => {
    return teamName + name[0];
  }, '');

  return dreamTeamName;
}

module.exports = {
  createDreamTeam
};
