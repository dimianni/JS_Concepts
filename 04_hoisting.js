/*-----------------------------------------------------------------------------*/
/* Hoisting is JavaScript's default behavior of moving all declarations to the top of the
// current scope (to the top of the current script or the current function).
-------------------------------------------------------------------------------*/

/*-----------------------------------------------------------------------------*/
/* Undefined (JS knows that 'i' is declared later. If it wasn't defined, it throws an Error)
-------------------------------------------------------------------------------*/
console.log(i);
var i = 42;
console.log(i);

// Const/let will throw an Error
console.log(x);
let x = 42;
console.log(x);


/*-----------------------------------------------------------------------------*/
/* Function Expression and Function Declaration
-------------------------------------------------------------------------------*/
// console.log(square(10)); 

// // Function Declaration (function can be accessed anywhere)
// function square(num){
//     return num**2
// }

// console.log(square(5)); 


// console.log(square2(10));

// // Function Expression (function CANNOT be accessed before it is declared)
// var square2 = function(num) {
//     return num ** 2
// }

// console.log(square2(5));