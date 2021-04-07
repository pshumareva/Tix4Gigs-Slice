let browse = document.getElementById("browse");
let venues = document.getElementById("venues");

document.getElementByClassName("browse").addEventListener("click", openBrowse());


function openBrowse(){
    elementVenues = document.querySelector('#venues');
    elementBrowse = document.querySelector('#browse');
    elementBrowse.style.setProperty('display', '')
    elementVenues.style.setProperty('display', 'none')
}

document.getElementByClassName("venues").addEventListener("click",openVenues());

function openVenues(){
    browse.classList.add("hidden");
    elementVenues = document.querySelector('#venues');
    elementBrowse = document.querySelector('#browse');
    elementBrowse.style.setProperty('display', 'none')
    elementVenues.style.setProperty('display', 'grid')
}