// Please refrain from tampering with the setup code provided here,
// as the index.html and test files rely on this setup to work properly.
// Only add code (e.g., helper methods, variables, etc.) within the scope
// of the anonymous function on line 6

const polybiusModule = (function () {
  // you can add any code you want within this function scope

  function polybius(input, encode = true) {
    // your solution code here
    const inputMod = input.split(" ").join("%%");

    if (encode === false && inputMod.length % 2 !== 0) return false;

    let newChar = "";
    let newStrg = "";
    if (encode === true) {
      const inputLow = input.toLowerCase();
      for (let char of inputLow) {
        switch (char) {
          case " ":
            newChar = " ";
            break;
          case "a":
            newChar = "11";
            break;
          case "b":
            newChar = "21";
            break;
          case "c":
            newChar = "31";
            break;
          case "d":
            newChar = "41";
            break;
          case "e":
            newChar = "51";
            break;
          case "f":
            newChar = "12";
            break;
          case "g":
            newChar = "22";
            break;
          case "h":
            newChar = "32";
            break;
          case "i":
            newChar = "42";
            break;
          case "j":
            newChar = "42";
            break;
          case "k":
            newChar = "52";
            break;
          case "l":
            newChar = "13";
            break;
          case "m":
            newChar = "23";
            break;
          case "n":
            newChar = "33";
            break;
          case "o":
            newChar = "43";
            break;
          case "p":
            newChar = "53";
            break;
          case "q":
            newChar = "14";
            break;
          case "r":
            newChar = "24";
            break;
          case "s":
            newChar = "34";
            break;
          case "t":
            newChar = "44";
            break;
          case "u":
            newChar = "54";
            break;
          case "v":
            newChar = "15";
            break;
          case "w":
            newChar = "25";
            break;
          case "x":
            newChar = "35";
            break;
          case "y":
            newChar = "45";
            break;
          case "z":
            newChar = "55";
            break;
        }
        newStrg += newChar;
      }
    } else {
      for (let i = 0; i < inputMod.length; i += 2) {
        const duo = inputMod.substring(i, i + 2);
        switch (duo) {
          case "%%":
            newChar = " ";
            break;
          case "11":
            newChar = "a";
            break;
          case "21":
            newChar = "b";
            break;
          case "31":
            newChar = "c";
            break;
          case "41":
            newChar = "d";
            break;
          case "51":
            newChar = "e";
            break;
          case "12":
            newChar = "f";
            break;
          case "22":
            newChar = "g";
            break;
          case "32":
            newChar = "h";
            break;
          case "42":
            newChar = "(i/j)";
            break;
          case "52":
            newChar = "k";
            break;
          case "13":
            newChar = "l";
            break;
          case "23":
            newChar = "m";
            break;
          case "33":
            newChar = "n";
            break;
          case "43":
            newChar = "o";
            break;
          case "53":
            newChar = "p";
            break;
          case "14":
            newChar = "q";
            break;
          case "24":
            newChar = "r";
            break;
          case "34":
            newChar = "s";
            break;
          case "44":
            newChar = "t";
            break;
          case "54":
            newChar = "u";
            break;
          case "15":
            newChar = "v";
            break;
          case "25":
            newChar = "w";
            break;
          case "35":
            newChar = "x";
            break;
          case "45":
            newChar = "y";
            break;
          case "55":
            newChar = "z";
            break;
        }

        newStrg += newChar;
      }
    }

    return newStrg;
  }

  return {
    polybius,
  };
})();

module.exports = polybiusModule.polybius;
