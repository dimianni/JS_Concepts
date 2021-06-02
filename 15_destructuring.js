/*----------------------------------------------------------------------------------------------*/
/* Destructuring is great for setting multiple object properties to variables at the same time.
------------------------------------------------------------------------------------------------*/

const me = {
    name: "Dmytro Anikin",
    nickname: "Dimianni",
    age: 20,
    tasks: ["learn JS", "exercise"]
}

/*--------------------------------------------------------*/
/* Instead of this:
----------------------------------------------------------*/
// const name = me.name
// const nickname = me.nickname
// const age = me.age

/*--------------------------------------------------------*/
/* Can do this:
----------------------------------------------------------*/
const { name: fullname, nickname, age, location = "Aberdeen" } = me;

console.log(fullname, nickname, age, location);



/*----------------------------------------------------------------------------------------------*/
/* Can also destructure object's properties when passing it into a function
------------------------------------------------------------------------------------------------*/

/*--------------------------------------------------------*/
/* Instead of this:
----------------------------------------------------------*/

// function logTasks(obj) {
//     obj.tasks.forEach(function (task) {
//         console.log(`${obj.name} has to ${task}`);
//     })
// }

/*--------------------------------------------------------*/
/* Can do this:
----------------------------------------------------------*/

// I can also set a new name for the object key.
// And even set a default value for a key that does not exist (otherwise it will return undefined)
const logTasks = ({ name:firstName, tasks, country = "US" }) => {
    tasks.forEach(task => {
        console.log(`${firstName}, from the ${country}, has to ${task}`);
    })
}

// logTasks(me);


/*----------------------------------------------------------------------------------------------*/
/* Nested destructuring
------------------------------------------------------------------------------------------------*/

const student = {
    firstname: 'Dimon',
    lastname: 'Anikin',
    ielts_scores: {
        speaking: 8.0,
        listening: 8.5,
        writing: 9.5,
        reading: 8.0
    }
};

const {
    firstname,
    lastname,
    country = "Ukraine",
    ielts_scores: { speaking, listening, writing, reading }
} = student;

// console.log(country, speaking, listening, writing, reading);


/*----------------------------------------------------------------------------------------------*/
/* Same goes for setting variables for array elements
------------------------------------------------------------------------------------------------*/

const arr = [1, 2, 3];

/*--------------------------------------------------------*/
/* Instead of this:
----------------------------------------------------------*/
// const a = arr[0]
// const b = arr[1]
// const c = arr[2]

/*--------------------------------------------------------*/
/* Can do this:
----------------------------------------------------------*/

const [a, c] = arr;

// console.log(a, c);



/*----------------------------------------------------------------------------------------------*/
/* Can also destructure an array when passed into a function
------------------------------------------------------------------------------------------------*/

/*--------------------------------------------------------*/
/* Instead of this:
----------------------------------------------------------*/
// function sum(array){
//     return array[0] + array[1] + array[2]
// }

/*--------------------------------------------------------*/
/* Can do this:
----------------------------------------------------------*/

const sum = ([a, b, c]) => a + b + c;


// console.log(sum(arr));
