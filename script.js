//* Variables 
const body = document.querySelector('body');
const logo = document.querySelector('#logo');
const settings = document.querySelector("#settings");
const searchInput = document.querySelector("#search-input");
const normalSearchBtn = document.querySelector('#normal-search-btn');
const luckySearchBtn = document.querySelector('#lucky-search-btn');
const magnifyingGlassBtn = document.querySelector("#search-magnifying-glass");

//* Event Listeners 
settings.addEventListener("click", sla);
settings.addEventListener("keydown", (event) => {
    if (event.key !== "Enter") return;
    sla();
});

magnifyingGlassBtn.addEventListener("click", () => {
    searchInput.focus();
});

searchInput.addEventListener("keyup", (event) => {
    if (event.key !== "Enter") return;
    searchOnGoogle('https://www.google.com/search?q=');
});

normalSearchBtn.addEventListener("click", () => {
    searchOnGoogle('https://www.google.com/search?q=');
});

luckySearchBtn.addEventListener("click", () => {
    searchOnGoogle('https://www.google.com/search?btnI=1&q=');
});


//* Functions 
function sla() {
    body.classList.toggle("dark-theme");
    if (body.classList.contains("dark-theme")) {
        logo.src = "/img/google-logo-white.png";
    }
    else {
        logo.src = "/img/google-logo-colorful.png";
    }
}

function searchOnGoogle(googleUrl) {
    googleUrl += encodeURIComponent(searchInput.value);
    window.open(googleUrl, "_self");
}