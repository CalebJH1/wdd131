const year = document.querySelector("#currentyear");
const date = document.querySelector("#lastModified");

let lastModification = new Date(document.lastModified);
const today = new Date();

year.innerHTML = today.getFullYear();
date.innerHTML = `Last Modified: ${new Intl.DateTimeFormat("en-US",{dateStyle: "short"}).format(lastModification)} ${new Intl.DateTimeFormat("en-US",{timeStyle: "long"}).format(lastModification)}`;



