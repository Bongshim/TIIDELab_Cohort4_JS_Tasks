
/* 
    Function prints a chessboard of size n x n.
*/

let chessBoard = (n) => {
    let result = "";
  
    // loop through rows
    for (let i = 1; i <= n; i++) { // 1,2,3 = row
      // loop through columns
      for (let j = 1; j <= n; j++) { // 1,2,3,4,5,6,7,8 = column
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