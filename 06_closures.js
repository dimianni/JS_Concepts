/*-----------------------------------------------------------------------------*/
// Closures control what is and isn’t in scope in a particular function, 
// along with which variables are shared between sibling functions in the same containing scope.
// https://medium.com/javascript-scene/master-the-javascript-interview-what-is-a-closure-b2f0d2152b36
/*-----------------------------------------------------------------------------*/

/*-----------------------------------------------------------------------------*/
// A closure is the combination of a function bundled together(enclosed) with references to its surrounding 
// state(the lexical environment). In other words, a closure gives you access to an outer function’s scope from 
// an inner function. In JavaScript, closures are created every time a function is created, at function creation time.
// 
// To use a closure, define a function inside another function and expose it. To expose a function, return it or pass 
// it to another function. The inner function will have access to the variables in the outer function scope, even after 
// the outer function has returned.
/*-----------------------------------------------------------------------------*/


// const sayHelloTo = function(name){

//     let message = "Hello " + name;

//     return function() {
//         console.log(message);
//     }

// }

// const sayHelloToAndrey = sayHelloTo("Andrey");

// sayHelloToAndrey()


// function createFrameworkManager() {
//     const fw = ["React", "Angular"]

//     return {
//         get: function(){
//             return fw
//         },
//         add: function (framework) {
//             fw.push(framework)
//         }
//     }
// }
// console.log(fw); // is not defined (fw is not in the global scope)


// let create = createFrameworkManager() // object
// let fw = create.get() // access to fw variable
// console.log(fw);

// create has access to fw array that belongs to createFrameworkManager function
// create.add("Vue")
// create.print()



















var fib = [1, 2, 3, 5, 8, 13];

// for (var i = 0; i < fib.length; i++) {
//     setTimeout(
//         function () { // <- returned to call stack when i is already 6
//             console.log(`fib[${i}] = ${fib[i]}`);
//         },
//         1500
//     );
// }
// console.log(i);


// First solution:
// change to let because is only exists in the block scope (не попадает в глобальный scope)
for (let j = 0; j < fib.length; j++) {
    setTimeout(
        function () {
            console.log(`fib[${j}] = ${fib[j]}`);
        },
        1500
    );
}
console.log(j);


// Second solution:

// IIFE closure
for (let i = 0; i < fib.length; i++) {
    // вызввается сразу же, текущее i приравниваеться к j
    (function(j){
        setTimeout(() => {
            console.log(`fib[${j}] = ${fib[j]}`);
        }, 1500);
    })(i)
}






