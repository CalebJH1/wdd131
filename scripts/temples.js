const year = document.querySelector("#currentyear");
const date = document.querySelector("#lastModified");

let lastModified = new Date(document.lastModified);
const today = new Date();

year.innerHTML = today.getFullYear();
date.innerHTML = `Last Modified: ${new Intl.DateTimeFormat("en-US",{dateStyle: "short"}).format(lastModified)} ${new Intl.DateTimeFormat("en-US",{timeStyle: "long"}).format(lastModified)}`;