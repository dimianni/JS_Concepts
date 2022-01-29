/*-----------------------------------------------------------------*/
/* Getters and setters in Classes
-------------------------------------------------------------------*/

// NOTE 
// The underscore in front of the properties is another example of a convention. 
// It also prevents a stack overflow when calling our methods. Also, note that we 
// are calling “jeff.name” not “jeff._name”. So the output is being returned from our getter.

class Person {

    constructor(fullname, birthYear) {
        this.fullname = fullname
        this.birthYear = birthYear
    }

    set fullname(name) {
        if (name.includes(' ')) {
            this._fullname = name
        } else {
            console.log(`${name} is not a full name!`);
        }
    }

    get fullname() {
        return this._fullname
    }

}

const dima = new Person("Dmytro Anikin", 2000);

dima.fullname = "Dima Anikin"

console.log(dima.fullname);


/*-----------------------------------------------------------------*/
/* Protected properties && methods
-------------------------------------------------------------------*/

class User {
    constructor(username, pin) {
        this.username = username
        // Protected property (_ convention). Shouldn't be used outside of class.
        this._pin = pin
    }

    // Public method to access the protected property
    getPin() {
        return this._pin
    }

    // Protected method (_ convention). Shouldn't be used outside of class.
    _internalMethod() {
        return 'Dummy text'
    }

}

/*-----------------------------------------------------------------*/
/* Public/Private fields && methods -- VERY RECENT FEATURE IN JS (2022)
-------------------------------------------------------------------*/

class Animal {

    // Public fields (present on all the instances)
    environments = [];

    // Private fields (cannot be read from outside the class)
    #population = 10;
    #exists;

    constructor(type, legs, exists) {
        this.type = type
        this.legs = legs
        this.#exists = exists
    }


    // The only way to access private fields (they will never show up otherwise)
    getPopulation(){
        return this.#population
    }

    getExists() {
        return this.#exists
    }

    #privateMethod(){
        console.log("I am a private method!");
    }

}

const dog = new Animal("dog", 4, true)
console.log(dog.getExists());