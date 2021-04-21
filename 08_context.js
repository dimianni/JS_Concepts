/*-----------------------------------------------------------------------------*/
/* Context (определяет как функция была вызвана, и постоянно указывает на ключевое слово this)
-------------------------------------------------------------------------------*/

// const person = {
//     surname: "Stark",
//     knows: function(what, name){
//         console.log(`You know ${what}, ${name} ${this.surname}`);
//     }
// }

// const john = {
//     surname: "Snow"
// }

// person.knows("everything", "Bran")

// // Context transfer
// // NOTE function in reality is an object
// person.knows.call(john, "nothing", "John")
// person.knows.apply(john, ["nothing", "John"])


// person.knows.bind(john, "nothing", "John")()
// // or...
// const bound = person.knows.bind(john, "nothing", "John")
// bound()



// function Person(name, age){
//     this.name = name,
//     this.age = age

//     console.log(this);
// }

// const elena = new Person("Elena", 20)


/*-----------------------------------------------------------------------------*/
/* Explicit Context 
-------------------------------------------------------------------------------*/

// function logTHIS(){
//     console.log(this);
// }

// let obj = {
//     num: 42
// }

// logTHIS.call(obj)
// logTHIS.apply(obj)
// logTHIS.bind(obj)()


/*-----------------------------------------------------------------------------*/
/* Implicit Context
-------------------------------------------------------------------------------*/

// const animal = {
//     legs: 8,
//     logTHIS: function(){
//         console.log(this);
//     }
// }

// animal.logTHIS()


/*-----------------------------------------------------------------------------*/
/* Arrow function Context
-------------------------------------------------------------------------------*/

function Cat(color){
    this.color = color
    console.log("This", this);
    // Arrow function does not create its own context
    ( () => console.log("Arrow this", this) )()
}

new Cat("red")