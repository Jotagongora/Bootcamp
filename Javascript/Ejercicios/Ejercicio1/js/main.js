// Apartado 1

let myP = document.createElement("p");
let myP2 = myP.cloneNode(true);

const container = document.getElementsByTagName("div")[0];

container.appendChild(myP);
container.appendChild(myP2);

container.children[0].textContent = "Hola mundo";
container.children[1].textContent = "Hola mundo";

const colorButton = document.getElementsByTagName("button")[0];

colorButton.addEventListener("click", function () {
    document.body.classList.toggle("bg-darkcyan");
});

const imgClick = document.getElementsByTagName("ul")[0];
const imgClick2 = document.getElementsByTagName("img")[0];

imgClick.addEventListener("click", function (e) {
    // if (e.target === imgClick.children[0]) {
    //     imgClick.children[3].setAttribute("src", "https://wallpapercave.com/wp/wp2659765.jpg");
    //     imgClick.children[3].setAttribute("width", "80%");
    // } else if (e.target === imgClick.children[1]) {
    //     imgClick.children[3].setAttribute("src", "https://wallpapercave.com/wp/wp2970890.jpg");
    //     imgClick.children[3].setAttribute("width", "80%");
    // } else if (e.target === imgClick.children[2]) {
    //     imgClick.children[3].setAttribute("src", "https://i.pinimg.com/originals/6e/30/26/6e3026f6326053958b669e58272346f8.jpg");
    //     imgClick.children[3].setAttribute("width", "80%");
    // }
    imgClick2.src = e.target.textContent;
    imgClick2.width = "800";
 }
);

const textInput = document.getElementsByTagName("input")[0];

const textButton = document.getElementsByTagName("button")[1];

textButton.addEventListener("click", function () {
    document.getElementById("pApartado4").textContent = textInput.value;
})