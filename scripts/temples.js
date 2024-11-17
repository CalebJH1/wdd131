let heading = document.querySelector(".heading");
let menuButton = document.querySelector(".menu-icon");
let num = 2;

menuButton.addEventListener('click', buttonClicked);

window.addEventListener("resize", displayWindowSize);

function buttonClicked() {
    if (num % 2 == 0) {
        heading.style.display = "block";
        menuButton.textContent = "X";
    }

    if (num % 2 == 1) {
        heading.style.display = "none";
        menuButton.textContent = "≡";
    }
    num++;
}

function displayWindowSize() {
    const width = document.documentElement.clientWidth;
    if (width > 1000) {
        heading.style.display = "none";
    }

    if (width < 1000 && menuButton.textContent === "X") {
        heading.style.display = "block";
    }
}