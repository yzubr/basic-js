const { NotImplementedError } = require('../extensions/index.js');

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
function getSeason(userDate) {
  throw new NotImplementedError('Not implemented');
    // remove line with error and write your code here
  // if (Date.parse(userDate) == NaN) {
  //   throw new Error('Invalid date!');
  // } else {
  //   if (userDate == undefined) {
  //     return 'Unable to determine the time of year!'
  //   } else {
  //     switch (userDate.getMonth()) {
  //       case 0:
  //       case 1:
  //       case 11:
  //         return 'winter';
  //         break;
  //       case 2:
  //       case 3:
  //       case 4:
  //         return 'spring';
  //         break;
  //       case 5:
  //       case 6:
  //       case 7:
  //         return 'summer';
  //         break;
  //       case 8:
  //       case 9:
  //       case 10:
  //         return 'fall';
  //         break;
  //     }

  //   }
  // }
}

module.exports = {
  getSeason
};
