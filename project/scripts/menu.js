let desktopWidthMenu = document.querySelector('.desktop-width')
let dropdownMenu = document.querySelector(".drop-down-menu");
let menuButton = document.querySelector(".menu-icon");
let num = 2;

menuButton.addEventListener('click', buttonClicked);

window.addEventListener("resize", displayWindowSize);

function buttonClicked() {
    if (num % 2 == 0) {
        dropdownMenu.style.display = "block";
        menuButton.textContent = "X";
    }

    if (num % 2 == 1) {
        dropdownMenu.style.display = "none";
        menuButton.textContent = "≡";
    }
    num++;
}

function displayWindowSize() {
    const width = document.documentElement.clientWidth;
    if (width > 1300) {
        dropdownMenu.style.display = "none";
    }

    if (width < 1300 && menuButton.textContent === "X") {
        dropdownMenu.style.display = "block";
    }
}