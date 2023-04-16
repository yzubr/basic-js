const { NotImplementedError } = require('../extensions/index.js');

/**
 * Create a repeating string based on the given parameters
 *  
 * @param {String} str string to repeat
 * @param {Object} options options object 
 * @return {String} repeating string
 * 
 *
 * @example
 * 
 * repeater('STRING', { repeatTimes: 3, separator: '**', 
 * addition: 'PLUS', additionRepeatTimes: 3, additionSeparator: '00' })
 * => 'STRINGPLUS00PLUS00PLUS**STRINGPLUS00PLUS00PLUS**STRINGPLUS00PLUS00PLUS'
 *
 */
function repeater(str, obj) {
  function addition() {
    let res = '';
    if (obj.additionSeparator !== undefined) {
      for (let i = 0; i < obj.additionRepeatTimes - 1; i++) {
        res += obj.addition + obj.additionSeparator;
      };
      res += obj.addition;
    } else {
      for (let i = 0; i < obj.additionRepeatTimes - 1; i++) {
        res += obj.addition + '|';
      };
      res += obj.addition;
    }
    return res;
  };

  let result = '';
  resAdd = addition();
  if (obj.addition !== undefined) {
    if (obj.separator !== undefined) {
      for (let i = 0; i < obj.repeatTimes - 1; i++) {
        result += str + resAdd + obj.separator;
      }
      result += str + resAdd;
    } else {
      for (let i = 0; i < obj.repeatTimes - 1; i++) {
        result += str + resAdd + '+';
      }
      result += str + resAdd;
    }
  } else {
    if (obj.separator !== undefined) {
      for (let i = 0; i < obj.repeatTimes - 1; i++) {
        result += str + obj.separator;
      }
      result += str;
    } else {
      for (let i = 0; i < obj.repeatTimes - 1; i++) {
        result += str + '+';
      }
      result += str;
    }
  }
  return result;
}

module.exports = {
  repeater
};
