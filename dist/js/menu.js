let showMenu = false;
let menu = null;

document.addEventListener("DOMContentLoaded", () => {
    menu = document.querySelector("header ul");
    document.querySelector("header span").addEventListener("click", (event) => {
        event.stopPropagation();
        toggleMenu();
    }, false);
    document.querySelector("html").addEventListener("click", hideMenu, false);
}, false);

function toggleMenu() {
    if (showMenu) {
        hideMenu();
    }
    else {
        menu.classList.add("show");
        showMenu = true;
    }
}

function hideMenu() {
    menu.classList.remove("show");
    showMenu = false;
}
