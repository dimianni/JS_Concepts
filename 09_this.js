// https://www.freecodecamp.org/news/learn-es6-the-dope-way-part-ii-arrow-functions-and-the-this-keyword-381ac7a32881/
/*-----------------------------------------------------------------*/
/* 'this' points to the owner of the function -> me object 
-------------------------------------------------------------------*/

const me = {
    name: "Dima",
    logName: function () {
        console.log(this.name); // this.name == "Dima"
    }
}
// me.logName()


/*-----------------------------------------------------------------*/
/* function within method has created its own scope -> 
// 'this' has fallen out of me object scope, and points to the global object
-------------------------------------------------------------------*/

const me2 = {
    name: "Dima",
    tasks: ["excercise", "learn JS"],
    logTasks: function () {
        this.tasks.forEach(function (task) {
            console.log(`${this.name}, you have to ${task}`); // this.name == undefined
        })
    }
}
// me2.logTasks()


/*-----------------------------------------------------------------*/
/* Solutions:
-------------------------------------------------------------------*/

// Capturing 'this' in a variable 
const solution1 = {
    name: "Dima",
    tasks: ["excercise", "learn JS"],
    logTasks: function () {
        const _this = this;
        this.tasks.forEach(function (task) {
            console.log(`${_this.name}, you have to ${task}`); // this.name == "Dima"
        })
    }
}
// solution1.logTasks()


// Binding the function to the object
const solution2 = {
    name: "Dima",
    tasks: ["excercise", "learn JS"],
    logTasks: function () {
        this.tasks.forEach(function (task) {
            console.log(`${this.name}, you have to ${task}`); // this.name == "Dima"
        }.bind(this))
    }
}
// solution2.logTasks()


// Using arrow functions, as they do not create their own context
const solution3 = {
    name: "Dima",
    tasks: ["excercise", "learn JS"],
    logTasks: function () {
        console.log(this);
        this.tasks.forEach(task => {
            console.log(`${this.name}, you have to ${task}`); // this.name == "Dima"
        })
    }
}
solution3.logTasks()


/*-----------------------------------------------------------------------------*/
/* Arrow function in object methods
// NOTE: NEVER USE ARROW FUNCTION AS A METHOD!!! 
-------------------------------------------------------------------------------*/

// Wrong
const arrow = {
    name: "Big fat arrow",
    log: () => {
        console.log(this); // undefined
        // ‘this’ always points at the owner of the function/method 'this' is in.
        // Arrow functions use 'lexical' this keyword. Meaning, the use the 'this' keyword of its parent
        // In this case, the owner of the method is the global object (NOTE: object declaration is NOT Block Scope)
    }
}
// arrow.log()


// Correct
const arrow2 = {
    name: "Big fat arrow2",
    log() {
        console.log(this.name);
    }
}
// arrow2.log()


