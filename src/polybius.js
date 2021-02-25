// Please refrain from tampering with the setup code provided here,
// as the index.html and test files rely on this setup to work properly.
// Only add code (e.g., helper methods, variables, etc.) within the scope
// of the anonymous function on line 6

const polybiusModule = (function () {
  // you can add any code you want within this function scope
  //length property returns the length of a string (number of characters). The length of an empty string is 0.
  /*findIndex() method returns the index of the first element in the array that satisfies the provided testing function. 
  Otherwise, it returns -1, indicating that no element passed the test.
  input refers to the inputted text to be encoded or decoded.
  encode refers to whether you should encode or decode the message. By default it is set to true.
  */
  function polybius(input, encode = true) {
    


    //  const polybiusGrid = []
    /*11: "a", 21: "b", 31: "c", 41: "d",  51: "e",
    12: "f", 22: "g", 32: "h", 42: "i/j",52: "k",
    13: "l", 23: "m", 33: "n", 43: "o",  53: "p",
    14: "q", 24: "r", 34: "s", 44: "t",  54: "u",
    15: "v", 25: "w", 35: "x", 45: "y",  55: "z",
    */

    const abcTable = [
      { letter: "a", number: "11" },
      { letter: "f", number: "12" },
      { letter: "l", number: "13" },
      { letter: "q", number: "14" },
      { letter: "v", number: "15" },
      { letter: "b", number: "21" },
      { letter: "g", number: "22" },
      { letter: "m", number: "23" },
      { letter: "r", number: "24" },
      { letter: "w", number: "25" },
      { letter: "c", number: "31" },
      { letter: "h", number: "32" },
      { letter: "n", number: "33" },
      { letter: "s", number: "34" },
      { letter: "x", number: "35" },
      { letter: "d", number: "41" },
      { letter: "(i/j)", number: "42" },
      { letter: "o", number: "43" },
      { letter: "t", number: "44" },
      { letter: "y", number: "45" },
      { letter: "e", number: "51" },
      { letter: "k", number: "52" },
      { letter: "p", number: "53" },
      { letter: "u", number: "54" },
      { letter: "z", number: "55" },
    ];
    

    input = input.toLowerCase();
    //create holding variables
    let codePoly = ""; 
    const output = []; 
    if (encode) {
      for (let i = 0; i < input.length; i++) {
        if (input[i] >= "a" && input[i] <= "z") {
          codePoly = abcTable.find((index) => index.letter.includes(input[i])); 
          codePoly = codePoly.number;
          output.push(codePoly);
        } else {
          output.push(input[i]);
        }
      }
    } else {
      // testing if length of string with no spaces even
      for (let i = 0; i < input.length; i++) {
        if (!(input[i] == " ")) {
          codePoly += input[i];
        }
      }
      if (codePoly.length % 2) {
        return false;
      }
      for (let i = 0; i < input.length; ) {
        //checking if there is a space
        if (!(input[i] == " ")) {
         //if not, decode the current index and next index, then increment i by 2
          const currentNum = input[i] + input[i + 1];
          codePoly = abcTable.find((index) => index.number.includes(currentNum));
          codePoly = codePoly.letter; 
          i += 2;
        }
        //1 added to i, only if space
        else {
          codePoly = input[i];
          i++;
        }
        output.push(codePoly);
      }
    }
    return output.join("");
  }

return {
  polybius,
  };
})();

module.exports = polybiusModule.polybius;
