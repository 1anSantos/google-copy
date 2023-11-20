//* Variables 
const body = document.querySelector('body');
const logo = document.querySelector('#logo');
const settingsBtn = document.querySelector("#settings-btn");
const searchInput = document.querySelector("#search-input");
const normalSearchBtn = document.querySelector('#normal-search-btn');
const luckySearchBtn = document.querySelector('#lucky-search-btn');
const magnifyingGlassBtn = document.querySelector("#search-magnifying-glass");

//* Event Listeners 
document.addEventListener('DOMContentLoaded', function () {
    const savedDarkMode = localStorage.getItem('dark-theme');

    if (savedDarkMode === 'true') {
        logo.src = "/img/google-logo-white.png";
        document.body.classList.add('dark-theme');
    }
});

// settingsBtn.addEventListener("click", toggleTheme);
// settingsBtn.addEventListener("keydown", (event) => {
//     if (event.key !== "Enter") return;
//     toggleTheme();
// });

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
function toggleTheme() {
    body.classList.toggle("dark-theme");
    const isDarkMode = body.classList.contains("dark-theme")
    
    if (isDarkMode) {
        logo.src = "./img/google-logo-white.png";
    }
    else {
        logo.src = "./img/google-logo-colorful.png";
    }
    localStorage.setItem('dark-theme', isDarkMode);
}

function searchOnGoogle(googleUrl) {
    googleUrl += encodeURIComponent(searchInput.value);
    window.open(googleUrl, "_self");
}