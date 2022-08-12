
/* 
    Function prints a chessboard of size n x n.
*/

let chessBoard = (n) => {
    let result = "";
  
    // loop through rows
    for (let i = 1; i <= n; i++) {  // i = row
      // loop through columns
      for (let j = 1; j <= n; j++) {    // j = column
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
  
  // console.log(chessBoard(8));



  // Task

  let names = [
    {
      "firstName": "Shams",
      "LastName": "Aderoju"
    },
    {
      "firstName": "Kadir",
      "LastName": "Salami"
    },
    {
      "firstName": "Mohammadu",
      "LastName": "Buhari"
    }
  ]

let newnames = [];
names.forEach((name)=>{
  newnames.push(`${name.firstName} ${name.LastName} `) 
  
})
console.log(newnames.toString())