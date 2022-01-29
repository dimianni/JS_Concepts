
// https://medium.com/developers-arena/javascript-classes-inheritance-and-prototype-chaining-es5-and-es6-way-4b8e9416702b

/*-----------------------------------------------------------------*/
/* Classes before ES5
-------------------------------------------------------------------*/

// Are hoisted
const dima = new Person(1, "Dimon", 185, 75)

// console.log(dima.coef());

// Constructor function
// Includes prototype chaining (__proto__ inside the __proto__)
function Person(id, name, height, weight) {
    this.id = id
    this.name = name
    this.height = height
    this.weight = weight
    // Never add methods directly to constructor functions
    this.coef = function () {
        let cf = this.weight / this.height
        return Math.round(cf * 100) / 100
    }
}

Person.prototype.inverseCoef = function () {
    let inverseCf = this.height / this.weight
    return Math.round(inverseCf * 100) / 100
}
// console.log(dima.inverseCoef());
// console.log(dima.constructor); // Person


/*-----------------------------------------------------------------*/
/* ES5 Classes
-------------------------------------------------------------------*/
// https://medium.com/@luke_smaki/javascript-es6-classes-8a34b0a6720a


// Really the same as constructor functions (they operate the same), just with easier lexical cover
class Footballer {
    constructor(information, name, club, number){
        this.name = name
        this.club = club
        this.number = number
    }

    // Will be inherited by class instances (in the .prototype)
    player(){
        console.log(`${this.name} plays for ${this.club} and has number ${this.number}.`);
    }
    getThis(){
        console.log(this);
    }

    // Will NOT be inherited by class instances
    static hey() {
        console.log("Hey!!!");
    }
}

const ibra = new Footballer("Ibra", "Milan", 9)
// ibra.getThis()

class Status extends Footballer{
    constructor(name, club, number, status){
        super(name, club, number)
        this.status = status
    }
    getStatus(){
        console.log(this.status);
    }
}

const ronaldo = new Status("Ronaldo", "MU", 7, "captain")

// ronaldo.getThis()



// Testing 'this' and static methods (bound to the class, not the object)
class Me{
    constructor(name, tasks){
        this.name = name
        this.tasks = tasks
    }
    logTasks(){
        this.tasks.forEach(function(task){
            console.log(`${this.name} has to ${task}`);
        }.bind(this))
    }

    static staticMethod(){
        console.log("I am so static.");
    }
}

const dimonchik = new Me("Dima", ["exercise", "learn JS"])
Me.staticMethod();
Math.abs(1.2);
// dimonchik.logTasks()

// dimonchik.staticMethod() // Error!
// Me.staticMethod() // I am so static.



