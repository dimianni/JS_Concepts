/*-----------------------------------------------------------------------------*/
/* By default, JavaScript is single-threaded, it can only do one thing at a time.
// Therefore, it will block any subsequent operations until current is done.
-------------------------------------------------------------------------------*/


/*-----------------------------------------------------------------------------*/
/* Callbacks
// A callback is a function that is passed to another function as an argument to be 'called' later.
// Callbacks are used in two different ways — in synchronous functions and asynchronous functions.
-------------------------------------------------------------------------------*/

// The most vivid example of callbacks are eventListeners, where a function is passed as an argument 
// and executed when a user does something.
// Here is another synchronous example:

const numbers = [2, 5, 6, 9, 12, 3, 4];
const getLessThanFive = number => number < 5;
const lessThanFive = numbers.filter(getLessThanFive);
console.log(lessThanFive);


// Callbacks in asynchronous JavaScript:
// Really great article on callbacks in asynchronous JavaScript -> https://zellwk.com/blog/callbacks/
// Tool that visulizes the event loop: http://latentflip.com/loupe/

function async(){
    console.log('I am asynchronous!');
}
setTimeout(async, 1000);


setTimeout(function() {
    let one = 'One'
    console.log(one);

    setTimeout(function() {
        
        let two = 'Two'
        console.log(two);

        setTimeout(function(){

            let three = 'Tree'
            console.log(three);

        }, 1000)

    }, 1000);

}, 1000);