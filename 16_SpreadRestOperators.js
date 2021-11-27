/*-----------------------------------------------------------------------------------------------*/
/* The Spread Operator looks like this: ...
// It “spreads” arrays/objects into separate arguments.
-------------------------------------------------------------------------------------------------*/

/* 

It is useful for many different routine tasks in JavaScript:

    - Copying a arrays/objects
    - Concatenating arrays/objects
    - Spread arrays into separate elements on the fly for functions that accept multiple arguments (can't be done for objects)

*/

// NOTE: the spread operator only copies the first level with a new reference, but the deeper values are still linked together!!!
// Just like Object.assign()

/*---------------------------------------------------------*/
/* Copying an array (with possible additions)
-----------------------------------------------------------*/

const hobbies = ["surfing", "coding", "travelling"]

const extendedHobbies = [...hobbies, "soccer"]

hobbies[0] = "snowboarding"

// console.log(hobbies);

/*---------------------------------------------------------*/
/* Concatenating two arrays
-----------------------------------------------------------*/

const fruits = ["melon", "apple", "orange"]
const vegies = ["tomato", "cucumber", "salad"]

const fv = [...fruits, ...vegies]

// console.log(fv);

/*---------------------------------------------------------*/
/* Using an array as an argument for functions that accept multiple arguments
-----------------------------------------------------------*/

const prices = ["$10", "$15", "$20", "$25"]

const getPrices = (x, y, z) => {
    return `Prices we offer: ${x}, ${y}, ${z}.`
}

// Array will automatically be spread into separate values
const pricesAvailable = getPrices(...prices)

console.log(pricesAvailable);


/*---------------------------------------------------------*/
/* Spread operator in objects
-----------------------------------------------------------*/

const myobj = {
    name: "Dima"
}

const myobj2 = {
    surname: "Anikin"
}

const comb = {
    ...myobj,
    ...myobj2,
    age: 21
}
comb.name = "Dmytro"

// console.log(myobj);
// console.log(comb);

const who = ({ name, surname, age }) => {
    return `This is ${name} ${surname}, he is ${age} y.o.`
}

const test = who(comb)

// console.log(test);

// NOTE: if two object have any same keys, last object's values will be taken 

const dog1 = {
    color1: "grey",
    eyes1: "blue"
}

const dog2 = {
    color2: "brown",
    eyes2: "green"
}

const twodogs = { ...dog1, ...dog2 }

// console.log(twodogs);

/*-----------------------------------------------------------------------------------------------*/
/* Rest operator looks just like Spread: ...
// BUT it is located on the left side from =
// It compresses elements into one array/object 
-------------------------------------------------------------------------------------------------*/

const mainDishes = ["pasta", "pizza"]
const starterDishes = ["salad", "soup"]

// NOTE: Rest element must go last!
const [pasta, ...restDishes] = [...mainDishes, ...starterDishes]

// console.log(pasta, restDishes);

/*---------------------------------------------------------*/
/* Rest operator in objects
-----------------------------------------------------------*/

const param = {
    weight: 190
}

const moreParam = {
    height: 187,
    gender: "male"
}

const { height, ...restParam } = { ...param, ...moreParam }

// console.log(height, restParam);


/*---------------------------------------------------------*/
/* Rest operator in functions
-----------------------------------------------------------*/

// No matter how many arguments I pass - they all are going to be gathered in one 'args' array
const mySum = (...args) => {
    return args.reduce((a, b) => a + b, 0)
}

// console.log(mySum(2,3,4,8,1,5));