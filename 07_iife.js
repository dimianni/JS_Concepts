/*-----------------------------------------------------------------------------*/
/* IIFE stands for -> Immediately invoked function expression
-------------------------------------------------------------------------------*/

// simple way to isolate variables declarations, 
// unlike block scoped let/const, IIFE variables are inaccessible from outside
(function () {
    console.log('IIFE');
})()

// EXAMPLE 
// ID generator

const generator = (function () {
    let id = Math.floor(Math.random() * 10)

    return function () {
        return id
    }
})()

console.log(generator());



// let result = []

// for (var i = 0; i < 5; i++) {
//     result.push(function(){
//         console.log(i);
//     })
//     // result[i]()
// }

// result[1](); // Gives 5, because it is the final value of i before loop end


// created own scope with iife
for (var i = 0; i < 5; i++) {
    (function(){
        var j = i;
        result.push(function(){
            console.log(j);
        })
    })()
}
// console.log(result[4]);
// result[4]();



