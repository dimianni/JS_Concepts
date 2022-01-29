/*-----------------------------------------------------------------------------*/
/* Scope is the space/environment in which a certain variable is declared.
// This influences the visibility (accessibility) of a varibale in the area of code.
//
// In general, there are two types of scopes, Global and Local:
//
//  - Global scope is the global object, or the window object if we are in a browser.
//
//  - Local scope, in turn, can be divided into Block scope (area within if, switch conditions, 
//    and for, while loops) and Function scope (area within a function).
-------------------------------------------------------------------------------*/

function funcA(){
    let a = 1;

    function funcB() {
        let b = 2;

        function funcC(params) {
            let c = 3;

            console.log("funcC:", a, b, c);
        }

        funcC();
        console.log("funcB:", a, b);
    }

    funcB();
    console.log("funcA:", a);
}

// funcA();


// let and const are visible only within the block scope, unlike var which leaks to the global scope.
{
    let i = 0;
    var j = 0;
}

// console.log(i); // not defined
// console.log(j); // 0

function testFunc() {
    let obj1 = {
        name: "Dimon",
        getName: () => {
            console.log(this);
        }
    }
    obj1.getName();
}

testFunc()