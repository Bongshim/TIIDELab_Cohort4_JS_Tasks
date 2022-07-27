/* Function prints Shamz for numbers divisible by 6 and TIIDELab
 for numbers divisible by 8. For numbers divisible by both 6 and 8,
 it prints ShamzTIIDELAB.
*/
let shamzTiidelab = (num) => {
  let result = "";

  for (let i = 1; i <= num; i++) {
    if (i % 6 == 0 && i % 8 == 0) {
      result += "ShamsTIIDELAB ";
    } else if (i % 6 == 0 && i % 8 != 0) {
      result += "Shams ";
    } else if (i % 8 == 0 && i % 6 != 0) {
      result += "TIIDELAB ";
    } else {
      result += i + " ";
    }
  }

  return result;
};

console.log(shamzTiidelab(200));

/* 
    Function prints a chessboard of size n x n.
*/

let chessBoard = (val) => {
  let result = "";

  // loop through rows
  for (let i = 1; i <= val; i++) {
    // loop through columns
    for (let j = 1; j <= val; j++) {
      // if row is even
      if (i % 2 == 0) {
        if (j % 2 == 0) {
          result += " ";
        } else {
          result += "#";
        }
      } else {
        // if row is odd
        if (j % 2 == 0) {
          result += "#";
        } else {
          result += " ";
        }
      }
    }
    result += "\n";
  }
  return result;
};

console.log(chessBoard(8));
