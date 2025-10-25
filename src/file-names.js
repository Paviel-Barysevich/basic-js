const { NotImplementedError } = require('../lib');

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
  const set = new Set();

  for (const name of names) {
    const setSize = set.size;
    set.add(name);

    for (let i = 1; i <= setSize; i += 1) {
      if (setSize === set.size) {
        const newName = `${name}(${i})`;

        set.add(newName);
      } else {
        break;
      }
    }
  }

  return Array.from(set);
}

module.exports = {
  renameFiles
};
