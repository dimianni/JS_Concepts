/*-----------------------------------------------------------*/
/* XHR, or XMLHttpRequest, is an object which is used to retrieve data from a server asynchronously.
-------------------------------------------------------------*/

const requestLink = 'https://jsonplaceholder.typicode.com/users';

// body is null for GET
function sendRequest(method, url, body = null) {

    return new Promise((resolve, reject) => {
        const xhr = new XMLHttpRequest();

        xhr.open(method, url);

        xhr.setRequestHeader("Content-Type", "application/json") // double quotes!!!

        xhr.addEventListener('load', function () {
            if (xhr.status >= 400) {
                reject(xhr.response);
            } else {
                resolve(JSON.parse(xhr.response));
            }
        })

        xhr.addEventListener('error', function () {
            reject(xhr.response);
        })

        // xhr.send(body) // Request Payload returns [object Object] 

        xhr.send(JSON.stringify(body)) // Request Payload returns body; But Request Headers Content-Type is text/plain (because we converted body to string);
    })

}


//-------------------- POST -------------------- 

// const body = {
//     name: 'Dima',
//     age: 20
// }

// sendRequest('POST', requestLink, body)
//     .then(response => console.log(response)) 


//-------------------- GET --------------------

// sendRequest('GET', requestLink)
//     // 'data' comes from resolve
//     .then(data => {
//         data.modified = true
//         console.log(data)
//     })
//     .catch(err => console.log(err))



/*-----------------------------------------------------------*/
/* Fetch is a new native JavaScript API. It allows to make network requests similar to XMLHttpRequest.
// The main difference between Fetch and XMLHttpRequest is that the Fetch API uses Promises, hence avoiding callback hell.
-------------------------------------------------------------*/
//-------------------- NOTE: fetch is a Promise --------------------

const requestLink = 'https://jsonplaceholder.typicode.com/users';

var me;

fetch('https://api.github.com/users/dimianni')
    .then(res => res.json()) // without .json() -> ReadableStream
    .then(data => me = data)
    .catch(err => console.log("Errror!"))

console.log(me); // undefined

//-------------------- GET --------------------

// body is null for GET
// function sendRequest(method, url, body = null) {

//     return fetch(url)

// }

// sendRequest('GET', requestLink)
//     // 'data' comes from resolve
//     .then(response => response.json())
//     .then(data => console.log(data))
//     .catch(err => console.log(err))

//-------------------- POST --------------------

// const me = {
//     name: 'Dima',
//     age: 20
// }

// function sendRequest(method, url, body = null) {

//     return fetch(url, {
//         method: method,
//         body: JSON.stringify(body),
//         headers: { "Content-Type": "application/json" } // double quotes!!!
//     })

// }

// sendRequest('POST', requestLink, me)
//     .then(response => response.json())
//     .then(data => console.log(data))


/*-----------------------------------------------------------*/
/* Callback
-------------------------------------------------------------*/

// function getData(url, callback) {
//     fetch(url)
//         .then(response => response.json())
//         .then(result => callback(result));
// }

// getData(requestLink, function (data) {
//    console.log(data);
// })

/*-----------------------------------------------------------*/
/* Async/await
-------------------------------------------------------------*/

// async function githubUsers() {
//     let response = await fetch('https://api.github.com/users')
//     let users = await response.json()
//     // console.log(users)
// }

// const users = githubUsers();

// console.log(users);
