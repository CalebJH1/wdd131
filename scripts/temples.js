let heading = document.querySelector("heading");
let menuButton = document.querySelector(".menu-icon");
let num = 2;

menuButton.addEventListener('click', buttonClicked);

function buttonClicked() {
    if (num % 2 == 0) {
        heading.style.display = "inline";
        menuButton.textContent = "X";
    }

    if (num % 2 == 1) {
        heading.style.display = "none";
        menuButton.textContent = "≡";
    }
    num++;
}