/*----------------------------------------------------------------------------------------------*/
/* Common array methods
------------------------------------------------------------------------------------------------*/

const alpha = ["A", "B", "C", "D", "E", "F", "G"]


/*--------------------------------------------------------*/
/* Push and Pop
//
// Add and Remove items in the array
// MUTATE ORIGINAL ARRAY!
----------------------------------------------------------*/

alpha.push("H", "I")
alpha.pop("H")

/*--------------------------------------------------------*/
/* Slice
//
// Returns selected elements in a new array
// DOES NOT MUTATE ORIGINAL ARRAY
----------------------------------------------------------*/

// Returns all elements starting from 2
// console.log(alpha.slice(2)); 

// Last index is not included
// console.log(alpha.slice(3, 6)); 

// Returns last elements of the array
// console.log(alpha.slice(-2)); 


/*--------------------------------------------------------*/
/* Splice
//
// Returns selected elements in a new array
// MUTATES ORIGINAL ARRAY!
----------------------------------------------------------*/

// Deletes and Returns all elements starting from index 2
// const res = alpha.splice(2)
// console.log(alpha, res);

// Deletes and Returns 3 elements starting from index 1
// const res2 = alpha.splice(1, 3)
// console.log(alpha, res2);

// Deletes and Returns 3 elements starting from index 1 and insert "Yee" instead
// const res3 = alpha.splice(1, 3, "Yee")
// console.log(alpha, res3);


/*--------------------------------------------------------*/
/* REVERSE
//
// Returns elements in a reversed order
// MUTATES ORIGINAL ARRAY!
----------------------------------------------------------*/

// const res = alpha.reverse()
// console.log(alpha, res);


/*--------------------------------------------------------*/
/* JOIN
//
// Joins array elements into a string
// DOES NOT MUTATE ORIGINAL ARRAY
----------------------------------------------------------*/

// Accepts separators as a parameter (default is a comma)
// const bond = alpha.join("")
// console.log(bond);


/*--------------------------------------------------------*/
/* Includes
//
// Returns true if array contains a specific value and false if doesn't 
// DOES NOT MUTATE ORIGINAL ARRAY
----------------------------------------------------------*/

const inc = alpha.includes("A")
// console.log(inc);


/*----------------------------------------------------------------------------------------------*/
/* Callback array methods
------------------------------------------------------------------------------------------------*/

/*--------------------------------------------------------*/
/* Filter
//
// Returns a new array with filtered elements
// Accepts callback function that will be applied to every element in the array
// DOES NOT MUTATE ORIGINAL ARRAY
----------------------------------------------------------*/

const ages = [12, 24, 11, 35, 59, 18]

const minors = ages.filter(function (num) {
    return num < 21
})

// console.log(minors);

/*--------------------------------------------------------*/
/* Find
//
// Returns the first element that passes the test
// Accepts callback function that will be applied to every element in the array
// DOES NOT MUTATE ORIGINAL ARRAY
----------------------------------------------------------*/

const firstFound = ages.find(function (num) {
    return num < 21
})
// console.log(firstFound);

/*--------------------------------------------------------*/
/* Every
//
// Returns true or false; Checks if every element in the array passes the test;
// Accepts callback function that will be applied to every element in the array
// DOES NOT MUTATE ORIGINAL ARRAY
----------------------------------------------------------*/

const all = ages.every(function (num) {
    return num < 21
})
// console.log(all);

/*--------------------------------------------------------*/
/* Sort
//
// Sorts the array in asc or desc order
// MUTATES ORIGINAL ARRAY
----------------------------------------------------------*/

// return < 0; A, B (keep order)
// return > 0; B, A (switch order)

// Ascending order
ages.sort((a, b) => {
    if (a > b) return 1
    if (a < b) return -1
})
ages.sort((a, b) => a - b)

// Descending order
ages.sort((a, b) => {
    if (a > b) return -1
    if (a < b) return 1
})
ages.sort((a, b) => b - a)



/*--------------------------------------------------------*/
/* Map
//
// Returns a new array with modified elements; Can be used in method chaining.
// Accepts callback function that will be applied to every element in the array
// DOES NOT MUTATE ORIGINAL ARRAY
----------------------------------------------------------*/

// i - index of the element
// arr - array which is being looped (useful when chaining)
const double = ages.map(function (age, i, arr) {
    return age * 2
})
// console.log(double);

/*--------------------------------------------------------*/
/* forEach
//
// Returns undefined. Great to use if nothing should be returned.
// Accepts callback function that will be applied to every element in the array;
// DOES NOT MUTATE ORIGINAL ARRAY
----------------------------------------------------------*/

ages.forEach(function (age) {
    // console.log(age);
})

// console.log(ages); // made no changes to the original array


/*--------------------------------------------------------------------------------------*/
/* Array.from() method
----------------------------------------------------------------------------------------*/

// Creating an array programmatically
const dices = Array.from({ length: 10 }, (el, i) => Math.round(Math.random() * 6))

// _ is a convention; Means that the variable is not used
const dices1 = Array.from({ length: 10 }, (_, i) => i + 1)

console.log(dices, dices1);

// Creating an array from NodeList
const mydivs = Array.from(document.querySelectorAll(".test"))