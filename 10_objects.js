/*-----------------------------------------------------------------------------*/
/* Objects and prototypes
-------------------------------------------------------------------------------*/
// https://medium.com/backticks-tildes/javascript-prototypes-ee46810e4866
// https://chamikakasun.medium.com/javascript-prototype-and-prototype-chain-explained-fdc2ec17dd04   !!!

// __proto__
// equals
// Object.getPrototypeOf()


// Person === Person.prototype.constructor
// Person.prototype === Person.prototype.constructor.prototype


// Constructor function
function Cat(name, color){
    this.name = name
    this.color = color
}

// Прототип это как отдельный обьект куда можно складывать свойства и методы
// Are not getting hoisted
Cat.prototype.voice = function(){
    console.log(`Cat ${this.name} says meow`);
}

const cat = new Cat("Dimon", "white")

console.log(cat); // object, has only initial properties

// Getting prototypes object
console.log(typeof cat.__proto__); // object
console.log(Cat.prototype); // same as above

console.log(cat.constructor); 

cat.voice()

// When an object gets a request for a property that it does not have, its prototype
// will be searched for the property, then the prototype’s prototype, and so on.So who 
// is the prototype of an object ? It is the great ancestral prototype, the entity behind 
// almost all objects, Object.prototype.Many objects don’t directly have Object.prototype 
// as their prototype, but instead have another object that provides a different set of 
// default properties.Functions derive from Function.prototype, and arrays derive from 
// Array.prototype and so on.



/*-----------------------------------------------------------------------------*/
/* Why prototypes are important
-------------------------------------------------------------------------------*/


let protoRabbit = {
    color: 'grey',
    speak(line) {
        console.log(`The ${this.type} rabbit says ${line}`);
    }
};
let killerRabbit = Object.create(protoRabbit);
killerRabbit.type = "assassin";
killerRabbit.speak("SKREEEE!");

// The method speak in the code above is inefficient because if you were to create multiple 
// rabbit objects, you would have the same function written everywhere and that’s where 
// prototype and constructor functions really come in.


function ProtoRabbit(color, words, type) {
    this.color = color;
    this.words = words;
    this.type = type;
};
ProtoRabbit.prototype.getColor = function () {
    return this.color;
}
ProtoRabbit.prototype.speak = function () {
    console.log(`The ${this.type} rabbit says ${this.words}`);
}

let killerRabbit = new ProtoRabbit('grey', 'SKREEEEE!', 'assassin');
killerRabbit.speak();



/*-----------------------------------------------------------------------------*/
/* Есть свойства прототипа и есть собственные (у обьекта)
-------------------------------------------------------------------------------*/

// function Person(){}

// Person.prototype.legs = 2;
// Person.prototype.skin = "white"

// const person = new Person()
// person.name = "Dimon"

// console.log("skin" in person); // true 
// console.log(person.name); // Dimon
// console.log(person.legs); // 2

/*-----------------------------------------------------------------------------*/
/* Как узнать где свойства прототипа, а где собственные
-------------------------------------------------------------------------------*/

// console.log(person.hasOwnProperty("name"));
// console.log(person.hasOwnProperty("skin"));




/*-----------------------------------------------------------------------------*/
/* Keyword new
-------------------------------------------------------------------------------*/

// this is how new keyword works natively
function myNew(constructor, ...args) {
    const obj = {}

    Object.setPrototypeOf(obj, constructor.prototype)

    return constructor.apply(obj, args) || obj
}

const cat2 = myNew(Cat, "black", "Fur")
console.log(cat2);