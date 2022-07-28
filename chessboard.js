
/* 
    Function prints a chessboard of size n x n.
*/

let chessBoard = (n) => {
    let result = "";
  
    // loop through rows
    for (let i = 1; i <= n; i++) { 
      // loop through columns
      for (let j = 1; j <= n; j++) { 
        // if row is odd
        if (i % 2 == 0) {
          if (j % 2 == 0) {
            result += " ";
          } else {
            result += "#";
          }
        } else {
          // if row is even
          if (j % 2 == 0) {
            result += "#";
          } else {
            result += " ";
          }
        }
      }
    //   return a new line after each row
      result += "\n";
    }
    return result;
  };
  
  console.log(chessBoard(8));