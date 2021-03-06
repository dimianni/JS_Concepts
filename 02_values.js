/*-----------------------------------------------------------------------------*/
/* Primitive
-------------------------------------------------------------------------------*/
// let a = 42;
// let b = a;

// b++;

// console.log("a", a); // 42
// console.log("b", b); // 43

/*-----------------------------------------------------------------------------*/
/* Reference
-------------------------------------------------------------------------------*/

let a = [1, 2, 3];
let b = a;
// let b = a.concat(); // clones array 

b.push(4)

// console.log("a", a); 
// console.log("b", b); 

let c = [1, 2, 3, 4];
// console.log(a === c); // false even though they have the same content


let testArr1 = [1, 2, 3];
let testArr2 = [1, 2, 3];
console.log(testArr1 === testArr2); // false