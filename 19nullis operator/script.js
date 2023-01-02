
/* The operator is a logical operator that return its right-hand side operand when its left hand side operand is null or undefined.*/

let user;

// we did not give any value to user so it is undefined.
// it works same in null or undefined.
alert(user ?? "Guest User")