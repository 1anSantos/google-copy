// VAR
const body = document.body;
const titlePage = document.querySelector("title");

// ID
const logo = document.querySelector("#logo img");
const search = document.querySelector("#search");
const settings = document.querySelector("#settings");
const searchBTN = document.querySelector("#search-button");
const settingsBoard = document.querySelector("#settings-board");
const imFeelingLucktBTN = document.querySelector("#im-feeling-lucky-button");

// Class
const changeLogo = document.querySelector(".change-logo");
const changeTheme = document.querySelector(".change-theme");
const magnifyingGlass = document.querySelector("div.magnifying-glass");

// Functions
settings.addEventListener("click", () => {
    if (settingsBoard.style.display === "none") {
        settingsBoard.style.display = "block";
    }
    else {
        settingsBoard.style.display = "none";
    }
});

changeTheme.addEventListener("click", () => {
    body.classList.toggle("dark-theme");
});

changeLogo.addEventListener("click", () => {
    logo.classList.toggle("perry");
    if (logo.classList.contains("perry")) {
        logo.src = "./img/perry-search-logo.png";
        logo.alt = "image of perry the platypus searching";
        titlePage.innerHTML = `Google - Perry Search`;
        imFeelingLucktBTN.innerText = `I'm Feeling Spy`;
        searchBTN.innerText = `Perry Search`;
    }
    else {
        logo.src = "./img/google-logo-colorful.png";
        logo.alt = "Google Logo";
        titlePage.innerHTML = `Google`;
        searchBTN.innerText = `Google Search`;
        imFeelingLucktBTN.innerText = `I'm Feeling Lucky`;
    }
});

magnifyingGlass.addEventListener("click", () => {
    search.focus();
});

searchBTN.addEventListener("click", () => {
    searchOnGoogle('https://www.google.com/search?q=');
});

search.addEventListener("keyup", (event) => {
    if (event.key === "Enter") {
        searchOnGoogle('https://www.google.com/search?q=');
    }
});

imFeelingLucktBTN.addEventListener("click", () => {
    searchOnGoogle('https://www.google.com/search?btnI=1&q=');
});

function searchOnGoogle(googleUrl) {
    googleUrl += encodeURIComponent(search.value);
    window.open(googleUrl, "_blank");
}