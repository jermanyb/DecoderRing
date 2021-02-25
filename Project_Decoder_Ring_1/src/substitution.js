// Please refrain from tampering with the setup code provided here,
// as the index.html and test files rely on this setup to work properly.
// Only add code (e.g., helper methods, variables, etc.) within the scope
// of the anonymous function on line 6

const substitutionModule = (function () {
  // you can add any code you want within this function scope
  const abcArray = [
    "a","b","c","d","e","f","g", "h", "i", "j", "k",
    "l", "m", "n", "o", "p","q", "r", "s", "t", "u",
    "v", "w", "x", "y", "z"
];
  function substitution(input, alphabet, encode = true) {
    // your solution code here
    
    /*input refers to the inputted text to be encoded or decoded.
    alphabet refers to substitution alphabet.
    encode refers to whether you should encode or decode the message. By default it is set to true.*/
      
      
      if(!alphabet) 
      return false;
      alphabet = alphabet.split(''); // divides alphabet into list of substrings
      // alphabet is not equal to 26 or new element is not equal to abc length, return false 
      if (alphabet.length !== 26 || (new Set(alphabet)).size !== alphabet.length) 
      return false; 
      //OR if(!input || !alphabet || alphabet.length !== 26) return false ******
      input = input.toLowerCase().split('');
      return (encode) ? 
          input.reduce((acc, character) => { //accumulator
              if (character === " ") {
                  acc.push(character);
              }
              let index = abcArray.indexOf(character); 
              acc.push(alphabet[index]);
              return acc;
          }, []).join("") :
          input.reduce((acc, character) => {
              if (character === " ") {
                  acc.push(character);
              }
              let index = alphabet.indexOf(character);
              acc.push(abcArray[index]);
              return acc;  
          },[]).join(""); 

  }

  return {
    substitution,
  };
})();

module.exports = substitutionModule.substitution;
