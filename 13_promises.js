/*-----------------------------------------------------------------*/
/* A promise is an object that will return a value in future (resolved or rejected). It has three states: pending, fulfilled or rejected.
// Because of this “in future” thing, Promises are well suited for asynchronous JavaScript operations.
// Great article on Promises -> https://zellwk.com/blog/js-promises/
-------------------------------------------------------------------*/

// NOTE: resolve() and reject() are like conductors => they pass the value. Therefore they are ideal to serve as callbacks.
function test() {
    return new Promise(function (resolve, reject) {

        setTimeout(() => {

            let randomNum = Math.random();

            if (randomNum >= 0.5) {
                resolve(`Resolved 🔥 ${randomNum}`)
            } else{
                reject(`Rejected 😩`)
            }

        }, 2000);

    })
}

test()
    .then(res => console.log(res)) // Grabbing resolve
    .catch(err => console.log(err)) // Grabbing reject


// Example. I am preparing a party. Sofia promised to buy a Neapoletano cake in a week (1 sec in our case).
const sofiaBuysCake = cakeType => {

    return new Promise((resolve, reject) => {

        setTimeout(function(){
            if (cakeType === 'Neapoletano') {
                resolve("Let's partyyyyy!")
            } else {
                reject("Nope. Wrong cake.")
            }
        }, 1000)
    
    })

}

function buyMyself() {
    console.log('I will buy it myself.');
}

sofiaBuysCake('neapoletan')
    .then(response => console.log(response))
    .catch(error => {
        console.log(error)
        buyMyself()
    })


// That is the way promises work in JS, they are used to get or modify a piece of information. 
// When the promise resolves, we do something with the data that comes back. 
// When the promise rejects, we handle the error.


/*-----------------------------------------------------------------*/
/* There are three reasons why developers prefer promises over callbacks:
//
// Promises reduce the amount of nested code.
// Promises allow the visualization of the execution flow easily.
// Promises allows handling all the errors at once at the end of the chain.
-------------------------------------------------------------------*/

