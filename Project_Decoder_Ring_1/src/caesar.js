// Please refrain from tampering with the setup code provided here,
// as the index.html and test files rely on this setup to work properly.
// Only add code (e.g., helper methods, variables, etc.) within the scope
// of the anonymous function on line 6

const caesarModule = (function () {
  // you can add any code you want within this function scope


  /*input refers to the inputted text to be encoded or decoded.
shift refers to how much each letter is "shifted" by. A positive number means shifting to the right (i.e. "A" becomes "D") whereas a negative number means shifting to the left (i.e. "M" becomes "K").
encode refers to whether you should encode or decode the message. By default it is set to true.*/

  function caesar(input, shift, encode = true) {
    // your solution code here

    if(!input || !shift) {
      return false; }
    if (encode === false ){
      shift = shift * -1;
      return false;
    }

  
const alphabet = "abcdefghijklmnopqrstuvwxyz";
//beginning and end for shifted string
const begin = alphabet.slice(shift, alphabet.length)
const end = alphabet.slice(0, alphabet.indexOf(begin[0]));
//new shifted string stored
const shifted = begin + end;
const trueValue = input.toLowerCase();
let result = "";

for(let i = 0; i < trueValue.length; i++){ 
let character = trueValue[i].charCodeAt(0);
if(character < 97 || character > 122){
  result += trueValue[i];
}
else {
  let area = alphabet.indexOf(trueValue[i]);
  result += shifted[area];
}

}console.log(result);
return result;
  
  }

  return {
    caesar,
  };
})();

module.exports = caesarModule.caesar;
