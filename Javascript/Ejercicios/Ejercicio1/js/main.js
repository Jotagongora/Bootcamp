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

const keyInput = document.getElementsByTagName("input")[1];

textButton.addEventListener("click", function () {
    document.getElementById("pApartado4").textContent = textInput.value;
    textInput.value = "";
})

keyInput.addEventListener("input", function () {
    document.getElementById("pApartado4").textContent = keyInput.value;
})


const textArea = document.getElementsByTagName("textarea")[0];
const textButton2 = document.getElementsByTagName("button")[2];

textButton2.addEventListener("click", function () {
    if (textArea.value.length > 15) {
    document.getElementById("pApartado5").textContent = textArea.value;
    textArea.style.color = "green";
    } else {
        alert("Debes introducir al menos 15 carácteres")
    }
});

const parInput = document.getElementsByTagName("input")[2];
const parButton = document.getElementsByTagName("button")[3];

parButton.addEventListener("click", function () {
    if (parInput.value % 2 === 0) {
        parInput.classList.remove("border-red");
    } else {
        parInput.classList.add("border-red");
    }
})

const ap7ul = document.getElementsByTagName("ul")[1];

for (i = 1; i <= 10; i++) {
    let ap7li = document.createElement("li");
    ap7li.textContent = `Elemento ${i}`;
    ap7ul.appendChild(ap7li);
}

/* Apartado 8 */

const newTabButton = document.querySelector("#newTab");
const link = document.querySelector("a");

newTabButton.addEventListener("click", () => link.setAttribute("target", "blank"));


/* Apartado 9 */

const ap9Paragraph = document.querySelector("#colorsParagraph");
document.querySelector("#colorsSelect").addEventListener("change", e => {
    ap9Paragraph.style.color = e.target.value;
})

/* Apartado 10 */

const currentRandom = document.getElementById("currentRandom");
const totalNumbers = document.getElementById("totalNumbers");
const oddNumbers = document.getElementById("oddNumbers");
const evenNumbers = document.getElementById("evenNumbers");



document.getElementById("randomButton").onclick = () => {
    const randomNumber = Math.floor(Math.random() * 100);
    currentRandom.textContent = randomNumber;

    totalNumbers.textContent++;

    randomNumber % 2 === 0 ? evenNumbers.textContent++ : oddNumbers.textContent++;
};

/* Apartado 12 */

document.querySelector("#toggle").onclick = (e) => e.target.classList.toggle("btn");

/* Ejercico 1 */

const buttons = document.getElementsByClassName("btn2");

Array.from(buttons).forEach(button => button.onclick = (e) => e.target.classList.toggle("bg-darkcyan"));

