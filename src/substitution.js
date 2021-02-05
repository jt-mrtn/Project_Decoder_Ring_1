// Please refrain from tampering with the setup code provided here,
// as the index.html and test files rely on this setup to work properly.
// Only add code (e.g., helper methods, variables, etc.) within the scope
// of the anonymous function on line 6

const substitutionModule = (function () {
  // you can add any code you want within this function scope

  function substitution(input, alphabet, encode = true) {
    // your solution code here
    if (!alphabet) return false;

    function isUnique(stg) {
      return new Set(stg).size == stg.length;
    }

    const unique = isUnique(alphabet);
    if (alphabet.length !== 26 || !unique) return false;

    const alpha = "abcdefghijklmnopqrstuvwxyz";
    let alphaX = "";
    let alphaY = "";
    if (!encode) {
      alphaX = alphabet;
      alphaY = alpha;
    } else {
      alphaX = alpha;
      alphaY = alphabet;
    }

    const inputLow = input.toLowerCase();
    let newChar = "";
    let newStrg = "";
    for (let char of inputLow) {
      const getIndx = alphaX.indexOf(char); // alphaX
      if (char === " ") {
        newChar = " ";
      } else {
        newChar = alphaY.substring(getIndx, getIndx + 1); // alphaY
      }
      newStrg += newChar;
    }

    return newStrg;
  }

  return {
    substitution,
  };
})();

module.exports = substitutionModule.substitution;
