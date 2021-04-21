/*-----------------------------------------------------------------------------*/
/* Objects and prototypes
-------------------------------------------------------------------------------*/

// __proto__
// equals
// Object.getPrototypeOf()

// A class in ES5
function Cat(name, color){
    this.name = name
    this.color = color
}

Cat.prototype.voice = function(){
    console.log(`Cat ${this.name} says meow`);
}

const cat = new Cat("Dimon", "white")
cat.voice()


// !!!!
// console.log(Cat.prototype);
// console.log(cat);
// console.log(cat.__proto__);
// console.log(cat.constructor);


/*-----------------------------------------------------------------------------*/
/* Есть свойства прототипа и есть собственные (у обьекта)
-------------------------------------------------------------------------------*/

function Person(){}

Person.prototype.legs = 2;
Person.prototype.skin = "white"

const person = new Person()
person.name = "Dimon"

// console.log("skin" in person); // true 
// console.log(person.name); // Dimon
// console.log(person.legs); // 2

/*-----------------------------------------------------------------------------*/
/* Как узнать где свойства прототипа, а где собственные
-------------------------------------------------------------------------------*/

console.log(person.hasOwnProperty("name"));
console.log(person.hasOwnProperty("skin"));