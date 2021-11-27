/*--------------------------------------------------------------*/
/* Defualt values for parameters
----------------------------------------------------------------*/

class Person {
    constructor(firstname, lastname, age){
        this.firstname = firstname
        this.lastname = lastname
        this.age = age
    }
}

const dima = new Person("Dima", "Anikin", 21)

function getFullname(person, prefix = "Mr.") {
    return `Fullname: ${prefix} ${person.firstname} ${person.lastname}`
}

const dimaFull = getFullname(dima)

// console.log(dimaFull);


/*--------------------------------------------------------------*/
/* Closures (calling two functions at a time)
----------------------------------------------------------------*/

function greet(greeting) {
    return function(name) {
        console.log(`${greeting} ${name}!`);
    }
}
const helloing = greet('Hello')
const heying = greet("Hey")

// helloing("Dima")
// heying("Dima")

// greet("Sup")("Dima")


