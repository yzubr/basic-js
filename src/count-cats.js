const { NotImplementedError } = require('../extensions/index.js');

/**
 * Given matrix where you have to find cats by ears "^^"
 *
 * @param {Array<Array>} matrix 
 * @return {Number} count of cats found
 *
 * @example
 * countCats([
 *  [0, 1, '^^'],
 *  [0, '^^', 2],
 *  ['^^', 1, 2]
 * ]) => 3`
 *
 */
function countCats(arr) {
  let number = 0;
  if (arr.length === 0) return 0;
  else {
    return number = [].concat(...arr).map(item => (item === '^^') ? 1 : 0).map(i => x += i, x = 0).reverse()[0];
  };
}

module.exports = {
  countCats
};
