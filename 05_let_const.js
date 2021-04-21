/*-----------------------------------------------------------------------------*/
// Let VS Const 
// https://medium.com/javascript-scene/javascript-es6-var-let-or-const-ba58b8dcde75
/*------------------------------------------------------------------------------*/

/*-----------------------------------------------------------------------------*/
/* Let (ES6)
-------------------------------------------------------------------------------*/

// let a = "Var a"
// let b = "Var b"

// // Let can only be accessed in the Block scope
// {
//     let a = "New var a"

//     let b = "New Var b"

//     console.log(a, b);
// }

// console.log(a, b);



/*-----------------------------------------------------------------------------*/
/* Const cannot be reassigned
-------------------------------------------------------------------------------*/
// Error
// const PORT = 8888;
// PORT = 2000;

// Elements inside of arrays and objects CAN be changed
const array = ["JavaScript", "is", "awesome"]
array.push("!");
array[0] = "JS";
//Error
array = ["JavaScript", "is", "awesome"]
console.log(array);

const obj = {}
obj.name = "Dima"
obj.age = 26
console.log(obj);