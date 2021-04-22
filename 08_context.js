/*-----------------------------------------------------------------------------*/
/* Context (определяет как функция была вызвана, и постоянно указывает на ключевое слово this)
-------------------------------------------------------------------------------*/


/*-----------------------------------------------------------------------------*/
/* Bind, Call, Apply
-------------------------------------------------------------------------------*/
// NOTE function in reality is an object


const club1 = {
    club: "Manchester",
    num: 7,
    player: function(name) {
        console.log(`${this.club}'s player, ${name}, number ${this.num}.`);
    }
}

const club2 = {
    club: "Madrid",
    num: 9
}


/*-----------------------------------------------------------------------------*/
/* Bind это способ передачи функции другому обьекту (при этом this будет указывать на новый обьект)
-------------------------------------------------------------------------------*/

// club1.player.bind(club2, "Ronaldo")()
const transfer = club1.player.bind(club2, "Ronaldo")
transfer()

/*-----------------------------------------------------------------------------*/

/*-----------------------------------------------------------------------------*/
/* Call is very similar to bind
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


/*-----------------------------------------------------------------------------*/
/* Arrow function Context
-------------------------------------------------------------------------------*/
// NOTE arrow function does not create its own context
// https://www.freecodecamp.org/news/learn-es6-the-dope-way-part-ii-arrow-functions-and-the-this-keyword-381ac7a32881/


// Wrong
const arrow = {
    name: "Big fat arrow",
    log: () => {
        console.log(this.name); 
        // undefined BECAUSE ‘this’, always references the owner of the function it is in, 
        // for this case — since it is now out of scope — the window/global object.
    }
}
arrow.log()

// Right
const arrow2 = {
    name: "Big fat arrow2",
    log() {
        console.log(this.name);
        // undefined BECAUSE ‘this’, always references the owner of the function it is in, 
        // for this case — since it is now out of scope — the window/global object.
    }
}
arrow2.log()







