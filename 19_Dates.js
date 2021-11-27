/*--------------------------------------------------------------------------------------*/
/* Working with dates
----------------------------------------------------------------------------------------*/

// Great library for date manipulations (including time zones, and time changes): https://momentjs.com/

/*--------------------------------------------------------------*/
/* Creating dates
----------------------------------------------------------------*/

const now = new Date();
// console.log(now);

const future = new Date(2050, 10, 19, 15, 23);
// console.log(future); // Object

console.log(new Date("Aug 12 2021 18:09:09"));
console.log(new Date("Dec 24 2021"));


const unixTime = new Date(0) // Unix Epoch (uniform date for the start of time)
console.log(unixTime); 

/*--------------------------------------------------------------*/
/* There are getters and setters methods
----------------------------------------------------------------*/
// console.log(future.getFullYear());
// console.log(future.getMonth()); // Months in JS are zero-based!
// console.log(future.getDay()); // Day of the week 
// console.log(future.getDate()); // Day of month
// console.log(future.getHours());
// console.log(future.getMinutes());
// console.log(future.getSeconds());

/*--------------------------------------------------------------*/
/* ISO and Timestamps
----------------------------------------------------------------*/

// console.log(future.toISOString()); // International standard

// console.log(future.getTime()); // timestamp. Milliseconds passed since 1 Jan 1970 (Unix Time)

// console.log(new Date(2552505780000)); // our date created with timestamp

// console.log(Date.now()) // current timestamp
