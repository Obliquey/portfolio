let sidebarOpen = false;
function openSideBar() {
    if (!sidebarOpen) {
        document.getElementById('navBar').classList.toggle('open');
        sidebarOpen = true;
    }
}
function closeSideBar() {
    if (sidebarOpen) {
        document.getElementById('navBar').classList.toggle('open');
        sidebarOpen = false;
    }
}
