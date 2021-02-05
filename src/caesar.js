// Please refrain from tampering with the setup code provided here,
// as the index.html and test files rely on this setup to work properly.
// Only add code (e.g., helper methods, variables, etc.) within the scope
// of the anonymous function on line 6

const caesarModule = (function () {
  // you can add any code you want within this function scope

  function caesar(input, shift, encode = true) {
    // your solution code here
    if (!input || !shift || shift === 0 || shift < -25 || shift > 25)
      return false;
    const alphabet = "abcdefghijklmnopqrstuvwxyz";
    const inputLow = input.toLowerCase();
    let newShift;
    if (!encode) {
      newShift = -shift;
    } else {
      newShift = shift;
    }
    let newStrg = "";
    let newChar = "";
    for (let char of inputLow) {
      const inputNum = alphabet.indexOf(char);
      const shiftNum = inputNum + newShift;
      if (inputNum === -1) {
        newChar = char;
      } else if (shiftNum > 25) {
        newChar = alphabet.substr(shiftNum - 26, 1);
      } else {
        newChar = alphabet.substr(shiftNum, 1);
      }
      newStrg += newChar;
    }

    return newStrg;
  }

  return {
    caesar,
  };
})();

module.exports = caesarModule.caesar;
