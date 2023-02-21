let sideMenuOpen = false;

function toggleSideMenu() {
    sideMenuOpen = !sideMenuOpen;

    if (sideMenuOpen) {
        document.getElementById("main-navbar-section").classList.add("open");
    } else {
        document.getElementById("main-navbar-section").classList.remove("open");
    }
}