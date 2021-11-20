/*-----------------------------------------------------------------------------*/
/* Bind, Call, and Apply are methods which are used to transfer a function to a 
// different object (while also transferring this context).
-------------------------------------------------------------------------------*/
// NOTE a JavaScript function in reality is an object.

const club1 = {
    club: "Manchester",
    num: 7,
    player: function (name) {
        console.log(`${this.club}'s player, ${name}, number ${this.num}.`);
    }
}

const club2 = {
    club: "Madrid",
    num: 9
}

/*-----------------------------------------------------------------------------*/
/* Bind 
-------------------------------------------------------------------------------*/

// club1.player.bind(club2, "Ronaldo")()
const transfer = club1.player.bind(club2, "Ronaldo")
transfer()

/*-----------------------------------------------------------------------------*/

/*-----------------------------------------------------------------------------*/
/* Call 
-------------------------------------------------------------------------------*/
// Differences:
// 1. Executes the function it was called upon right away.
// 2. The call() method does not make a copy of the function it is being called on. (!!!)

club1.player.call(club2, "Ronaldo")

/*-----------------------------------------------------------------------------*/

/*-----------------------------------------------------------------------------*/
/* Apply is exact same as call 
-------------------------------------------------------------------------------*/
// Differences:
// 1. Expects an array of parameters.

club1.player.apply(club2, ["Ronaldo"])

/*-----------------------------------------------------------------------------*/


/*-----------------------------------------------------------------------------*/
/* Passing a function to an object
-------------------------------------------------------------------------------*/

const myself = {
    name: "Dimon"
}

function me() {
    console.log(`My name is ${this.name}.`);
}

me.bind(myself)()










