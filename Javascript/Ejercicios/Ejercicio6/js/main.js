
const url = "http://jsonplaceholder.typicode.com/comments"
const url2 = "http://jsonplaceholder.typicode.com/posts";

const commentList = document.querySelector("#commentList");
const titleContent = document.querySelector("#titleContent");

function fillList(array) {
    const newArr = array.slice(0,19).forEach(post => {
       commentList.innerHTML += `
       <li>${post.name}</li>`;
    });
};

function fillPost(array) {
    array.slice(0, 19).forEach(post => {
        titleContent.innerHTML += `
        <h1>${post.title}</h1>
        <p>${post.body}<p>`;
        });
};

// async function fillPost2(url) {
//     const response = await fetch(url); 
//     const data = await response.json(); 
//     const newArr = [...data]
//     newArr.slice(0,19).forEach(post => {
//         titleContent.innerHTML += `
//         <h1>${post.title}</h1>
//         <p>${post.body}<p>`;
//     })
// } 

// fillPost2(url2);

fetch(url)
.then(response => response.json())
.then(data => fillList(data));

fetch(url2)
.then(response => response.json())
.then(data => fillPost(data));