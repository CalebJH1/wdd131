let timesLoaded = JSON.parse(window.localStorage.getItem('times-loaded')) || 0
let mainElement = document.querySelector('main');

window.addEventListener("load", () => {
    timesLoaded++;
    window.localStorage.setItem('times-loaded', JSON.stringify(timesLoaded));
    const paragraph = document.createElement("p");
    paragraph.textContent = `Thank you for your response. You have submitted ${timesLoaded} responses.`;
    mainElement.appendChild(paragraph);
})