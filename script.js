//* Variables 
const body = document.body;
const logo = document.querySelector('#logo');
const settingsBtn = document.querySelector("#settings-btn");
const changeLogoBtn = document.querySelector("#change-logo-btn");
const changeThemeBtn = document.querySelector("#change-theme-btn");
const searchInput = document.querySelector("#search-input");
const normalSearchBtn = document.querySelector('#normal-search-btn');
const luckySearchBtn = document.querySelector('#lucky-search-btn');
const magnifyingGlassBtn = document.querySelector("#search-magnifying-glass");

//* Event Listeners 
document.addEventListener("DOMContentLoaded", function () {
    const savedDarkMode = localStorage.getItem('dark-theme');

    if (savedDarkMode !== "true") return;
    body.classList.add('dark-theme');
});

document.addEventListener("click", (event) => {
    const isDropdownBtn = event.target.matches("[data-dropdown-btn]");
    if (!isDropdownBtn && (event.target.closest("[data-dropdown]") != null)) return;

    let currentDropdown;

    if (isDropdownBtn) {
        currentDropdown = event.target.closest("[data-dropdown]");
        currentDropdown.classList.toggle("active");
    }

    document.querySelectorAll("[data-dropdown].active").forEach(dropdown => {
        if (dropdown === currentDropdown) return;
        dropdown.classList.remove("active");
    });
});

changeThemeBtn.addEventListener("click", toggleTheme);
changeThemeBtn.addEventListener("keydown", (event) => {
    if (event.key !== "Enter") return;
    toggleTheme();
});

changeLogoBtn.addEventListener("click", changeLogo);
changeLogoBtn.addEventListener("keydown", (event) => {
    if (event.key !== "Enter") return;
    changeLogo();
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
function searchOnGoogle(googleUrl) {
    googleUrl += encodeURIComponent(searchInput.value);
    window.open(googleUrl, "_self");
}

function changeLogo() {
    if (logo.style.content !== "var(--perry-logo)") {
        logo.style.content = "var(--perry-logo)";
    }
    else {
        logo.style.content = "var(--google-logo)";
    }
}

function toggleTheme() {
    body.classList.toggle("dark-theme");
    const isDarkMode = body.classList.contains("dark-theme");
    localStorage.setItem('dark-theme', isDarkMode);
}