// Please refrain from tampering with the setup code provided here,
// as the index.html and test files rely on this setup to work properly.
// Only add code (e.g., helper methods, variables, etc.) within the scope
// of the anonymous function on line 6

const caesarModule = (function () {
  // you can add any code you want within this function scope

  function caesar(input, shift, encode = true) {
    if (
      !input ||
      !shift ||
      typeof input !== "string" ||
      isNaN(shift) ||
      shift === 0 ||
      shift < -25 ||
      shift > 25
    ) {
      return false;
    }
    input = input.toLowerCase();
    if (encode === false) {
      shift = -shift;
    }
    let output = "";
    if (shift > 0) {
      for (let i = 0; i < input.length; i++) {
        let charCoded = input.charCodeAt(i);
        for (let j = 0; j < shift; j++) {
          if (charCoded >= 97 && charCoded < 122) {
            charCoded++;
          } else if (charCoded === 122) {
            charCoded = charCoded - 26;
            charCoded++;
          } else if (charCoded === 96) {
            charCoded = charCoded + 26;
            charCoded++;
          }
        }
        output += String.fromCharCode(charCoded);
      }
    } else if (shift < 0) {
      for (let i = 0; i < input.length; i++) {
        let charCoded = input.charCodeAt(i);
        for (let j = 0; j > shift; j--) {
          if (charCoded > 97 && charCoded <= 122) {
            charCoded--;
          } else if (charCoded === 123) {
            charCoded = charCoded - 26;
            charCoded--;
          } else if (charCoded === 97) {
            charCoded = charCoded + 26;
            charCoded--;
          }
        }
        output += String.fromCharCode(charCoded);
      }
    }
    return output;
  };

  return {
    caesar,
  };
})();

module.exports = caesarModule.caesar;
