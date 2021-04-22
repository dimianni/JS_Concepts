/*-----------------------------------------------------------------------------*/
/* Keyword new
-------------------------------------------------------------------------------*/
// A class in ES5
function Cat(color, name) {
    this.color = color
    this.name = name
}

const cat = new Cat("black", "Fur")
console.log(typeof cat); // object

// const test = Cat() // undefined
// const test = new Cat() // object with undefined values


// this is how new keyword works natively
function myNew(constructor, ...args){
    const obj = {}

    Object.setPrototypeOf(obj, constructor.prototype)

    return constructor.apply(obj, args) || obj
}

const cat2 = myNew(Cat, "black", "Fur")
console.log(cat2);
