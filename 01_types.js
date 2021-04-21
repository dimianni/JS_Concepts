/*-----------------------------------------------------------------------------*/
/* 7 types of data:
-------------------------------------------------------------------------------*/

// null, undefined, number, string, boolean, object (the only not primitive), symbol (ES6)

// console.log(typeof Symbol("JS"));
// console.log(typeof Math);

// Difference between "undefined" and "null":
// We get undefined if a varibale wasn't defined or doesn't have a value assigned. Also, functions that retun nothing.

/*-----------------------------------------------------------------------------*/
/* True or false?
-------------------------------------------------------------------------------*/

// let language = "JS";
// if (language) {
//     console.log("The best language is:", language);
// }
// NOTE: [], {}, function(){} will give true
// Falsy values include: "", null, 0, undefined, NaN, false

/*-----------------------------------------------------------------------------*/
/* Strings and numbers
-------------------------------------------------------------------------------*/

// console.log(1 + '2'); // 12
// console.log("" + 1 + 0); // 10
// console.log("" - 1 + 0); // -1
// console.log("3" * "8"); // 24
// console.log(4 + 10 + "px"); // 14px
// console.log("px" + 5 + 10); // px510
// console.log("42" - 40); // 2 
// console.log("42px" - 2); // NaN
// console.log(null + 2); // 2
// console.log(undefined + 2); // NaN

/*-----------------------------------------------------------------------------*/
/* == vs === 
-------------------------------------------------------------------------------*/
// == comapres values (JS is trying to bring everything to one type)
// === comapres values AND type

// console.log(2 == "2");
// console.log(2 === "2");
// console.log(undefined == null);
// console.log(undefined === null);
// console.log("0" == false);
// console.log("0" === false);

/*-----------------------------------------------------------------------------*/
/* Peculiarities
-------------------------------------------------------------------------------*/

console.log(false == ''); // True
console.log(false == []); // True
console.log(false == {}); // False
console.log("" == 0); // True
console.log("" == []); // True
console.log("" == {}); // False
console.log(0 == null); // False
console.log(0 == {}); // False
console.log(0 == []); // True