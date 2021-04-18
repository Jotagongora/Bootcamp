// Constantes
const POST_URL = "https://jsonplaceholder.typicode.com/posts";
const PAGE_SIZE = 20;

//Variables
let posts = [];
let currentPage = 1;

//Selectores

const postDiv = document.querySelector("#postDiv");
document.querySelectorAll(".previousPage").forEach(button => button.addEventListener("click", changePage));
document.querySelectorAll(".nextPage").forEach(button => button.addEventListener("click", changePage));

//Utilidades

function fillDiv() {
    const newPagePost = paginate(posts, PAGE_SIZE, currentPage);
    postDiv.innerHTML = "";
    newPagePost.forEach(post => postDiv.innerHTML += `<h3>${post.id} ${post.title}</h3><p>${post.body}</p>`)
};

function changePage(event) {
    if (event.target.className === "previousPage" && currentPage > 1) {
        currentPage--;
    } else if (event.target.className === "nextPage" && currentPage < posts.length / PAGE_SIZE) {
        currentPage++;
    }
    fillDiv();
};

function paginate(array, page_size, page_number) {
    return array.slice((page_number - 1) * page_size, page_number * page_size);
}

fetch(POST_URL)
.then(response => response.json())
.then(data => {
    posts = [...data];
    fillDiv()});


// 6.2

//Constantes
const LOGIN_URL = "https://reqres.in/api/login";
const USERS_URL = "https://reqres.in/api/users";
//sELECTORES

const emailInput = document.querySelectorAll("input")[0];
const passwordInput = document.querySelectorAll("input")[1];
document.querySelector("#loginButton").addEventListener("click", login);
const usersList = document.querySelector("#usersList");

//Utilidades

function login(event) {
    event.preventDefault();
    const userInfo = {
        email: emailInput.value,
        password: passwordInput.value
    };
    
    const config = {
        method: "POST",
        headers: {"Content-Type": "application/json"},
        body: JSON.stringify(userInfo)
    };

    fetch(LOGIN_URL, config)
    .then(response => response.json())
    .then(data => {
        if(data.error) {
            alert(data.error)
        } else {
            fetchAllUsers();
        }
    })
};

async function fetchAllUsers() {
    // fetch(USERS_URL)
    // .then(response => response.json())
    // .then(data => console.log(data))

    let response = await fetch(USERS_URL);
    let data = await response.json();

    let users = [];
    for (let page = 1; page <= data.total_pages; page++) {
        response = await fetch(`${USERS_URL}?page=${page}`);
        let newData = await response.json();
        users = users.concat(newData.data);
    }
    users.forEach(user => usersList.innerHTML += `<li>${user.email}</li>`)
}