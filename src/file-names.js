const { NotImplementedError } = require('../extensions/index.js');

/**
 * There's a list of file, since two files cannot have equal names,
 * the one which comes later will have a suffix (k),
 * where k is the smallest integer such that the found name is not used yet.
 *
 * Return an array of names that will be given to the files.
 *
 * @param {Array} names
 * @return {Array}
 *
 * @example
 * For input ["file", "file", "image", "file(1)", "file"],
 * the output should be ["file", "file(1)", "image", "file(1)(1)", "file(2)"]
 *
 */
function renameFiles(names) {
  let setOfUniqueNames = new Set();

  for (let name of names) {
    if (setOfUniqueNames.has(name)) {
      addNumberToName(name);
    } else {
      setOfUniqueNames.add(name);
    }
  }

  function addNumberToName(fileName) {
    let i = 1;

    while (true) {
      const newFileName = fileName + '(' + i + ')';

      if (setOfUniqueNames.has(newFileName)) {
        i++;
      } else {
        setOfUniqueNames.add(newFileName);
        break;
      }
    }
  }

  const arrayOfUniqueNames = Array.from(setOfUniqueNames);

  return arrayOfUniqueNames;
}

module.exports = {
  renameFiles
};
