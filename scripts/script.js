// JavaScript Document
console.log("hi");

let hamburgerButton = document.querySelector("header > button:nth-child(2)"); 
let nav = document.querySelector("header nav"); 

let searchButton = document.querySelector("header > button:nth-child(3)"); 
let search = document.querySelector("header search");

hamburgerButton.addEventListener("click", toggleButton); 

function toggleButton () {

    hamburgerButton.classList.toggle("is-open"); 
    nav.classList.toggle("is-visible"); 

    const hamburgerIsExpanded = hamburgerButton.classList.contains("is-open"); 
    hamburgerButton.setAttribute("aria-expanded", hamburgerIsExpanded); 

} 

searchButton.addEventListener("click", toggleSearch); 

function toggleSearch (){ 
    searchButton.classList.toggle("is-open");
    search.classList.toggle("is-visible"); 

    const searchIsExpanded = searchButton.classList.contains("is-open"); 
    searchButton.setAttribute("aria-expanded", searchIsExpanded); 
}

const deVideo = document.querySelector("video");
const deVideoButton = document.querySelector("main section:nth-of-type(1) button");

deVideoButton.onclick = toggleVideo;

function toggleVideo() {
    if(deVideo.paused){
        deVideo.play();
    }else{
        deVideo.pause();
    }
}