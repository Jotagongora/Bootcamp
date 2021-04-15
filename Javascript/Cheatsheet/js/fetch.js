const url = "https://jsonplaceholder.typicode.com/users";


function printNames(array) {
    array.forEach((user) => {
        console.log(`${user.name} lives in ${user.address.city} with lat ${user.address.geo.lat}`)
    })
};

// function addressProperties(array) {
//     array.forEach((user) => {
//         for (const property in user) {
//             console.log(`${property} : ${user[property]}`)
//         }
//     })
// }


fetch(url).then(r => r.json()).then(data => console.log(data));

fetch(url)
    .then(response => {
        if(!response.ok) {
            throw Error("Hay un problema con la respuesta: " + response.statusText);
        }
     return response.json();
    })
    .then(data => {
        printNames(data);
        // addressProperties(data);
    })
    .catch(error => console.log(error));

// Async await -- alternativa .then

async function requestURL(URL) {
    console.log(2);
    const response = await fetch(URL); // No sigue ejecutando codigo
    const data = await response.json(); // hasta que deje de ser promesa y se ejectue
    // console.log(data);
    console.log(4);
}                                     

console.log(1);
requestURL(url);
console.log(3);


// Peticion con metodo HTTP POST en lugar de get

const POST_URL = "http://jsonplaceholder.typicode.com/posts";

const newPost = {
    title: "mi título",
    body:"mi cuerpo de publicación",
}

const http = {
    method: "POST",
    headers: {
        "Content-type": "application/json"
    },
    body: JSON.stringify(newPost)
};

fetch(POST_URL, http)
.then(response => response.json)
.then(data = console.log(data));




