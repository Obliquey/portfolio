let sidebarOpen : boolean = false;

function openSideBar() {
    if(!sidebarOpen){
        console.log('Helloooooo')
        document.getElementById('navBar').classList.toggle('open');
        sidebarOpen = true;
    }
}

function closeSideBar() {
    if(sidebarOpen){
        console.log('Helloooooo')
        document.getElementById('navBar').classList.toggle('open');
        sidebarOpen = false;
    }
}