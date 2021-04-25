/*-----------------------------------------------------------------------------*/
/* У JS 1 поток 
-------------------------------------------------------------------------------*/

// Call stack
// Even loop

const first = () => console.log("first");
const second = () => console.log("second");
const third = () => console.log("third");

first()
// API
setTimeout(second, 0);
third()