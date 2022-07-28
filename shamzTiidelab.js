/* Function prints Shamz for numbers divisible by 6 and TIIDELab
 for numbers divisible by 8. For numbers divisible by both 6 and 8,
 it prints ShamzTIIDELAB.
*/
let shamzTiidelab = (num) => {
  let result = "";

  for (let i = 1; i <= num; i++) {
    // if number is divisible by 6 and 8 print ShamzTIIDELAB
    if (i % 6 == 0 && i % 8 == 0) {
      result += "ShamsTIIDELAB ";
    } else if (i % 6 == 0 && i % 8 != 0) { // if number is divisible by 6 but not 8 print Shams
      result += "Shams ";
    } else if (i % 8 == 0 && i % 6 != 0) { // if number is divisible by 8 but not 6 print TIIDELab
      result += "TIIDELAB ";
    } else {
        // add spaces after each number
        result += i + " ";
    }
  }

  return result;
};

console.log(shamzTiidelab(200));
